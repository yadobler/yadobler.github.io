// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
	site: 'https://yadobler.github.io/',
	integrations: [embeds(), mdx(), sitemap()],
});
