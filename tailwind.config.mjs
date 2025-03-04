export default {
    content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#1E40AF",         
                "primary-light": "#93C5FD", 
                "primary-dark": "#1D4ED8", 

                "secondary": "#9333EA",       
                "secondary-light": "#D8B4FE",
                "secondary-dark": "#7E22CE",

                "tertiary": "#34D399",       
                "tertiary-light": "#A7F3D0",
                "tertiary-dark": "#10B981",
            },
            typography: {
                DEFAULT: {
                    css: {
                        h1: { color: "var(--primary)" },
                        h2: { color: "var(--secondary)" },
                        p: { color: "var(--text)" },
                        a: { color: "var(--link)" },
                    },
                },
                dark: {
                    css: {
                        h1: { color: "var(--primary-light)" },
                        h2: { color: "var(--secondary-light)" },
                        p: { color: "var(--text-light)" },
                        a: { color: "var(--link-light)" },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
