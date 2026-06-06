import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPublishedReviews } from '../lib/reviews';

export async function GET(context) {
	const posts = await getPublishedReviews();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/book-reviews/${post.slug}/`,
		})),
	});
}
