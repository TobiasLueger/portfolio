import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Me from "../Components/Me";
import Navigation from "../Components/Navigation";
import Work from "../Components/Work";
import { Analytics } from '@vercel/analytics/react';
import LanguageSwitch from "../Components/LanguageSwitch";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tobias Lüger - Frondend Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="application-name" content="Tobias Lüger"></meta>
        <meta
          property="og:title"
          content="Tobias Lüger - Frondend Developer"
        ></meta>
        <meta
          name="description"
          content="Tobias Lüger is an Frondend Developer and passionate about digital solutions, inventions and design."
        ></meta>
        <meta
          property="og:description"
          content="Tobias Lüger is an Frondend Developer and passionate about digital solutions, inventions and design."
        ></meta>
      </Head>

      <Navigation/>
      <main>
        <Me/>
        <Work/>
      </main>
      <Footer/>
      <LanguageSwitch/>
      <Contact/>
      <Analytics mode="production"/>
    </div>
  );
};

export default Home;
