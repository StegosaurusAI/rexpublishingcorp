import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;
// Backwards-compatible alias
export type ReviewEntry = BlogEntry;

export function getCanonicalPath(entry: BlogEntry): string {
  return entry.data.contentType === 'review'
    ? `/book-reviews/${entry.slug}/`
    : `/blog/${entry.slug}/`;
}

export async function getPublishedEntries(): Promise<BlogEntry[]> {
  const entries = await getCollection('blog', ({ data }) => !data.draft);
  return entries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getPublishedReviews(): Promise<BlogEntry[]> {
  const entries = await getCollection(
    'blog',
    ({ data }) => !data.draft && data.contentType === 'review',
  );
  return entries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getPublishedArticles(): Promise<BlogEntry[]> {
  const entries = await getCollection(
    'blog',
    ({ data }) => !data.draft && data.contentType === 'article',
  );
  return entries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
