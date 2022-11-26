import React from "react";
import Image from "next/image";
import Chip from "./Chip";

const Me = ({}) => {
  return (
    <div className="w-full flex flex-col flex-wrap md:flex-row overflow-hidden px-4">
      <div className="w-full flex flex-col justify-start items-start">
        <h1 className="">
          Hi, I am <b>Tobi</b>.
        </h1>
        <h2>
          I am a frondend developer and passionate about{" "}
          <b>digital solutions</b> and <b>design</b>.
        </h2>
      </div>
      <div className="w-full  lg:w-1/2 flex flex-col justify-start items-start mt-5">
        <h2>What I love:</h2>
        <div className="w-full flex flex-row flex-wrap gap-2 mt-3">
          <Chip text="React"></Chip>
          <Chip text="React Native"></Chip>
          <Chip text="Storybook"></Chip>
          <Chip text="TailwindCSS"></Chip>
          <Chip text="Cypress"></Chip>
          <Chip text="Typescript"></Chip>
          <Chip text="Figma"></Chip>
          <Chip text="Jira"></Chip>
          <Chip text="Adobe XD"></Chip>
          <Chip text="ES6"></Chip>
        </div>
      </div>

      <div className="w-full xs:w-64 lg:w-1/2 flex justify-center relative items-center mt-10">
        <Image
          src="/img/me.svg"
          alt="Mein Bild"
          className="w-full lg:w-1/2 z-10"
          width={2698}
          height={4059}
        />
      </div>
    </div>
  );
};

export default Me;
