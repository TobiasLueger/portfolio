import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import HeadText from "../Components/HeadText";
import Me from "../Components/Me";
import Navigation from "../Components/Navigation";
import Work from "../Components/Work";
import WorkListTeaser from "../Components/WorkListTeaser";
import * as ImgMap from "../public/img/imgMap";
import { Analytics } from "@vercel/analytics/react";

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tobias Lüger - Resume</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Tobias Lüger - Resume"></meta>
        <meta
          name="description"
          content="This is Tobias Lüger's resume and where he has already worked"
        ></meta>
        <meta
          property="og:description"
          content="This is Tobias Lüger's resume and where he has already worked"
        ></meta>
      </Head>
      <Navigation></Navigation>
      <main>
        <section>
          <h1 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem] font-bold text-greyDark">
            Resume
          </h1>
          <h2 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem]">
            As a skilled Frontend Developer with hands-on experience, I bring a
            strong background in HTML, CSS, and JavaScript to every project.
            Currently working at brandung GmbH in Cologne, I have a proven track
            record of developing visually stunning and responsive websites that
            improve user engagement and drive conversions. I am passionate about
            staying up-to-date with the latest industry trends and tools to
            deliver exceptional results. If you're looking for a reliable and
            talented Frontend Developer, look no further.
          </h2>
        </section>
        <section>
          <HeadText
            headline="Skills"
            context="As a Frontend Developer, I possess a diverse skillset that enables me to deliver outstanding results for every project. With expertise in React and NextJS, I am proficient in developing scalable and performant web applications that meet client requirements. I also have extensive experience in using Storybook, TailwindCSS, and Cypress for UI design, development, and testing.

            I am proficient in Git and Typescript, which helps me maintain code quality and streamline the development process. My proficiency in Figma and Adobe XD enables me to create engaging designs that align with client vision and project goals.
            
            Furthermore, I have experience using Jira to manage project timelines, track progress, and communicate with team members effectively."
          ></HeadText>
        </section>
        <div className="flex flex-col lg:flex-row flex-wrap">
          <section className="w-full lg:w-1/2">
            <HeadText headline="Work"></HeadText>
            <div className="flex flex-col gap-6">
              <WorkListTeaser
                img={ImgMap.brandung.src}
                company="Frontend, brandung GmbH"
                companyLink="https://www.agentur-brandung.de/"
                place="Germany, Cologne"
                jobTitel="Junior Frontend Developer"
                date="Juli 2021 - now"
              ></WorkListTeaser>

              <WorkListTeaser
                img={ImgMap.djumla.src}
                company="Frontend, Djumla"
                companyLink="https://www.djumla.de/"
                place="Germany, Cologne"
                jobTitel="Internship Frontend Developer"
                date="Oktober 2016 - Oktober 2016"
              ></WorkListTeaser>

              <WorkListTeaser
                img={ImgMap.lemm.src}
                company="Frontend, Lemm Werbeagentur "
                companyLink="https://www.lemm.de/"
                place="Germany, Euskirchen"
                jobTitel="Internship Frontend Developer"
                date="April 2017 - April 2017"
              ></WorkListTeaser>
            </div>
          </section>
          <section className="w-full lg:w-1/2">
            <HeadText headline="Education"></HeadText>
            <div className="flex flex-col gap-6 mb-14">
              <WorkListTeaser
                img={ImgMap.brandung.src}
                company="Frontend, brandung GmbH"
                companyLink="https://www.agentur-brandung.de/"
                place="Germany, Cologne"
                jobTitel="Training as Media Designer"
                date="Aug 2018 - Juli 2021"
              ></WorkListTeaser>
              <WorkListTeaser
                img={ImgMap.teb.src}
                company="Thomas-Eßer-Berufskolleg"
                companyLink="https://teb-eu.eu/TEB_HP/"
                place="Germany, Euskirchen"
                jobTitel="Training as Information Technology Assistant"
                date="Aug 2015 - Aug 2018"
              ></WorkListTeaser>
            </div>

            <HeadText headline="Others"></HeadText>
            <div className="flex flex-col gap-6">
              <WorkListTeaser
                img={ImgMap.github.src}
                company="GitHub"
                companyLink="https://github.com/TobiasLueger"
                place="Remote"
                jobTitel="Open Source Contributor"
                date="2021 - now"
              ></WorkListTeaser>
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
      <Contact></Contact>
      <Analytics mode="production"></Analytics>
    </div>
  );
};

export default Resume;
