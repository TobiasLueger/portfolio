import React, { useEffect, useState } from "react";
import Teaser from "./Teaser";
import { useRouter } from "next/router";
import HeadText from "./HeadText";

const Work = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/work")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
        setLoading(false);
      });
  }, []);

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
      {data.map((project: any) => (
        <Teaser
          link={project.link}
          img={project.img}
          headline={project.headline}
          content={project.content}
          chips={project.chips}
          noFinish={project.noFinish}
          imageBorder={project.imageBorder}
        ></Teaser>
      ))}
    </div>
  );
};

export default Work;
