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
import LanguageSwitch from "../Components/LanguageSwitch";
import useLanguageStore from "../lib/globalLanguage";

const Resume: NextPage = () => {
  const lang = useLanguageStore((state) => state.language);
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
            {lang === 'eng' ? 'Resume' : 'Lebenslauf'}
          </h1>
          <h2 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem]">
            {
              lang === 'eng' ?
            'As a skilled Frontend Developer with hands-on experience, I bring a strong background in HTML, CSS, and JavaScript to every project. Currently working at brandung GmbH in Cologne, I have a proven track record of developing visually stunning and responsive websites that improve user engagement and drive conversions. I am passionate about staying up-to-date with the latest industry trends and tools to deliver exceptional results. If you are looking for a reliable and talented Frontend Developer, look no further.'
            :
            'Als erfahrener Frontend-Entwickler mit praktischer Erfahrung bringe ich einen starken Hintergrund in HTML, CSS und JavaScript in jedes Projekt ein. Derzeit arbeite ich bei der brandung GmbH in Köln und kann auf eine nachweisliche Erfolgsbilanz bei der Entwicklung visuell beeindruckender und reaktionsfähiger Websites verweisen, die die Benutzerinteraktion verbessern und die Konversionen steigern. Ich halte mich mit Leidenschaft über die neuesten Branchentrends und Tools auf dem Laufenden, um außergewöhnliche Ergebnisse zu erzielen. Wenn Sie auf der Suche nach einem zuverlässigen und talentierten Frontend-Entwickler sind, sind Sie bei mir genau richtig.'
            }
          </h2>
        </section>
        <section>
          <HeadText
            headline="Skills"
            context={
              lang === 'eng'?
              'As a Frontend Developer, I possess a diverse skillset that enables me to deliver outstanding results for every project. With expertise in React and NextJS, I am proficient in developing scalable and performant web applications that meet client requirements. I also have extensive experience in using Storybook, TailwindCSS, and Cypress for UI design, development, and testing. I am proficient in Git and Typescript, which helps me maintain code quality and streamline the development process. My proficiency in Figma and Adobe XD enables me to create engaging designs that align with client vision and project goals. Furthermore, I have experience using Jira to manage project timelines, track progress, and communicate with team members effectively.'
              :
              'Als Frontend-Entwickler verfüge ich über vielfältige Fähigkeiten, die es mir ermöglichen, bei jedem Projekt hervorragende Ergebnisse zu erzielen. Mit meiner Expertise in React und NextJS bin ich in der Lage, skalierbare und performante Webanwendungen zu entwickeln, die die Anforderungen der Kunden erfüllen. Außerdem habe ich umfangreiche Erfahrung im Umgang mit Storybook, TailwindCSS und Cypress für UI-Design, Entwicklung und Testing. Ich beherrsche Git und Typescript, was mir hilft, die Codequalität zu erhalten und den Entwicklungsprozess zu optimieren. Meine Kenntnisse in Figma und Adobe XD ermöglichen es mir, ansprechende Designs zu erstellen, die mit den Vorstellungen des Kunden und den Projektzielen übereinstimmen. Darüber hinaus habe ich Erfahrung im Umgang mit Jira, um Projektzeitpläne zu verwalten, den Fortschritt zu verfolgen und effektiv mit Teammitgliedern zu kommunizieren.'
            }
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
                place={lang === 'eng' ? 'Germany, Cologne' : 'Deutschland, Köln'}
                jobTitel={lang === 'eng' ? 'Junior Frontend Developer' : 'Junior Frontend Entwickler'}
                date={lang === 'eng' ? 'Juli 2021 - now' : 'Juli 2021 - jetzt'}
              ></WorkListTeaser>

              <WorkListTeaser
                img={ImgMap.djumla.src}
                company="Frontend, Djumla"
                companyLink="https://www.djumla.de/"
                place={lang === 'eng' ? 'Germany, Cologne' : 'Deutschland, Köln'}
                jobTitel={lang === 'eng' ? 'Internship as Frontend Developer' : 'Praktikum als Frontend Entwickler'}
                date="Oktober 2016 - Oktober 2016"
              ></WorkListTeaser>

              <WorkListTeaser
                img={ImgMap.lemm.src}
                company="Frontend, Lemm Werbeagentur "
                companyLink="https://www.lemm.de/"
                place={lang === 'eng' ? 'Germany, Euskirchen' : 'Deutschland, Euskirchen'}
                jobTitel={lang === 'eng' ? 'Internship as Frontend Developer' : 'Praktikum als Frontend Entwickler'}
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
                place={lang === 'eng' ? 'Germany, Cologne' : 'Deutschland, Köln'}
                jobTitel={lang === 'eng' ? 'Training as Media Designer' : 'Ausbildung als Mediengestalter Digital/Print'}
                date="Aug 2018 - Juli 2021"
              ></WorkListTeaser>
              <WorkListTeaser
                img={ImgMap.teb.src}
                company="Thomas-Eßer-Berufskolleg"
                companyLink="https://teb-eu.eu/TEB_HP/"
                place={lang === 'eng' ? 'Germany, Euskirchen' : 'Deutschland, Euskirchen'}
                jobTitel={lang === 'eng' ? 'Training as Information Technology Assistant' : 'Ausbildung als Informationstechnischer Assistent'}
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
                date={lang === 'eng' ? '2021 - now' : '2021 - jetzt'}
              ></WorkListTeaser>
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
      <LanguageSwitch/>
      <Contact></Contact>
      <Analytics mode="production"></Analytics>
    </div>
  );
};

export default Resume;
