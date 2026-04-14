// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import embeds from 'astro-embed/integration';
import { bundledLanguages } from 'shiki';

import cGrammar from './.grammars/c.json' assert { type: 'json' };
import nasmGrammar from './.grammars/nasm.json' assert { type: 'json' };
import manPageGrammar from './.grammars/man.json' assert { type: 'json' };


// https://astro.build/config
export default defineConfig({
    site: 'https://yadobler.github.io/',
    trailingSlash: "ignore",
    integrations: [embeds(), mdx(), tailwind()],

    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-dark',
                dark: 'github-dark',
            },
            langs: [
                // @ts-ignore
                // Keep all bundled languages
                ...Object.keys(bundledLanguages), 

                // @ts-ignore
                {
                    ...cGrammar, 
                    name: 'c', 
                    scopeName: 'source.c',
                },

                // @ts-ignore
                {
                    ...nasmGrammar,
                    name: 'nasm',
                    scopeName: 'source.asm.x86_64', 
                },

                // @ts-ignore
                {
                    ...manPageGrammar,
                    name: 'man',
                    scopeName: 'text.roff', 
                },
            ],
        },
    },

    css: {
        global: true,
    },

    experimental: {
        // svg: true,
    },
});
