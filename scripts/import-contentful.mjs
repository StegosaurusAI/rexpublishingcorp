import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

async function loadDotEnv() {
  const envPath = path.join(process.cwd(), '.env');
  try {
    const raw = await fs.readFile(envPath, 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env)) {
        process.env[key] = value;
      }
    }
  } catch {}
}

await loadDotEnv();

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
  const outputPath = path.join(contentDir, `${slug}.md`);
  // Repo edits and editorial decisions take precedence over the legacy import.
  if (await fs.access(outputPath).then(() => true, () => false)) {
    console.log(`Preserved existing repo entry: ${slug}`);
    continue;
  }
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
    'draft: true',
    'contentType: article',
    'source: contentful-migration',
    `legacyContentfulId: '${item.sys.id}'`,
    '---',
    '',
  ]
    .filter(Boolean)
    .join('\n');

  const markdown = `${frontmatter}\n${bodyHtml}\n`;

  await fs.writeFile(outputPath, markdown, { flag: 'wx' });
  imported += 1;
}

console.log(`Imported ${imported} Contentful entries into ${path.relative(root, contentDir)}`);
