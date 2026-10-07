import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { repairEmittedLinks } from './repair-emitted-links.mjs';
import { verifyEmittedLinks, verifyPageLinks } from './verify-emitted-links.mjs';

const tempRoot = tmpdir();
test('byte-preserving unwrap; entities, encodings, relative URLs, fragments, hosts and emitted inventory', async () => {
  const dir = await mkdtemp(join(tempRoot, 'rex-links-'));
  try {
    await mkdir(join(dir, 'blog', 'café & tea'), { recursive: true });
    await mkdir(join(dir, 'book-reviews', 'kept'), { recursive: true });
    await writeFile(join(dir, 'book-reviews', 'kept', 'index.html'), '<p>review</p>');
    const removed = [
      '<A data-x="é > x" HREF="../missing?x=1&amp;y=2#frag">', '</A>',
      '<a href="//www.rexpublishingcorp.com/book-reviews/draft/">', '</a>',
      '<a href="https://rexpublishingcorp.com/bl&#111;g/absent">', '</a>',
    ];
    const html = '<!doctype html>\n<!-- <a href="/blog/comment"> -->\n<article>😀 ' +
      removed[0] + '<strong>字 &amp; é</strong><!-- keep -->' + removed[1] + '\n' +
      removed[2] + 'draft text' + removed[3] + removed[4] + '<em>absent</em>' + removed[5] +
      '<a href="../caf%C3%A9%20%26%20tea/?q=x&amp;y=z#missing-fragment">self</a>' +
      '<a href="../../book-reviews/kept/index.html#chapter">review</a>' +
      '<a href="/blog/">index</a>' +
      '<a href="https://rexpublishingcorp.com.evil.test/blog/missing">external</a>' +
      '<a href="https://other.test/blog/missing">other</a>' +
      '<a href="mailto:x@rexpublishingcorp.com">mail</a>' +
      '<a href="/outside/missing">outside scope</a>' +
      '<script>const x = "<a href=\'/blog/script\'>";</script></article>\n';
    await writeFile(join(dir, 'blog', 'index.html'), '<p>index</p>');
    const file = join(dir, 'blog', 'café & tea', 'index.html');
    await writeFile(file, html);
    await assert.rejects(verifyEmittedLinks(dir), /Dead emitted internal links/);
    const report = await repairEmittedLinks(dir);
    assert.equal(report.removedAnchors, 3);
    let expected = html;
    for (const tag of removed) expected = expected.replace(tag, '');
    assert.deepEqual(await readFile(file), Buffer.from(expected));
    assert.equal(report.htmlFiles, 3);
    assert.deepEqual(report.repairs.map(({ target }) => target), ['/blog/missing', '/book-reviews/draft', '/blog/absent']);
    await verifyEmittedLinks(dir);
    const rerun = await repairEmittedLinks(dir);
    assert.equal(rerun.removedAnchors, 0);
    assert.deepEqual(await readFile(file), Buffer.from(expected));
  } finally { await rm(dir, { recursive: true, force: true }); }
});

test('base URL resolution and independent verification do not trust a report', () => {
  const routes = new Set(['/blog/present']);
  assert.deepEqual(verifyPageLinks('<base href="https://www.rexpublishingcorp.com/blog/"><a href="present?x&amp;y#f">yes</a>', '/', routes), []);
  assert.equal(verifyPageLinks('<base href="/blog/"><a href="gone">dead</a>', '/', routes)[0].target, '/blog/gone');
  assert.deepEqual(verifyPageLinks('<base href="https://elsewhere.test/blog/"><a href="gone">external</a>', '/', routes), []);
  assert.equal(verifyPageLinks('<a href="/blog/%ZZ">bad encoding</a><a href="/blog/missing%2Fchild">encoded slash</a>', '/', routes).length, 2);
});
