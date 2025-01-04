// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import embeds from 'astro-embed/integration';
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
    site: SITE.website,
	integrations: [
        embeds(), 
        mdx(), 
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
