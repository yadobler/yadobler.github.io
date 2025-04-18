// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
    site: 'https://yadobler.github.io/',
    trailingSlash: "never",
    integrations: [embeds(), mdx(), tailwind()],
    css: {
        global: true,
    },
    experimental: {
        svg: true,
    }
});
