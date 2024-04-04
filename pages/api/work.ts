// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      link: "https://eifeljugend-rheinbach.de",
      img: "/img/eifeljugend.png",
      headline: {
        en: "Eifeljugend Website",
        de: "Eifeljugend Webseite",
      },
      content: {
        en: "Webapp for hike organization",
        de: "Webseite für den Jugendbereich des Eifelvereins Rheinbach",
      },
      chips: [
        "ReactJS",
        "TailwindCSS",
        "Storybook",
        "Git",
        "UI/UX",
        "Vercel",
        "Typescript",
      ],
      noFinish: false,
      imageBorder: false,
    },
    {
      link: "https://github.com/TobiasLueger/storybook-custom-theme-switcher",
      img: "/img/storybook-theme-switcher.png",
      headline: {
        en: "Storybook Custom Theme Switcher",
        de: "Storybook Custom Theme Switcher",
      },
      content: {
        en: "A highly customizable theme switcher for Storybook",
        de: "Ein stark anpassbarer Theme-Switcher für Storybook.",
      },
      chips: ["Typescript", "Storybook", "ReactJS"],
      noFinish: false,
      imageBorder: false,
    },
    {
      link: "https://tobias-lueger.de",
      img: "/img/me.png",
      headline: {
        en: "Portfolio Website",
        de: "Portfolio Webseite",
      },
      content: {
        en: "My own Portfolio Website",
        de: "Meine eigene Portfolio Webseite",
      },
      chips: [
        "NextJS",
        "UI/UX",
        "TailwindCSS",
        "Git",
        "Phosphor Icons",
        "Vercel",
        "Typescript",
      ],
      noFinish: false,
      imageBorder: true,
    },
    {
      link: "https://martina-osthoff.de",
      img: "/img/tina.png",
      headline: {
        en: "Trust Me Website",
        de: "Trust Me Webseite",
      },
      content: {
        en: "A website for a client named Trust Me",
        de: "Eine Webseite für den Kunden Trust Me",
      },
      chips: ["Wordpress", "UI/UX", "Programming"],
      noFinish: false,
      imageBorder: false,
    },
    {
      link: "https://github.com/Blind-Date-Official",
      img: "/img/blinddate.png",
      headline: {
        en: "BlindDate App",
        de: "BlindDate App",
      },
      content: {
        en: "A slightly different dating app",
        de: "Eine etwas andere Dating App",
      },
      chips: [
        "React Native",
        "Expo",
        "UI/UX",
        "Phosphor Icons",
        "TailwindCSS",
        "Firebase",
      ],
      noFinish: true,
      imageBorder: false,
    },
    {
      link: "https://pnpmeetup.com/",
      img: "/img/pnpmeetup.png",
      headline: {
        en: "Pen and Paper Website",
        de: "Pen and Paper Webseite",
      },
      content: {
        en: "A pnp plattform to build maps, create character sheets and play your story with your friends",
        de: "Eine PNP-Plattform zum Erstellen von Karten und Charakterbögen und um mit deinen Freunden deine Geschichten zu erleben",
      },
      chips: ["Remix", "UI/UX", "TailwindCSS", "Git", "Vercel", "Typescript"],
      noFinish: true,
      imageBorder: false,
    }
  ]);
}
