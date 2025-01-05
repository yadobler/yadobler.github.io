// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), embeds(), tailwind()]
});
