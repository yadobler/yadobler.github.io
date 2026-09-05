import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.(mdx|md)", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        author: z.string(),
        pubDate: z.coerce.date(),
        modDate: z.coerce.date().optional(),
        heroImage: image().optional(),
        description: z.string(),
        tags: z.array(z.string()).default(["others"]),
        unlist: z.coerce.boolean().optional(),
        draft: z.coerce.boolean().optional(),
    })
});

const showcase = defineCollection({
    loader: file("./src/content/showcase.json", {
        parser: (text) => JSON.parse(text).map((entry: Record<string, any>) => ({
            ...entry, 
            id: entry.id ?? entry.title.toLowerCase().replace(/\s+/g, "-")
        }))
    }),
    schema: ({ image }) => 
        z.object({
            id: z.string(),
            title: z.string(),
            description: z.string(),
            link: z.string(),
            heroImage: image().optional(),
            pubDate: z.coerce.date(),
            unlist: z.coerce.boolean().optional(),
            draft: z.coerce.boolean().optional(),
        })
});

export const collections = { blog, showcase };
