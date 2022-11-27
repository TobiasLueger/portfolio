import React from "react";
import Image from "next/image";
import Link from "next/link";
import Chip from "./Chip";
import Teaser from "./Teaser";

const Work = () => {
  return (
    <div
      id="projects"
      className="flex flex-col lg:flex-row lg:flex-wrap gap-10 lg:gap-0 mt-20"
    >
      <h2 className="lg:w-full lg:px-6 text-2xl lg:text-3xl px-4">
        <b>My Projects</b>
      </h2>
      <Teaser
        link="/blinddate"
        img="/img/blinddate.png"
        headline="BlindDate"
        content="A dating app that combine love and experiences. (WIP)"
        chips={["React Native", "Test"]}
      ></Teaser>
      <Teaser
        link="/eifeljugend"
        img="/img/eifeljugend.png"
        headline="Eifeljugend"
        content="A dating app that combine love and experiences. (WIP)"
        chips=""
        margin={true}
      ></Teaser>
      <Teaser
        link="/tina"
        img="/img/tina.png"
        headline="Trust Me"
        content="A dating app that combine love and experiences. (WIP)"
        chips=""
      ></Teaser>

      {/* <a href="https://github.com/Blind-Date-Official/BlindDate">
            Show Project
  </a> */}
    </div>
  );
};

export default Work;
