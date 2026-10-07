import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync, symlinkSync, realpathSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { setTimeout as delay } from 'node:timers/promises';

const tempRoot = tmpdir();
const identity = { projectId: 'prj_h2kdCPNPVxUwY6EDp0cEQz2q4xI4', orgId: 'team_E3GGoyWVFdoPzDhyaZRQYzaO', projectName: 'rexpublishingcorp' };
const publisher = readFileSync(new URL('./publish-snapshot.mjs', import.meta.url));
function fixture(t) {
  const dir = mkdtempSync(join(tempRoot, 'rex-publisher-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const root = join(dir, 'repo');
  const bin = join(dir, 'bin');
  mkdirSync(root); mkdirSync(bin); mkdirSync(join(root, 'scripts'));
  writeFileSync(join(root, 'scripts', 'publish-snapshot.mjs'), publisher);
  writeFileSync(join(root, '.gitignore'), '.vercel/\n.env\ndist/\n.astro/\nnode_modules/\n');
  writeFileSync(join(root, 'committed.txt'), 'committed snapshot\n');
  const git = (...args) => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  git('init', '-q'); git('add', '.');
  // Commits belong exclusively to disposable test fixture repositories.
  git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.test', '-c', 'commit.gpgsign=false', 'commit', '-qm', 'fixture');
  const sha = git('rev-parse', 'HEAD');
  const common = join(root, '.git');
  const link = (path = root, value = identity) => {
    mkdirSync(join(path, '.vercel'), { recursive: true });
    writeFileSync(join(path, '.vercel', 'project.json'), JSON.stringify(value));
  };
  link();
  writeFileSync(join(root, '.env'), 'never archive me');
  mkdirSync(join(root, 'dist')); writeFileSync(join(root, 'dist', 'poison'), 'shared');
  const stub = `#!${process.execPath}
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const command = path.basename(process.argv[1]);
const args = process.argv.slice(2);
fs.appendFileSync(process.env.TEST_LOG, JSON.stringify({command,args,cwd:process.cwd()})+'\\n');
assert(fs.existsSync(process.env.TEST_LOCK), 'lock must span every command');
assert(!fs.existsSync('.env'), 'ignored env must not enter source');
assert.equal(fs.readFileSync('committed.txt','utf8'), 'committed snapshot\\n');
assert.deepEqual(JSON.parse(fs.readFileSync('.vercel/project.json')), ${JSON.stringify(identity)});
(async () => {
  if (command === 'npm' && args[0] === 'ci') {
    assert(!fs.existsSync('dist'));
    if (process.env.TEST_BLOCK) {
      fs.writeFileSync(process.env.TEST_BLOCK+'.ready','ready');
      while (!fs.existsSync(process.env.TEST_BLOCK)) await new Promise(r => setTimeout(r, 20));
    }
  } else if (command === 'npm' && args[1] === 'preflight') {
    if (process.env.TEST_FAIL === 'preflight') process.exit(12);
    fs.mkdirSync('dist'); fs.writeFileSync('dist/snapshot-body','validated body');
    fs.mkdirSync('.astro');
  } else if (command === 'vercel') {
    assert.deepEqual(args,['deploy','--prod','--yes']);
    assert(!fs.existsSync('dist')); assert(!fs.existsSync('.astro'));
    const siblings = fs.readdirSync(path.dirname(process.cwd()));
    assert(siblings.includes('validated-dist'));
    if (process.env.TEST_FAIL === 'deploy') process.exit(13);
    console.log('https://rex-fixture.vercel.app');
  } else if (command === 'npm' && args[1] === 'verify:live') {
    assert.equal(fs.readFileSync('dist/snapshot-body','utf8'),'validated body');
    if (process.env.TEST_FAIL === 'live') process.exit(14);
  } else throw Error('Unexpected invocation');
})().catch(e => { console.error(e); process.exitCode=1; });
`;
  for (const name of ['npm', 'vercel']) writeFileSync(join(bin, name), stub, { mode: 0o755 });
  const log = join(dir, 'commands.jsonl');
  const lock = join(common, 'rexpublishingcorp-publication.lock');
  const env = { ...process.env, PATH: bin + ':' + process.env.PATH, TEST_LOG: log, TEST_LOCK: lock };
  for (const key of Object.keys(env)) if (/^VERCEL_(?:PROJECT|ORG|TEAM|SCOPE)(?:_|$)/.test(key)) delete env[key];
  const run = (args = [sha], extras = {}, location = root) => new Promise((resolve) => {
    const child = spawn(process.execPath, [join(location, 'scripts', 'publish-snapshot.mjs'), ...args], { env: { ...env, ...extras }, stdio: ['ignore', 'pipe', 'pipe'] });
    let output = '';
    child.stdout.on('data', (chunk) => { output += chunk; });
    child.stderr.on('data', (chunk) => { output += chunk; });
    child.on('close', (code) => resolve({ code, output }));
  });
  const commands = () => existsSync(log) ? readFileSync(log, 'utf8').trim().split('\n').map(JSON.parse) : [];
  const record = () => JSON.parse(readFileSync(join(common, 'rexpublishingcorp-publication-last.json')));
  return { dir, root, common, git, sha, link, lock, run, commands, record };
}

test('reject malformed/wrong SHA, dirty tree, env override before any commands', async (t) => {
  const f = fixture(t);
  for (const args of [[], [f.sha.slice(0, 8)], ['0'.repeat(40)], [f.sha, 'extra']]) assert.notEqual((await f.run(args)).code, 0);
  assert.match((await f.run([f.sha], { VERCEL_PROJECT_ID: identity.projectId })).output, /overrides/);
  writeFileSync(join(f.root, 'untracked.txt'), 'dirty');
  assert.match((await f.run()).output, /must be clean/);
  assert.deepEqual(f.commands(), []);
  assert(!existsSync(f.lock));
});
test('reject wrong and symlinked project metadata before deploy', async (t) => {
  const f = fixture(t);
  f.link(f.root, { ...identity, projectId: 'wrong' });
  assert.match((await f.run()).output, /Invalid project-link projectId/);
  rmSync(join(f.root, '.vercel', 'project.json'));
  writeFileSync(join(f.dir, 'project.json'), JSON.stringify(identity));
  symlinkSync(join(f.dir, 'project.json'), join(f.root, '.vercel', 'project.json'));
  assert.match((await f.run()).output, /regular ignored/);
  assert.deepEqual(f.commands(), []);
  assert(!existsSync(f.lock));
});
test('existing lock fails closed and remains owned by the other publisher', async (t) => {
  const f = fixture(t);
  mkdirSync(f.lock); writeFileSync(join(f.lock, 'owner.json'), 'other owner');
  assert.match((await f.run()).output, /lock already exists/);
  assert.equal(readFileSync(join(f.lock, 'owner.json'), 'utf8'), 'other owner');
  assert.deepEqual(f.commands(), []);
});
test('preflight failure never deploys', async (t) => {
  const f = fixture(t);
  assert.notEqual((await f.run([f.sha], { TEST_FAIL: 'preflight' })).code, 0);
  assert(!f.commands().some(({ command }) => command === 'vercel'));
  assert.equal(f.record().status, 'failed-before-deploy');
  assert(!existsSync(f.lock));
});
test('committed environment artifacts, including Git-quoted filenames, cannot enter the snapshot', async (t) => {
  const f = fixture(t);
  const name = '.env.local\tprivate';
  writeFileSync(join(f.root, name), 'private');
  f.git('add', '--', name);
  f.git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.test', '-c', 'commit.gpgsign=false', 'commit', '-qm', 'fixture env artifact');
  const sha = f.git('rev-parse', 'HEAD');
  const result = await f.run([sha]);
  assert.notEqual(result.code, 0);
  assert.match(result.output, /Committed environment\/link\/build artifacts/);
  assert.deepEqual(f.commands(), []);
  assert(!existsSync(f.lock));
});
test('source-only deploy restores exact validated dist, verifies while locked, records success', async (t) => {
  const f = fixture(t);
  const result = await f.run();
  assert.equal(result.code, 0, result.output);
  assert.deepEqual(f.commands().map(({ args }) => args), [['ci'], ['run', 'preflight'], ['deploy', '--prod', '--yes'], ['run', 'verify:live']]);
  assert.equal(f.record().sha, f.sha);
  assert.equal(f.record().deploymentURL, 'https://rex-fixture.vercel.app');
  assert.equal(f.record().status, 'verified');
  assert(!existsSync(f.lock));
  assert.equal(readFileSync(join(f.root, 'dist', 'poison'), 'utf8'), 'shared');
});
test('deployed but live verification failed has a distinct failure record', async (t) => {
  const f = fixture(t);
  const result = await f.run([f.sha], { TEST_FAIL: 'live' });
  assert.notEqual(result.code, 0);
  assert.equal(f.record().status, 'deployed-verify-failed');
  assert.equal(f.record().deploymentURL, 'https://rex-fixture.vercel.app');
  assert(!result.output.includes('deployed and live-verified'));
  assert(!existsSync(f.lock));
});
test('deployment failure never proceeds to live verification', async (t) => {
  const f = fixture(t);
  assert.notEqual((await f.run([f.sha], { TEST_FAIL: 'deploy' })).code, 0);
  assert.equal(f.record().status, 'deployment-unconfirmed');
  assert(!f.commands().some(({ args }) => args.includes('verify:live')));
  assert(!existsSync(f.lock));
});
test('unconfirmable process group fails closed, retaining the snapshot and lock', async (t) => {
  const f = fixture(t);
  const preload = join(f.dir, 'probe-denied.mjs');
  writeFileSync(preload, `const kill = process.kill.bind(process); process.kill = (pid, signal) => {
    if (pid < 0 && signal === 0) { const error = new Error('probe denied'); error.code = 'EPERM'; throw error; }
    return kill(pid, signal);
  };`);
  const result = await f.run([f.sha], { NODE_OPTIONS: `--import=${preload}` });
  assert.notEqual(result.code, 0);
  assert.match(result.output, /not confirmed gone/);
  assert.match(result.output, /Retaining snapshot/);
  assert(existsSync(f.lock));
  assert(!f.commands().some(({ command }) => command === 'vercel'));
  assert.equal(f.record().status, 'failed-before-deploy');
});
test('unconfirmable deploy group closes captured output and retains resources without verifying', async (t) => {
  const f = fixture(t);
  const preload = join(f.dir, 'deploy-probe-denied.mjs');
  writeFileSync(preload, `import fs from 'node:fs'; const kill = process.kill.bind(process); process.kill = (pid, signal) => {
    if (pid < 0 && signal === 0 && fs.existsSync(process.env.TEST_LOG) && fs.readFileSync(process.env.TEST_LOG, 'utf8').includes('"command":"vercel"')) {
      const error = new Error('deploy probe denied'); error.code = 'EPERM'; throw error;
    }
    return kill(pid, signal);
  };`);
  const result = await f.run([f.sha], { NODE_OPTIONS: `--import=${preload}` });
  assert.notEqual(result.code, 0);
  assert.match(result.output, /Retaining snapshot/);
  assert(existsSync(f.lock));
  assert(f.commands().some(({ command }) => command === 'vercel'));
  assert(!f.commands().some(({ args }) => args.includes('verify:live')));
  assert.equal(f.record().status, 'deployment-unconfirmed');
});
test('linked worktree contends on the same common-git lock', async (t) => {
  const f = fixture(t);
  const linked = join(f.dir, 'linked');
  f.git('worktree', 'add', '--detach', linked, f.sha);
  f.link(linked);
  const gate = join(f.dir, 'gate');
  const first = f.run([f.sha], { TEST_BLOCK: gate });
  for (let i = 0; i < 200 && !existsSync(gate + '.ready'); i++) await delay(25);
  assert(existsSync(gate + '.ready'), 'first publisher reached locked snapshot');
  const second = await f.run([f.sha], {}, linked);
  assert.notEqual(second.code, 0);
  assert.match(second.output, /lock already exists/);
  assert(existsSync(f.lock));
  writeFileSync(gate, 'release');
  const result = await first;
  assert.equal(result.code, 0, result.output);
  assert(!existsSync(f.lock));
  const linkedResult = await f.run([f.sha], {}, linked);
  assert.equal(linkedResult.code, 0, linkedResult.output);
  assert.equal(f.record().root, realpathSync(linked) + '/');
});
