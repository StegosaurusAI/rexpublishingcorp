import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import matter from 'gray-matter';

// Read-only preflight: draft source can be committed without becoming a route.
const root = new URL('../', import.meta.url);
const files = (await fs.readdir(new URL('src/content/blog/', root))).filter((file) => /\.mdx?$/.test(file));
const entries = await Promise.all(files.map(async (file) => {
  const { data, content } = matter(await fs.readFile(new URL(`src/content/blog/${file}`, root), 'utf8'));
  return { ...data, content, slug: data.slug || file.replace(/\.mdx?$/, ''), file };
}));
const published = entries.filter((entry) => !entry.draft);
const drafts = entries.filter((entry) => entry.draft);
const route = (entry) => `/${entry.contentType === 'review' ? 'book-reviews' : 'blog'}/${entry.slug}/`;
const exists = async (relative) => fs.access(new URL(relative, root)).then(() => true, () => false);
const ledgerArg = process.argv.find((arg) => arg.startsWith('--ledger='));
if (ledgerArg) {
  const ledger = JSON.parse(await fs.readFile(ledgerArg.slice('--ledger='.length), 'utf8')).published;
  const ledgerSlugs = new Set(ledger.map((entry) => entry.slug));
  console.log(JSON.stringify({
    sources: entries.length,
    published: published.length,
    drafts: drafts.map((entry) => entry.slug),
    publishedNotInLedger: published.filter((entry) => !ledgerSlugs.has(entry.slug)).map((entry) => entry.slug),
    ledgerNotPublished: ledger.filter((item) => !published.some((entry) => entry.slug === item.slug)).map((entry) => entry.slug),
  }, null, 2));
}

if (!process.argv.includes('--audit-only')) {
  const rss = await fs.readFile(new URL('dist/rss.xml', root), 'utf8');
  const sitemap = await fs.readFile(new URL('dist/sitemap-0.xml', root), 'utf8');
  const blog = await fs.readFile(new URL('dist/blog/index.html', root), 'utf8');
  for (const entry of entries) {
    assert.ok(['article', 'review'].includes(entry.contentType), `${entry.file}: explicit contentType required`);
    assert.ok(entry.draft === undefined || typeof entry.draft === 'boolean', `${entry.file}: invalid draft flag`);
    for (const section of ['blog', 'book-reviews']) {
      const url = `/${section}/${entry.slug}/`;
      const expected = !entry.draft && url === route(entry);
      assert.equal(await exists(`dist${url}index.html`), expected, `${url}: unexpected route state`);
      assert.equal(rss.includes(url), expected, `${url}: unexpected RSS state`);
      assert.equal(sitemap.includes(url), expected, `${url}: unexpected sitemap state`);
      if (section === 'blog') assert.equal(blog.includes(url), expected, `${url}: unexpected blog index state`);
    }
    if (!entry.draft && entry.heroImage?.startsWith('/')) {
      assert.ok(!entry.heroImage.includes('..'));
      assert.ok(await exists(`dist${entry.heroImage}`), `${entry.file}: missing hero asset`);
    }
  }
  console.log(`Publication preflight passed: ${published.length} public entries, ${drafts.length} excluded drafts; routes, RSS, sitemap, blog index, and hero assets checked.`);
}

if (process.argv.includes('--live')) {
  const origin = 'https://www.rexpublishingcorp.com';
  const get = async (url) => {
    const response = await fetch(`${origin}${url}`, { signal: AbortSignal.timeout(30000) });
    return { status: response.status, body: await response.text() };
  };
  const index = await get('/blog/');
  assert.equal(index.status, 200);
  const liveSlugs = new Set([...index.body.matchAll(/href="\/blog\/([^/"?#]+)\/?"/g)].map((match) => match[1]));
  const localSlugs = new Set(published.filter((entry) => entry.contentType === 'article').map((entry) => entry.slug));
  console.log(JSON.stringify({ liveArticles: liveSlugs.size, localArticles: localSlugs.size,
    localOnly: [...localSlugs].filter((slug) => !liveSlugs.has(slug)),
    liveOnly: [...liveSlugs].filter((slug) => !localSlugs.has(slug)) }, null, 2));
  assert.deepEqual([...localSlugs].sort(), [...liveSlugs].sort(), 'Live/local article corpus differs');
  const liveRss = await get('/rss.xml');
  assert.equal(liveRss.status, 200);
  // Bounded batches avoid flooding production while checking the whole corpus.
  for (let i = 0; i < entries.length; i += 5) {
    await Promise.all(entries.slice(i, i + 5).map(async (entry) => {
      const url = route(entry);
      const page = await get(url);
      assert.equal(page.status, entry.draft ? 404 : 200, `${url}: live HTTP`);
      if (!entry.draft) {
        const built = await fs.readFile(new URL(`dist${url}index.html`, root), 'utf8');
        const articleBody = (html) => html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1].replace(/\s+/g, ' ').trim();
        assert.ok(articleBody(built), `${url}: built article body missing`);
        assert.equal(articleBody(page.body), articleBody(built), `${url}: live article body differs from build`);
        assert.ok(page.body.includes(`https://rexpublishingcorp.com${url}`) || page.body.includes(`https://rexpublishingcorp.com${url.slice(0, -1)}"`), `${url}: canonical missing`);
        assert.ok(liveRss.body.includes(url), `${url}: live RSS missing`);
        if (entry.heroImage?.startsWith('/')) assert.equal((await get(entry.heroImage)).status, 200, `${url}: live hero`);
      } else assert.ok(!liveRss.body.includes(url), `${url}: draft in live RSS`);
      if (entry.contentType === 'article') assert.equal((await get(`/book-reviews/${entry.slug}/`)).status, 404, `${url}: mirrored review route`);
    }));
  }
  for (const url of ['/', '/about/', '/contact/', '/book-reviews/', '/sitemap-index.xml', '/sitemap-0.xml']) {
    assert.equal((await get(url)).status, 200, `${url}: live HTTP`);
  }
  console.log(`Live verification passed: ${published.length} public entries, ${drafts.length} draft 404s, article/review isolation, hero assets, RSS, canonical URLs, and core pages.`);
}
