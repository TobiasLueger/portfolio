import React from "react";
import Teaser from "./Teaser";
import { useRouter } from "next/router";

const Work = () => {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:gap-0 ${
        router.pathname == "/projects" ? "mt-0" : "mt-20"
      }`}
    >
      <h2 className="lg:w-full lg:px-6 text-xl lg:text-2xl px-4 lg:mb-4">
        <b>My Projects</b>
      </h2>
      <Teaser
        link="/projects/blinddate"
        img="/img/blinddate.png"
        headline="BlindDate"
        content="A slightly different dating app"
        chips={["React Native", "Test"]}
      ></Teaser>
      <Teaser
        link="/projects/eifeljugend"
        img="/img/eifeljugend.png"
        headline="Eifeljugend"
        content="Webapp for hike organization"
        chips=""
        margin={router.pathname == "/projects" ? false : true}
      ></Teaser>
      <Teaser
        link="/projects/trustme"
        img="/img/tina.png"
        headline="Trust Me"
        content="More clarity for your life"
        chips=""
      ></Teaser>

      {/* <a href="https://github.com/Blind-Date-Official/BlindDate">
            Show Project
  </a> */}
    </div>
  );
};

export default Work;
