export default {
    content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
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
                "bold-dark": "#98fbf9",
                "bold-light": "#068e8c",
                "code-dark": "#f7b0cf",
                "code-light": "#6b0b34",
            },
            typography: {
                DEFAULT: {
                    css: {
                        b: {
                            color: "var(--bold-light)"
                        },
                        code: {
                            color: "var(--code-light)"
                        },

                        h1: { 
                            color: "var(--secondary-fg-light)", 
                            fontWeight: "600",
                            fontSize: "2.25rem",
                        },
                        h2: { 
                            color: "var(--tertiary-fg-light)", 
                            fontWeight: "500",
                            fontSize: "1.75rem",
                        },
                        h3: { 
                            color: "var(--tertiary-fg-light)", 
                            fontWeight: "400",
                            fontSize: "1.75rem",
                        },
                        h4: { 
                            color: "var(--tertiary-fg-light)", 
                            fontSize: "1rem",
                            fontSize: "1.75rem",
                        },
                        p: { 
                            color: "var(--primary-fg-light)", 
                            fontSize: "1rem",
                            lineHeight: "1.75rem",
                        },
                        a: { 
                            color: "var(--link-light)", 
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                        },
                        'a:hover': {
                            color: "var(--hover-light)",
                        },
                    },
                },
                dark: {
                    css: {
                        b: {
                            color: "var(--bold-dark)"
                        },
                        code: {
                            color: "var(--code-dark)"
                        },
                        h1: { 
                            color: "var(--secondary-fg-dark)", 
                            fontWeight: "600",
                            fontSize: "2.25rem",
                        },
                        h2: { 
                            color: "var(--tertiary-fg-dark)", 
                            fontWeight: "500",
                            fontSize: "1.75rem",
                        },
                        h3: { 
                            color: "var(--tertiary-fg-dark)", 
                            fontWeight: "400",
                            fontSize: "1.75rem",
                        },
                        h4: { 
                            color: "var(--tertiary-fg-dark)", 
                            fontSize: "1rem",
                            fontSize: "1.75rem",
                        },
                        p: { 
                            color: "var(--primary-fg-dark)", 
                            fontSize: "1rem",
                            lineHeight: "1.75rem",
                        },
                        a: { 
                            color: "var(--link-dark)", 
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                        },
                        'a:hover': {
                            color: "var(--hover-dark)",
                        },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
