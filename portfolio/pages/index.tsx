import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Me from "../Components/Me";
import Navigation from "../Components/Navigation";
import Projects from "../Components/Projects";
import SocialBar from "../Components/SocialBar";
import Work from "../Components/Work";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tobias Lüger - Frondend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header></Header> */}
      <Navigation></Navigation>

      <main className="flex w-full lg:w-3/4 lg:absolute lg:right-0 flex-1 flex-col mt-14">
        <Me></Me>
        <Work></Work>
      </main>
      <Footer></Footer>
      <Contact></Contact>
    </div>
  );
};

export default Home;
