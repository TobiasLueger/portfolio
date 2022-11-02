import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import Me from "../Components/Me";
import Projects from "../Components/Projects";
import SocialBar from "../Components/SocialBar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tobias Lüger - Frondend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div>
          Hi, I am Tobias. I am a frondend developer and passionate about
          digital solutions.
        </div>
        <div id="work">
          <div>
            <Image
              src="/img/blinddate.png"
              alt={""}
              width="920"
              height="920"
            ></Image>
            <div>
              <p>A dating app that combine love and experiences. (WIP) </p>
              <a href="https://github.com/Blind-Date-Official/BlindDate">
                Show Project
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/img/wier.jpeg"
              alt={""}
              width="920"
              height="920"
            ></Image>
            <div>
              <p>A dating app that combine love and experiences. (WIP) </p>
              <a href="https://github.com/Blind-Date-Official/BlindDate">
                Show Project
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/img/portfolio.png"
              alt={""}
              width="920"
              height="920"
            ></Image>
            <div>
              <p>A dating app that combine love and experiences. (WIP) </p>
              <a href="https://github.com/Blind-Date-Official/BlindDate">
                Show Project
              </a>
            </div>
          </div>
        </div>
        {/* 
        <div className="h-[calc(100vh-80px)] pt-0 top-[40px] left-0 md:left-[40px] items-center justify-center fixed w-full md:w-[calc(100%-80px)] wayvey-border bg-[#f8f7f3] overflow-scroll snap-y snap-mandatory">
          <Me></Me>
          <Projects></Projects>
        </div>
        <SocialBar></SocialBar> */}
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Home;
