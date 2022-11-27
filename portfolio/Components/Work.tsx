import React from "react";
import Image from "next/image";
import Link from "next/link";
import Chip from "./Chip";

const Work = () => {
  return (
    <div id="projects" className="lg:flex lg:flex-row lg:flex-wrap ">
      <h2 className="lg:w-full lg:px-4">Portfolio</h2>
      <Link
        href="/blinddate"
        className="lg:w-[45%] lg:rounded-2xl lg:hover:bg-bgGrey lg:p-4 group"
      >
        <Image
          src="/img/blinddate.png"
          alt={""}
          width="920"
          height="920"
          className="lg:rounded-xl lg:object-cover group-hover:scale-105"
        ></Image>
        <div>
          <h2>
            <b>BlindDate </b>
          </h2>
          <p>A dating app that combine love and experiences. (WIP)</p>
          {/* <a href="https://github.com/Blind-Date-Official/BlindDate">
            Show Project
          </a> */}
        </div>
        <div>
          <Chip text="React Native"></Chip>
        </div>
      </Link>
      <Link
        href="/eifeljugend"
        className="lg:w-[55%] lg:rounded-2xl lg:hover:bg-bgGrey lg:p-4 lg:mt-60"
      >
        <Image
          src="/img/eifeljugend.png"
          alt={""}
          width="920"
          height="920"
          className="lg:rounded-xl lg:object-cover"
        ></Image>
        <div>
          <h2>
            <b>Eifeljugend </b>
          </h2>
          <p>A dating app that combine love and experiences. (WIP)</p>
          {/* <a href="https://github.com/Blind-Date-Official/BlindDate">
            Show Project
          </a> */}
        </div>
      </Link>
      <Link
        href="/tina"
        className="lg:w-[55%] lg:rounded-2xl lg:hover:bg-bgGrey lg:p-4"
      >
        <Image
          src="/img/tina.png"
          alt={""}
          width="920"
          height="920"
          className="lg:rounded-xl lg:object-cover"
        ></Image>
        <div>
          <h2>
            <b>Trust Me </b>
          </h2>
          <p>A dating app that combine love and experiences. (WIP)</p>
          {/* <a href="https://github.com/Blind-Date-Official/BlindDate">
            Show Project
          </a> */}
        </div>
      </Link>
    </div>
  );
};

export default Work;
