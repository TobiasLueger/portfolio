import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import Me from "../Components/Me";
import Projects from "../Components/Projects";
import SocialBar from "../Components/SocialBar";

const About: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tobias Lüger - About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        about me
      </main>
    </div>
  );
};

export default About;
