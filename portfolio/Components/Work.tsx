import React from "react";
import Teaser from "./Teaser";
import { useRouter } from "next/router";
import HeadText from "./HeadText";

const Work = () => {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:gap-0 ${
        router.pathname == "/projects" ? "mt-0" : "mt-20"
      }`}
    >
      <HeadText
        headline="My Projects"
        classes="lg:w-full lg:px-6 px-4 lg:mb-4"
      ></HeadText>
      <Teaser
        link="/projects/blinddate"
        img="/img/blinddate.png"
        headline="BlindDate"
        content="A slightly different dating app"
        chips={["React Native", "Expo", "UI/UX"]}
        noFinish={true}
      ></Teaser>
      <Teaser
        link="/projects/eifeljugend"
        img="/img/eifeljugend.png"
        headline="Eifeljugend"
        content="Webapp for hike organization"
        chips={["React", "TailwindCSS", "Storybook", "Git", "UI/UX"]}
        margin={router.pathname == "/projects" ? false : true}
      ></Teaser>
      <Teaser
        link="/projects/trustme"
        img="/img/tina.png"
        headline="Trust Me"
        content="More clarity for your life"
        chips={["Wordpress", "UI/UX", "Programming"]}
      ></Teaser>

      {/* <a href="https://github.com/Blind-Date-Official/BlindDate">
            Show Project
  </a> */}
    </div>
  );
};

export default Work;
