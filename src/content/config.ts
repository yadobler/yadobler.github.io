import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
            title: z.string(),
            author: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: z.string().optional(),
            hideListing: z.coerce.boolean().optional(),
            draft: z.coerce.boolean().optional(),
            description: z.string(),
            tags: z.array(z.string()).default(["others"]),
      })
});

export const collections = { blog };
