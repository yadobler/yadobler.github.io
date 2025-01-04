// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import embeds from 'astro-embed/integration';
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
    site: SITE.website,
	integrations: [embeds(), mdx(), sitemap()],
});
