import React, { useEffect, useState } from "react";
import Teaser from "./Teaser";
import { useRouter } from "next/router";
import HeadText from "./HeadText";
import useLanguageStore from "../lib/globalLanguage";

const Work = () => {
  const router = useRouter();

  const lang = useLanguageStore((state: any) => state.language);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/work")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  // Sort projects: finished projects first, then in-progress projects
  const sortedData = [...data].sort((a: any, b: any) => {
    return a.noFinish === b.noFinish ? 0 : a.noFinish ? 1 : -1;
  });

  return (
    <div
      className={`flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:gap-0 lg:pb-44 ${
        router.pathname == "/projects" ? "mt-0" : "mt-20"
      }`}
    >
      <HeadText
        headline={lang === "en" ? "My Projects" : "Meine Projekte"}
        classes="lg:w-full lg:px-6 px-4 lg:mb-4"
      ></HeadText>

      {sortedData.map((project: any, key: number) => (
        <Teaser
          key={key}
          link={project.link}
          img={project.img}
          headline={lang === "en" ? project.headline.en : project.headline.de}
          content={lang === "en" ? project.content.en : project.content.de}
          chips={project.chips}
          noFinish={project.noFinish}
          imageBorder={project.imageBorder}
          blank={project.blank}
        ></Teaser>
      ))}
    </div>
  );
};

export default Work;