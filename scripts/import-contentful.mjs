import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const required = ['CONTENTFUL_SPACE_ID', 'CONTENTFUL_DELIVERY_TOKEN'];
const missing = required.filter((key) => !process.env[key]);

if (missing.length) {
  console.error(`Missing required env vars: ${missing.join(', ')}`);
  process.exit(1);
}

const root = process.cwd();
const contentDir = path.join(root, 'src/content/blog');
const imageDir = path.join(root, 'public/images/blog');

await fs.mkdir(contentDir, { recursive: true });
await fs.mkdir(imageDir, { recursive: true });

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: 'cdn.contentful.com',
});

const { items } = await client.getEntries({
  content_type: 'blogPost',
  include: 2,
  limit: 1000,
  order: ['-fields.date'],
});

function slugifyFileName(input) {
  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'untitled';
}

function frontmatterEscape(input) {
  return String(input ?? '').replace(/'/g, "''");
}

async function downloadAsset(asset, slug) {
  const file = asset?.fields?.file;
  const url = file?.url;
  if (!url) return null;

  const normalizedUrl = url.startsWith('//') ? `https:${url}` : url;
  const ext = path.extname(new URL(normalizedUrl).pathname) || '.jpg';
  const fileName = `${slug}${ext}`;
  const outputPath = path.join(imageDir, fileName);

  const res = await fetch(normalizedUrl);
  if (!res.ok) {
    throw new Error(`Failed to download asset ${normalizedUrl}: ${res.status}`);
  }

  const bytes = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(outputPath, bytes);
  return `/images/blog/${fileName}`;
}

let imported = 0;

for (const item of items) {
  const fields = item.fields ?? {};
  const slug = slugifyFileName(fields.slug || fields.title || item.sys.id);
  const heroImage = await downloadAsset(fields.hero, slug).catch((error) => {
    console.warn(`Asset download failed for ${slug}: ${error.message}`);
    return null;
  });

  const bodyHtml = fields.content ? documentToHtmlString(fields.content) : '';
  const frontmatter = [
    '---',
    `title: '${frontmatterEscape(fields.title || 'Untitled')}'`,
    `description: '${frontmatterEscape(fields.description || '')}'`,
    `pubDate: '${fields.date || new Date().toISOString()}'`,
    heroImage ? `heroImage: '${heroImage}'` : null,
    `author: 'Rex Publishing'`,
    'source: contentful-migration',
    `legacyContentfulId: '${item.sys.id}'`,
    '---',
    '',
  ]
    .filter(Boolean)
    .join('\n');

  const markdown = `${frontmatter}\n${bodyHtml}\n`;

  await fs.writeFile(path.join(contentDir, `${slug}.md`), markdown);
  imported += 1;
}

console.log(`Imported ${imported} Contentful entries into ${path.relative(root, contentDir)}`);
