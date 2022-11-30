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

const Resume: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tobias Lüger - Frondend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      {/*TODO: texte deinieren*/}
      <main>
        <section>
          <h1 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem] font-bold text-greyDark">
            Resume
          </h1>
          <h2 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem]">
            I am currently ... to be defined Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Illo facilis, eveniet placeat
            reprehenderit voluptas perferendis odio minima rerum fugiat deleniti
            sit ut sequi quasi illum perspiciatis alias officia possimus harum.
          </h2>
        </section>
        <section>
          <HeadText
            headline="test"
            context="All over the years <a href='#'>Frondend Developer</a> Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Illo facilis, eveniet placeat
            reprehenderit voluptas perferendis odio minima rerum fugiat deleniti
            sit ut sequi quasi illum perspiciatis alias officia possimus harum."
          ></HeadText>
        </section>
        <div className="flex flex-col lg:flex-row flex-wrap">
          <section className="w-full lg:w-1/2">
            <HeadText headline="Work"></HeadText>
            <div className="flex flex-col gap-6">
              <WorkListTeaser
                img={ImgMap.brandung.src}
                company="Frontend, brandung GmbH"
                place="Germany, Cologne"
                jobTitel="Junior Frontend Developer"
                date="Juli 2021 - now"
              ></WorkListTeaser>

              <WorkListTeaser
                img={ImgMap.djumla.src}
                company="Frontend, Djumla "
                place="Germany, Cologne"
                jobTitel="Internship Frontend Developer"
                date="Juli 2021 - now"
              ></WorkListTeaser>

              <WorkListTeaser
                img={ImgMap.lemm.src}
                company="Frontend, Lemm Werbeagentur "
                place="Germany, Euskirchen"
                jobTitel="Internship Frontend Developer"
                date="Juli 2021 - now"
              ></WorkListTeaser>
            </div>
          </section>
          <section className="w-full lg:w-1/2">
            <HeadText headline="Education"></HeadText>
            <div className="flex flex-col gap-6 mb-14">
              <WorkListTeaser
                img={ImgMap.brandung.src}
                company="Frontend, brandung GmbH"
                place="Germany, Cologne"
                jobTitel="Training as Media Designer"
                date="Aug 2018 - Juli 2021"
              ></WorkListTeaser>
              <WorkListTeaser
                img={ImgMap.teb.src}
                company="Thomas-Eßer-Berufskolleg"
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
                place="Remote"
                jobTitel="Open Source Contributor"
                date="2021 - nowqqqq"
              ></WorkListTeaser>
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
      <Contact></Contact>
    </div>
  );
};

export default Resume;
