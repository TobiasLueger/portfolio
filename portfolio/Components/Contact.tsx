import Link from "next/link";
import { ChatsTeardrop } from "phosphor-react";
import React from "react";
import useLanguageStore from "../lib/globalLanguage";

const Contact = () => {

  const lang = useLanguageStore((state:any) => state.language);
  
  return (
    <>
      <Link
        href={"mailto:tobias-lueger@web.de"}
        className="flex flex-row justify-center items-center fixed bottom-7 right-3 px-4 py-2 bg-greyDark z-50 rounded-full text-white shadow-2xl cursor-pointer no-underline"
      >
        <ChatsTeardrop size={35} color="#ffffff" weight="fill" />
        <p className="lg:text-lg ml-2">
          {
            lang === "en" ? "Contact Me" : "Kontakt"
          }
        </p>
      </Link>
    </>
  );
};

export default Contact;
