import { getCollection, type CollectionEntry } from 'astro:content';

export type ReviewEntry = CollectionEntry<'blog'>;

export async function getPublishedReviews() {
  const reviews = await getCollection('blog', ({ data }) => !data.draft);

  return reviews.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
