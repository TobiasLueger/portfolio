import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useLanguageStore from "../lib/globalLanguage";
import { FileArrowDown } from "phosphor-react";

const Navigation = () => {
  const router = useRouter();

  const lang = useLanguageStore((state:any) => state.language);

  return (
    <header className="w-full lg:w-1/4 lg:h-1/2 lg:flex lg:items-end bg-white/80 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none fixed top-0 left-0 z-50 lg:pt-36">
      <nav className="w-full flex lg:flex-col lg:h-full justify-between lg:justify-start px-4 py-2 text-md">
        <Link href="/" className={router.pathname == "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/projects"
          className={/\/projects/.test(router.pathname) ? "active" : ""}
        >
          {
            lang === "en" ? "Projects" : "Projekte"
          }
        </Link>
        <Link
          href="/files/Tobias_Lüger_CV.pdf"
          target="_blank"
        >
          <div className="flex flex-row justify-end items-center group">CV <FileArrowDown size={25} className="ml-2" weight="bold" /></div>
        </Link>
        <Link
          href="/life"
          className={router.pathname == "/life" ? "active" : ""}
        >
          {
            lang === "en" ? "Life" : "Freizeit"
          }
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
