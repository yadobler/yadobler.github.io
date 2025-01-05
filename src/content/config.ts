import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
            title: z.string(),
            author: z.string(),
            pubDate: z.coerce.date(),
            modDate: z.coerce.date().optional(),
            heroImage: z.string().optional(),
            description: z.string(),
            tags: z.array(z.string()).default(["others"]),
            unlist: z.coerce.boolean().optional(),
            draft: z.coerce.boolean().optional(),
      })
});

export const collections = { blog };
