import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navigation = () => {
  const router = useRouter();

  return (
    <header className="w-full lg:w-1/4 lg:h-1/2 lg:flex lg:justify-center lg:items-end bg-white/80 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none fixed top-0 left-0 z-50">
      <nav className="w-full lg:w-auto flex lg:flex-col lg:h-full justify-between lg:justify-center lg:gap-6 px-4 py-2 text-md">
        <Link href="/" className={router.pathname == "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/projects"
          className={router.pathname == "/projects" ? "active" : ""}
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className={router.pathname == "/resume" ? "active" : ""}
        >
          Resume
        </Link>
        <Link
          href="/life"
          className={router.pathname == "/life" ? "active" : ""}
        >
          Life
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
