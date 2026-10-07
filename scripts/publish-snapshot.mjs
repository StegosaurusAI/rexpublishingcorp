import { spawn, execFileSync } from 'node:child_process';
import { lstatSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setImmediate as nextTurn, setTimeout as delay } from 'node:timers/promises';

const root = fileURLToPath(new URL('../', import.meta.url));
const expectedProject = {
  projectId: 'prj_h2kdCPNPVxUwY6EDp0cEQz2q4xI4',
  orgId: 'team_E3GGoyWVFdoPzDhyaZRQYzaO',
  projectName: 'rexpublishingcorp',
};
let lock;
let ownsLock = false;
let temporary;
let interrupted;
let successMessage;
let recordPath;
let record;
const saveRecord = (changes) => {
  Object.assign(record, changes);
  writeFileSync(recordPath, JSON.stringify(record, null, 2) + '\n', { mode: 0o600 });
};
const groups = new Set();
const signalStatus = { SIGINT: 130, SIGTERM: 143, SIGHUP: 129 };
let notifyInterruption;
const interruption = new Promise((resolve) => { notifyInterruption = resolve; });

const checkInterrupted = () => {
  if (interrupted) throw new Error(`Interrupted by ${interrupted}`);
};
// Keep the hardened Newscube group draining semantics: leader exit is not proof
// that descendants are gone; a single bounded drain owns each group's deadline.
const drainGroup = (group, signal = 'SIGTERM') => {
  if (group.drain) return group.drain;
  group.drain = (async () => {
    let lastError;
    const send = (value) => {
      try { process.kill(-group.pgid, value); } catch (error) {
        if (error.code !== 'ESRCH') lastError = `${value}: ${error.code || error.message}`;
      }
    };
    const gone = () => {
      try { process.kill(-group.pgid, 0); } catch (error) {
        if (error.code === 'ESRCH') {
          group.gone = true;
          return true;
        }
        lastError = `probe: ${error.code || error.message}`;
      }
      return false;
    };
    try {
      const started = performance.now();
      send(signal);
      while (!gone() && performance.now() - started < 500) await delay(25);
      if (group.gone) return true;
      send('SIGKILL');
      const killed = performance.now();
      while (!gone() && performance.now() - killed < 1500) await delay(25);
      if (group.gone) return true;
      group.problem = lastError || 'still present after SIGKILL confirmation deadline';
    } catch (error) {
      group.problem = error.message;
    } finally {
      group.leader.unref();
    }
    return false;
  })();
  return group.drain;
};
const git = (...args) => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8' }).trim();
const checkCheckout = (sha) => {
  if (git('rev-parse', '--verify', 'HEAD') !== sha) throw new Error('Commit must match current HEAD');
  if (git('status', '--porcelain=v1', '--untracked-files=all', '--ignore-submodules=none')) {
    throw new Error('Working tree must be clean (staged, unstaged and untracked files)');
  }
};
const run = async (command, args, cwd, capture = false) => {
  await nextTurn();
  checkInterrupted();
  // Descendants creating new sessions/groups are outside this guarantee.
  const leader = spawn(command, args, { cwd, stdio: capture ? ['inherit', 'pipe', 'inherit'] : 'inherit', detached: true });
  let output = '';
  if (capture) leader.stdout.on('data', (chunk) => {
    process.stdout.write(chunk);
    output = (output + chunk.toString()).slice(-65536);
  });
  const group = leader.pid ? { pgid: leader.pid, leader, gone: false } : undefined;
  if (group) groups.add(group);
  const outcome = new Promise((resolve) => {
    leader.once('error', (error) => resolve({ error }));
    leader.once('exit', (code, signal) => resolve({ code, signal }));
  });
  const result = await Promise.race([outcome, interruption]);
  const drained = !group || await drainGroup(group, interrupted || 'SIGTERM');
  // Never let inherited output pipes gate completion after leader exit.
  if (capture) leader.stdout.destroy();
  if (!drained) {
    throw new Error(`Process group ${group.pgid} not confirmed gone: ${group.problem}; retaining snapshot and lock`);
  }
  checkInterrupted();
  if (result.error) throw result.error;
  if (result.code !== 0) throw new Error(`${command} failed (${result.signal || result.code})`);
  return output;
};
for (const signal of ['SIGINT', 'SIGTERM', 'SIGHUP']) {
  process.on(signal, () => {
    if (!interrupted) {
      interrupted = signal;
      process.exitCode = signalStatus[signal];
      notifyInterruption({ signal });
    }
    for (const group of groups) if (!group.gone) void drainGroup(group, interrupted);
  });
}

try {
  const args = process.argv.slice(2);
  if (args.length !== 1 || !/^[0-9a-f]{40}$/.test(args[0])) {
    throw new Error('Usage: npm run publish -- <full-40-character-HEAD-SHA> (exactly one argument)');
  }
  const sha = args[0];
  if (Object.keys(process.env).some((key) => /^VERCEL_(?:PROJECT|ORG|TEAM|SCOPE)(?:_|$)/.test(key))) {
    throw new Error('Environment project/organization overrides are not permitted');
  }
  checkCheckout(sha);
  const common = git('rev-parse', '--path-format=absolute', '--git-common-dir');
  lock = join(common, 'rexpublishingcorp-publication.lock');
  try {
    mkdirSync(lock, { mode: 0o700 });
    ownsLock = true;
  } catch (error) {
    if (error.code === 'EEXIST') throw new Error(`Publication lock already exists: ${lock}; inspect owner before manual orphan recovery`);
    throw error;
  }
  writeFileSync(join(lock, 'owner.json'), JSON.stringify({ pid: process.pid, sha, startedAt: new Date().toISOString(), root }) + '\n', { mode: 0o600 });
  recordPath = join(common, 'rexpublishingcorp-publication-last.json');
  record = { sha, deploymentURL: null, status: 'validating', root, startedAt: new Date().toISOString() };
  saveRecord({});
  checkCheckout(sha);
  if (!lstatSync(join(root, '.vercel')).isDirectory() ||
      !lstatSync(join(root, '.vercel/project.json')).isFile() ||
      git('ls-files', '--', '.vercel') ||
      !git('check-ignore', '--', '.vercel/project.json')) {
    throw new Error('Project link must be a regular ignored, untracked metadata file');
  }
  const project = JSON.parse(readFileSync(join(root, '.vercel/project.json'), 'utf8'));
  for (const [key, value] of Object.entries(expectedProject)) {
    if (project[key] !== value) throw new Error(`Invalid project-link ${key}`);
  }
  temporary = mkdtempSync(join(common, 'rexpublishingcorp-release-'));
  const snapshot = join(temporary, 'source');
  mkdirSync(snapshot);
  const archive = join(temporary, 'source.tar');
  const paths = git('ls-tree', '-r', '--name-only', '-z', sha).split('\0');
  if (paths.some((path) => /^(?:\.vercel(?:\/|$)|(?:dist|node_modules|\.astro)(?:\/|$)|\.env(?:$|\.))/.test(path) && path !== '.env.example')) {
    throw new Error('Committed environment/link/build artifacts cannot enter a release');
  }
  await run('git', ['-C', root, 'archive', '--format=tar', `--output=${archive}`, sha], root);
  await run('tar', ['-xf', archive, '-C', snapshot], root);
  rmSync(archive);
  mkdirSync(join(snapshot, '.vercel'));
  writeFileSync(join(snapshot, '.vercel/project.json'), JSON.stringify(expectedProject) + '\n', { mode: 0o600 });
  saveRecord({ status: 'preflight' });
  await run('npm', ['ci'], snapshot);
  await run('npm', ['run', 'preflight'], snapshot);
  // Retain the validated build outside the source uploaded to Vercel.
  const validatedDist = join(temporary, 'validated-dist');
  renameSync(join(snapshot, 'dist'), validatedDist);
  rmSync(join(snapshot, '.astro'), { recursive: true, force: true });
  checkCheckout(sha);
  saveRecord({ status: 'deploying' });
  const output = await run('vercel', ['deploy', '--prod', '--yes'], snapshot, true);
  saveRecord({ status: 'deployed-verify-failed' });
  const urls = output.match(/https:\/\/[a-zA-Z0-9-]+\.vercel\.app\b/g) || [];
  const deploymentURL = urls.at(-1);
  if (!deploymentURL) throw new Error('Deployed, but CLI did not return a deployment URL; live verification not completed');
  saveRecord({ deploymentURL, status: 'verifying-live' });
  renameSync(validatedDist, join(snapshot, 'dist'));
  await run('npm', ['run', 'verify:live'], snapshot);
  checkInterrupted();
  saveRecord({ status: 'verified', finishedAt: new Date().toISOString() });
  successMessage = `[publish] Committed snapshot ${sha} deployed and live-verified: ${deploymentURL}`;
} catch (error) {
  console.error(`[publish] ${error.message}`);
  if (record) {
    try {
      saveRecord({ status: ['verifying-live', 'deployed-verify-failed', 'verified'].includes(record.status) ? 'deployed-verify-failed' : record.status === 'deploying' ? 'deployment-unconfirmed' : 'failed-before-deploy', error: error.message });
    } catch (recordError) { console.error(`[publish] Status recording failed: ${recordError.message}`); }
  }
  process.exitCode = interrupted ? signalStatus[interrupted] : 1;
} finally {
  await Promise.all([...groups].map((group) => drainGroup(group, interrupted || 'SIGTERM')));
  const unresolved = [...groups].filter((group) => !group.gone);
  if (unresolved.length) {
    console.error(`[publish] Retaining snapshot ${temporary || '(not created)'} and lock ${lock}: unconfirmed process groups ${unresolved.map((group) => `${group.pgid} (${group.problem})`).join(', ')}`);
    process.exitCode = interrupted ? signalStatus[interrupted] : 1;
  } else {
    try {
      if (temporary) rmSync(temporary, { recursive: true, force: true });
      if (ownsLock) rmSync(lock, { recursive: true });
    } catch (error) {
      console.error(`[publish] Cleanup failed; retaining lock ${lock} for manual recovery: ${error.message}`);
      process.exitCode = interrupted ? signalStatus[interrupted] : 1;
    }
  }
}
await nextTurn();
if (successMessage && !interrupted && !process.exitCode) console.log(successMessage);
