import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { parse } from 'parse5';
import { fileURLToPath } from 'node:url';

export const origin = 'https://rexpublishingcorp.com';
export const hosts = new Set(['rexpublishingcorp.com', 'www.rexpublishingcorp.com']);
export async function htmlInventory(directory) {
  if (directory instanceof URL) directory = fileURLToPath(directory);
  const files = [];
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) await walk(path);
      else if (entry.isFile() && entry.name.endsWith('.html')) files.push(path);
    }
  }
  await walk(directory);
  return files.sort().map((file) => {
    const path = '/' + relative(directory, file).split(sep).map(encodeURIComponent).join('/');
    return { file, route: path.endsWith('/index.html') ? path.slice(0, -10) : path };
  });
}
export function routeKey(pathname) {
  try {
    const parts = pathname.split('/').map((part) => {
      const decoded = decodeURIComponent(part);
      if (/[\\/\0]/.test(decoded)) throw new Error('Encoded separator');
      return decoded;
    });
    return parts.join('/').replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
  } catch { return pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/'; }
}
export function nodes(document) {
  const result = [];
  function visit(node) {
    result.push(node);
    for (const child of node.childNodes || []) visit(child);
    // Template contents are inert and deliberately excluded.
  }
  visit(document);
  return result;
}
export function documentLinks(html, route) {
  const all = nodes(parse(html, { sourceCodeLocationInfo: true }));
  const base = all.find((node) => node.tagName === 'base' && node.attrs.some((attr) => attr.name === 'href'));
  let baseURL = new URL(route, origin);
  if (base) {
    try { baseURL = new URL(base.attrs.find((attr) => attr.name === 'href').value, baseURL); } catch { /* invalid base falls back */ }
  }
  return all.filter((node) => node.tagName === 'a').flatMap((node) => {
    const href = node.attrs.find((attr) => attr.name === 'href')?.value;
    if (href === undefined) return [];
    try {
      const url = new URL(href, baseURL);
      if (!['http:', 'https:'].includes(url.protocol) || !hosts.has(url.hostname) || url.port || url.username || url.password) return [];
      const key = routeKey(url.pathname);
      if (!key || !/^\/(?:blog|book-reviews)(?:\/|$)/.test(key)) return [];
      return [{ node, href, target: key }];
    } catch { return []; }
  });
}
export async function readInventory(directory) {
  const inventory = await htmlInventory(directory);
  return Promise.all(inventory.map(async (entry) => ({ ...entry, html: await readFile(entry.file, 'utf8') })));
}
