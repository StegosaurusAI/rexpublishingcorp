import { parse } from 'parse5';
import { fileURLToPath } from 'node:url';
import { readInventory } from './emitted-links.mjs';

// Independent anchor traversal and resolution: never trust the repair report.
export function verifyPageLinks(html, route, emittedRoutes) {
  const document = parse(html);
  const anchors = [];
  let baseHref;
  function visit(node) {
    const attrs = Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
    if (node.tagName === 'base' && baseHref === undefined && attrs.href !== undefined) baseHref = attrs.href;
    if (node.tagName === 'a' && attrs.href !== undefined) anchors.push(attrs.href);
    for (const child of node.childNodes || []) visit(child);
  }
  visit(document);
  let base = new URL(route, 'https://rexpublishingcorp.com');
  try { if (baseHref !== undefined) base = new URL(baseHref, base); } catch { /* browser fallback */ }
  const failures = [];
  for (const href of anchors) {
    let url;
    try { url = new URL(href, base); } catch { continue; }
    if (!/^https?:$/.test(url.protocol) || !['rexpublishingcorp.com', 'www.rexpublishingcorp.com'].includes(url.hostname) || url.port || url.username || url.password) continue;
    let path;
    try {
      const segments = url.pathname.split('/').map(decodeURIComponent);
      if (segments.some((segment) => /[\\/\0]/.test(segment))) throw new Error('Encoded separator');
      path = segments.join('/').replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
    } catch { path = url.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/'; }
    if (/^\/(blog|book-reviews)(\/|$)/.test(path) && !emittedRoutes.has(path)) failures.push({ page: route, href, target: path });
  }
  return failures;
}
export async function verifyEmittedLinks(directory) {
  const inventory = await readInventory(directory);
  const routes = new Set(inventory.map(({ route }) => route.split('/').map(decodeURIComponent).join('/').replace(/\/$/, '') || '/'));
  const failures = inventory.flatMap(({ html, route }) => verifyPageLinks(html, route, routes));
  if (failures.length) throw new Error(`Dead emitted internal links:\n${JSON.stringify(failures, null, 2)}`);
  return routes;
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await verifyEmittedLinks(fileURLToPath(new URL('../dist/', import.meta.url)));
  console.log('Independent emitted-link verification passed.');
}
