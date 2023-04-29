// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      link: "https://github.com/Blind-Date-Official",
      img: "/img/blinddate.png",
      headline: "BlindDate App",
      content: "A slightly different dating app",
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
      link: "https://eifeljugend-rheinbach.de",
      img: "/img/eifeljugend.png",
      headline: "Eifeljugend Website",
      content: "Webapp for hike organization",
      chips: ["React", "TailwindCSS", "Storybook", "Git", "UI/UX", "Vercel"],
      noFinish: false,
      imageBorder: false,
    },
    {
      link: "https://martina-osthoff.de",
      img: "/img/tina.png",
      headline: "Trust Me Website",
      content: "More clarity for your life",
      chips: ["Wordpress", "UI/UX", "Programming"],
      noFinish: false,
      imageBorder: false,
    },
    {
      link: "https://tobias-lueger.de",
      img: "/img/me.png",
      headline: "Portfolio Website",
      content: "My own Portfolio Website",
      chips: [
        "NextJS",
        "UI/UX",
        "TailwindCSS",
        "Git",
        "Phosphor Icons",
        "Vercel",
      ],
      noFinish: false,
      imageBorder: true,
    },
  ]);
}
