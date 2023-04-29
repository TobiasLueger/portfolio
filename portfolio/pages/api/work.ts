// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      link: "https://github.com/Blind-Date-Official",
      img: "/img/blinddate.png",
      headline: "BlindDate App",
      content: "A slightly different dating app",
      chips: ["React Native", "Expo", "UI/UX"],
      noFinish: true,
    },
    {
      link: "https://eifeljugend-rheinbach.de",
      img: "/img/eifeljugend.png",
      headline: "Eifeljugend Website",
      content: "Webapp for hike organization",
      chips: ["React", "TailwindCSS", "Storybook", "Git", "UI/UX"],
      noFinish: false,
    },
    {
      link: "https://martina-osthoff.de",
      img: "/img/tina.png",
      headline: "Trust Me Website",
      content: "More clarity for your life",
      chips: ["Wordpress", "UI/UX", "Programming"],
      noFinish: false,
    },
  ]);
}
