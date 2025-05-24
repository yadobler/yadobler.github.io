/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "primary-fg-dark": "#dde1e6",
          "primary-bg-dark": "#393939",
          "primary-fg-light": "#262626",
          "primary-bg-light": "#90A4AE",
  
          "secondary-fg-dark": "#ee5396",
          "secondary-bg-dark": "#262626",
          "secondary-fg-light": "#ee5396",
          "secondary-bg-light": "#f2f4f8",
  
          "tertiary-fg-dark": "#08bdba",
          "tertiary-bg-dark": "#161616",
          "tertiary-fg-light": "#08bdba",
          "tertiary-bg-light": "#dde1e6",
  
          "hover-dark": "#be95ff",
          "link-dark": "#33b1ff",
          "hover-light": "#be95ff",
          "link-light": "#0f62fe",
          "bold-dark": "#9bfefc",
          "bold-light": "#068e8c",
          "code-dark": "#f7b0cf",
          "code-light": "#6b0b34",
        },
        fontSize: {
          "4lg": "2.25rem", // text-4lg
          "3lg": "1.75rem", // text-3lg
          "2lg": "1.5rem", // text-2lg
        },
      },
    },
    plugins: [], 
  };