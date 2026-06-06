import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author: z.string().default('Rex Publishing'),
		draft: z.boolean().default(false),
		legacyContentfulId: z.string().optional(),
		source: z.enum(['repo', 'contentful-migration', 'sample']).default('repo'),
	}),
});

export const collections = { blog };
