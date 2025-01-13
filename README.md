# Yukna's website!

Made with [*Astro*](https://docs.astro.build).

[![Deploy to GitHub Pages](https://github.com/yadobler/yadobler.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/yadobler/yadobler.github.io/actions/workflows/deploy.yml)

This is my first real HTML + CSS project with a framework (Astro).

This project helps me learn some of the basics of:
- HTML
- Typescript
    - Astro framework
- CSS 
    - Tailwind CSS
- Node
    - npm

## Goals
- Produce a **static** webpage 
- Ensure responsive page design
- Avoid need for server rendering (hence being able to post on github) 
- ~~Avoid~~ Reduce client side javascript
- Avoid using any starter templates (only allow snippets from docs) 
- Get a better understanding on java script frameworks 
- Get a better understanding on CSS
- Get a better understanding on basic HTML

## Packages used

```text
yadobler.github.io
├── @astrojs/mdx@4.0.3
├── @astrojs/tailwind@5.1.4
├── @tailwindcss/typography@0.5.16
├── astro-embed@0.9.0
├── astro@5.1.2
└── tailwindcss@3.4.17
```

## Project Structure

```text
(root)
├── dist / 
│   └── (generated html pages)
├── node_modules /
│   └── (node packages)
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   ├── (assets)
│   │   └── icons
│   │       └── (icon svgs)
│   ├── components
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── FormattedDate.astro
│   │   ├── Furigana.astro
│   │   ├── Header.astro
│   │   └── Prose.astro
│   ├── content
│   │   ├── blog
│   │   │   ├── (folders for group posts)
│   │   │   │   └── (markdown files)
│   │   │   ├── (markdown files)
│   │   │   └── template.md
│   │   └── config.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── blog
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── contactme.astro
│   │   └── index.astro
│   └── styles
│       └── base.css
├── astro.config.mjs
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── shell.nix
├── tailwind.config.mjs
└── tsconfig.json

1677 directories, 13978 files
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Credits
- [Google Material Icons](https://fonts.google.com/)
- [Gentlecons Interface Icons Collection](https://www.svgrepo.com/collection/gentlecons-interface-icons/) for social icons
- [Astro docs](https://docs.astro.build/)
- ChatGPT for debugging, really!
