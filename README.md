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

## Credits
- [Google Material Icons](https://fonts.google.com/)
- [Gentlecons Interface Icons Collection](https://www.svgrepo.com/collection/gentlecons-interface-icons/) for social icons
- [Astro docs](https://docs.astro.build/)
- ChatGPT for debugging, really!

## 🚀 Project Structure

```text
src /
├── assets /
│   ├── astro.svg
│   ├── background.svg
│   └── icons /
├── components
│   ├── Furigana.astro
│   └── Header.astro
├── content /
│   ├── blog /
│   └── config.ts
├── layouts /
│   └── Layout.astro
├── pages /
│   └── index.astro
└── styles /
    └── base.css
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

