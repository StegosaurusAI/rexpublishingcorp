import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';

// Inspect staged blobs, never print matching values or environment contents.
const git = (...args) => execFileSync('git', args, { maxBuffer: 32 * 1024 * 1024 });
const files = git('diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z').toString().split('\0').filter(Boolean);
const patterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/,
  /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/,
  /\bgh[pousr]_[A-Za-z0-9]{30,}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{50,}\b/,
  /\bsk-(?:proj-)?[A-Za-z0-9_-]{32,}\b/,
  /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/,
  /(?:token|secret|password|api[_-]?key)\s*[:=]\s*["'][A-Za-z0-9_\-+/=]{24,}["']/i,
];
const knownSecrets = [];
for (const file of ['.env', '.env.production', '.vercel/.env.production.local']) {
  const raw = await fs.readFile(new URL(`../${file}`, import.meta.url), 'utf8').catch(() => '');
  for (const line of raw.split(/\r?\n/)) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match || !/TOKEN|SECRET|PASSWORD|PRIVATE|API_KEY/i.test(match[1])) continue;
    const value = match[2].replace(/^(["'])(.*)\1$/, '$2');
    if (value.length >= 8) knownSecrets.push(value);
  }
}
const failed = [];
for (const file of files) {
  if (/(^|\/)\.env(?:\.|$)/.test(file) && !file.endsWith('.example') || /(^|\/)\.vercel\//.test(file)) {
    failed.push(file);
    continue;
  }
  const blob = git('show', `:${file}`).toString();
  if (patterns.some((pattern) => pattern.test(blob)) || knownSecrets.some((value) => blob.includes(value))) failed.push(file);
}
assert.equal(failed.length, 0, `Potential staged secrets in: ${failed.join(', ')} (values redacted)`);
console.log(`Staged secret check passed: ${files.length} files; credential patterns and known local secret values checked, values never printed.`);
