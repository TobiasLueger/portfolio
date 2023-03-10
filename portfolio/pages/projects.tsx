import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Me from "../Components/Me";
import Navigation from "../Components/Navigation";
import Work from "../Components/Work";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tobias Lüger - Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Tobias Lüger - Projects"
        ></meta>
        <meta
          name="description"
          content="The projects Tobias Lüger is working or has worked on."
        ></meta>
        <meta
          property="og:description"
          content="The projects Tobias Lüger is working or has worked on."
        ></meta>
      </Head>
      <Navigation></Navigation>

      <main>
        <Work></Work>
      </main>
      <Footer></Footer>
      <Contact></Contact>
    </div>
  );
};

export default Projects;
