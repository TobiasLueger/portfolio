import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Me from "../Components/Me";
import Navigation from "../Components/Navigation";
import Work from "../Components/Work";

const Life: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tobias Lüger - Frondend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>

      <main className="flex w-full lg:w-3/4 lg:absolute lg:right-0 flex-1 flex-col mt-14 max-w-[128rem]">
        <Me></Me>
        <Work></Work>
      </main>
      <Footer></Footer>
      <Contact></Contact>
    </div>
  );
};

export default Life;
