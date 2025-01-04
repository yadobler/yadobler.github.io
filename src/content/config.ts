import { SITE } from "@consts";
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: 'content_layer',
    loader: glob({ pattern: "**/*.md[x]?", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
        author: z.string().default(SITE.author),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		hideListing: z.coerce.boolean().optional(),
        draft: z.coerce.boolean().optional(),
		description: z.string(),
        tags: z.array(z.string()).default(["others"]),
	}),
});

export const collections = { blog };
