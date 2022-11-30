import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Me from "../../Components/Me";
import Navigation from "../../Components/Navigation";
import Project from "../../Components/Project";
import Work from "../../Components/Work";

const Trustme: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tobias Lüger - Frondend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>

      <main>
        <Project projectTitle="Trust Me"></Project>
      </main>
      <Footer></Footer>
      <Contact></Contact>
    </div>
  );
};

export default Trustme;
