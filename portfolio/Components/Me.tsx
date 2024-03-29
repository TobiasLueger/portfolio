import React, { useEffect, useState } from "react";
import Image from "next/image";
import Chip from "./Chip";
import useLanguageStore from "../lib/globalLanguage";

const Me = ({}) => {

  const lang = useLanguageStore((state:any) => state.language);
  

  return (
    <div className="w-full flex flex-col flex-wrap md:flex-row overflow-hidden px-4">
      <div className="w-full flex flex-col justify-start items-start">
        <h1 className="lg:text-3xl mb-3 lg:mb-7">
          {
            lang === "en" ? <>Hi there, my name is <b>Tobi</b>.</> : <>Hallo, mein Name ist <b>Tobi</b>.</>
          }
        </h1>
        <h2 className="lg:leading-[2.6rem] lg:text-3xl">
        {
            lang === "en" ? <>
              I am an <b>Frondend Developer</b> and passionate about{" "}
              <b className="text-fontNavyBlue">digital solutions</b>,{" "}
              <b className="text-fontPurple">inventions</b> and{" "}
              <b className="text-fontGreen">design</b>.
            </> : <>
            Ich bin <b>Frondend Developer</b> und habe eine Leidenschaft für{" "}
              <b className="text-fontNavyBlue">digitale Lösungen</b>,{" "}
              <b className="text-fontPurple">Erfindungen</b> und{" "}
              <b className="text-fontGreen">Design</b>.
            </>
          }
        </h2>
      </div>
      <div className="w-full  lg:w-1/2 flex flex-col justify-start items-start mt-6 lg:mt-16">
        <h2 className="lg:text-3xl">
          {
            lang === "en" ? <>
              Stuff that i like and care about
            </> : <>
              Themen, die ich mag und die mir wichtig sind
            </>
          }
        </h2>
        <div className="w-full flex flex-row flex-wrap gap-2 mt-4 lg:mt-6">
          <Chip text="React"></Chip>
          <Chip text="NextJS"></Chip>
          <Chip text="Storybook"></Chip>
          <Chip text="ES6"></Chip>
          <Chip text="TailwindCSS"></Chip>
          <Chip text="CSS3"></Chip>
          <Chip text="HTML5"></Chip>
          <Chip text="Cypress"></Chip>
          <Chip text="Git"></Chip>
          <Chip text="Typescript"></Chip>
          <Chip text="Figma"></Chip>
          <Chip text="Jira"></Chip>
          <Chip text="Adobe XD"></Chip>
          <Chip text="Bouldering"></Chip>
          <Chip text="Family"></Chip>
          <Chip text="Friends"></Chip>
        </div>
      </div>

      <div className="w-full xs:w-64 lg:w-1/2 flex justify-center relative items-center mt-10">
        <Image
          src="/img/me.svg"
          alt="Mein Bild"
          className="w-2/3 z-10"
          width={2698}
          height={4059}
          priority
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default Me;
