// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://yadobler.github.io/", 
  author: "Yukna Vell",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Yukna's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
    {
        name: "Github",
        href: "https://github.com/Yadobler",
        linkTitle: ` ${SITE.author} on Github`,
        active: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/yuknavell/",
        linkTitle: `${SITE.author} on LinkedIn`,
        active: true,
    },
    {
        name: "Mail",
        href: "mailto:yuknavell.t@gmail.com",
        linkTitle: `Send an email to ${SITE.author}`,
        active: true,
    },
    {
        name: "X",
        href: "https://x.com/yadobler",
        linkTitle: `${SITE.author} on X (Twitter)`,
        active: true,
    },
    {
        name: "Facebook",
        href: "https://facebook.com/",
        linkTitle: `${SITE.author} on Facebook`,
        active: false,
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        linkTitle: `${SITE.author} on Instagram`,
        active: false,
    },
    {
        name: "Twitch",
        href: "https://twitch.tv/",
        linkTitle: `${SITE.author} on Twitch`,
        active: false,
    },
    {
        name: "YouTube",
        href: "https://youtube.com/",
        linkTitle: `${SITE.author} on YouTube`,
        active: false,
    },
    {
        name: "WhatsApp",
        href: "https://whatsapp.com/",
        linkTitle: `${SITE.author} on WhatsApp`,
        active: false,
    },
    {
        name: "Discord",
        href: "https://discord.com/",
        linkTitle: `${SITE.author} on Discord`,
        active: false,
    },
    {
        name: "GitLab",
        href: "https://gitlab.com/",
        linkTitle: `${SITE.author} on GitLab`,
        active: false,
    },
    {
        name: "Reddit",
        href: "https://reddit.com/",
        linkTitle: `${SITE.author} on Reddit`,
        active: false,
    },
    {
        name: "Telegram",
        href: "https://t.me/",
        linkTitle: `${SITE.author} on Telegram`,
        active: false,
    },
];
