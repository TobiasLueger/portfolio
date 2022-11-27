import React from "react";
import Teaser from "./Teaser";

const Work = () => {
  return (
    <div
      id="projects"
      className="flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:gap-0 mt-20"
    >
      <h2 className="lg:w-full lg:px-6 text-xl lg:text-2xl px-4">
        <b>My Projects</b>
      </h2>
      <Teaser
        link="/blinddate"
        img="/img/blinddate.png"
        headline="BlindDate"
        content="A slightly different dating app"
        chips={["React Native", "Test"]}
      ></Teaser>
      <Teaser
        link="/eifeljugend"
        img="/img/eifeljugend.png"
        headline="Eifeljugend"
        content="Webapp for hike organization"
        chips=""
        margin={true}
      ></Teaser>
      <Teaser
        link="/tina"
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
