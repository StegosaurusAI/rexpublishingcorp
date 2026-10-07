import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { documentLinks, readInventory, routeKey } from './emitted-links.mjs';
import { verifyEmittedLinks } from './verify-emitted-links.mjs';

export async function repairEmittedLinks(directory) {
  const inventory = await readInventory(directory);
  const routes = new Set(inventory.map((entry) => routeKey(entry.route)));
  const repairs = [];
  for (const entry of inventory) {
    const removals = [];
    for (const { node, href, target } of documentLinks(entry.html, entry.route)) {
      if (routes.has(target)) continue;
      const location = node.sourceCodeLocation;
      if (!location?.startTag || !location.endTag) throw new Error(`${entry.route}: cannot safely unwrap malformed dead anchor ${href}`);
      removals.push(location.startTag, location.endTag);
      repairs.push({ page: entry.route, href, target, offset: location.startOffset });
    }
    let html = entry.html;
    const ascending = [...removals].sort((a, b) => a.startOffset - b.startOffset);
    for (let i = 1; i < ascending.length; i++) {
      if (ascending[i].startOffset < ascending[i - 1].endOffset) throw new Error(`${entry.route}: overlapping anchor tag locations; refusing unsafe repair`);
    }
    for (const { startOffset, endOffset } of removals.sort((a, b) => b.startOffset - a.startOffset)) {
      html = html.slice(0, startOffset) + html.slice(endOffset);
    }
    if (removals.length) await writeFile(entry.file, html);
  }
  const report = { htmlFiles: inventory.length, removedAnchors: repairs.length, repairs };
  await writeFile(join(directory, 'link-repair-report.json'), JSON.stringify(report, null, 2) + '\n');
  await verifyEmittedLinks(directory);
  console.log(`[link-repair] ${repairs.length} dead anchors unwrapped across ${inventory.length} emitted HTML files`);
  return report;
}
export default function emittedLinkRepair() {
  return { name: 'rex-emitted-link-repair', hooks: {
    'astro:build:done': async ({ dir }) => repairEmittedLinks(fileURLToPath(dir)),
  } };
}
