// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/consts";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: SITE.website,
    integrations: [sitemap(), tailwind({
    applyBaseStyles: true,
}), react(), mdx()],
    markdown: {
        shikiConfig: {
            themes: { light: "min-light", dark: "night-owl" },
            wrap: true,
        },
    },
    vite: {
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"],
        },
    },
    scopedStyleStrategy: "where",
});