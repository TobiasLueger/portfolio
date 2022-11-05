import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../Components/Header";
import Me from "../Components/Me";
import Projects from "../Components/Projects";
import SocialBar from "../Components/SocialBar";

const Home: NextPage = () => {
  return (
    <div className="bg-[#f6f5f1]">
      <Head>
        <title>Tobias Lüger - Frondend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className="flex flex-1 flex-col items-center justify-center w-full lg:max-w-[90%] lg:mx-auto px-[30px]">
        <div className="h-screen flex flex-col justify-end pb-[80px]">
          <p className="text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold text-black tracking-[-0.04em] mb-6">
            Hi, I am Tobias. <br className="hidden md:block" /> I am a frondend
            developer and passionate about digital solutions.
          </p>
          <div
            onClick={() => {
              let work = document.getElementById("work");
              work &&
                work.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-2xl border-b-[1px] border-[#a5a5a5] font-normal w-fit relative tracking-tighter flex flex-col text-[#a5a5a5] after:h-[1px] after:bg-black after:max-w-0 after:w-full after:absolute after:bottom-[-1px] hover:after:max-w-full  hover:text-black transition duration-[0.4s] ease-out cursor-pointer"
          >
            view my work
          </div>
        </div>
        <div id="work" className="pt-20">
          <div className="mb-20">
            <Image
              src="/img/blinddate.png"
              className="max-w-[80px] lg:max-w-[120px] mb-5"
              alt={""}
              width="920"
              height="920"
            ></Image>
            <div>
              <p className="text-black text-xl font-medium mb-3">
                A dating app that combine love and experiences. (WIP){" "}
              </p>
              <a
                href="https://github.com/Blind-Date-Official/BlindDate"
                className="text-xl border-b-[1px] border-[#a5a5a5] font-normal w-fit relative tracking-tighter flex flex-col text-[#a5a5a5] after:h-[1px] after:bg-black after:max-w-0 after:w-full after:absolute after:bottom-[-1px] hover:after:max-w-full  hover:text-black transition duration-[0.4s] ease-out cursor-pointer"
              >
                Show Project
              </a>
            </div>
          </div>
          <div className="mb-20">
            <Image
              src="/img/wier.png"
              className="max-w-[80px] lg:max-w-[120px] mb-5"
              alt={""}
              width="920"
              height="920"
            ></Image>
            <div>
              <p className="text-black text-xl font-medium mb-3">
                A dating app that combine love and experiences. (WIP){" "}
              </p>
              <a
                href="https://github.com/Blind-Date-Official/BlindDate"
                className="text-xl border-b-[1px] border-[#a5a5a5] font-normal w-fit relative tracking-tighter flex flex-col text-[#a5a5a5] after:h-[1px] after:bg-black after:max-w-0 after:w-full after:absolute after:bottom-[-1px] hover:after:max-w-full  hover:text-black transition duration-[0.4s] ease-out cursor-pointer"
              >
                Show Project
              </a>
            </div>
          </div>
          <div className="mb-20">
            <Image
              src="/img/portfolio.png"
              className="max-w-[80px] lg:max-w-[120px] mb-5"
              alt={""}
              width="920"
              height="920"
            ></Image>
            <div>
              <p className="text-black text-xl font-medium mb-3">
                A dating app that combine love and experiences. (WIP){" "}
              </p>
              <a
                href="https://github.com/Blind-Date-Official/BlindDate"
                className="text-xl border-b-[1px] border-[#a5a5a5] font-normal w-fit relative tracking-tighter flex flex-col text-[#a5a5a5] after:h-[1px] after:bg-black after:max-w-0 after:w-full after:absolute after:bottom-[-1px] hover:after:max-w-full  hover:text-black transition duration-[0.4s] ease-out cursor-pointer"
              >
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
        <div className="mt-40 border-t w-full lg:max-w-[90%] lg:mx-auto px-[30px]">
          Footer
        </div>
      </main>
    </div>
  );
};

export default Home;
