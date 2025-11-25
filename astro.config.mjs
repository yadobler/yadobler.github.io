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
              ...Object.keys(bundledLanguages), // Keep all bundled languages

              {
                  // @ts-ignore
                  id: 'c', // For ```c
                  scopeName: 'source.c',
                  grammar: cGrammar,
              },

              {
                  // @ts-ignore
                  id: 'nasm', // For ```nasm
                  scopeName: 'source.asm.x86_64', 
                  grammar: nasmGrammar,
              },

              {
                  // @ts-ignore
                  id: 'man', // For ```man
                  scopeName: 'text.roff', 
                  grammar: manPageGrammar,
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
