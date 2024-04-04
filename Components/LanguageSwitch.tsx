import Link from "next/link";
import { ChatsTeardrop } from "phosphor-react";
import React, { useEffect, useLayoutEffect } from "react";
import useLanguageStore from "../lib/globalLanguage";

const LanguageSwitch = () => {
  const normalItem = "text-white rounded-full w-9 h-9 flex justify-center items-center";
  const activeItem = "text-black rounded-full bg-white w-9 h-9 flex justify-center items-center";

  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const language = useLanguageStore((state) => state.language);

  useLayoutEffect(() => {
    const localLang = localStorage.getItem('lang');
    if (localLang && (localLang === "en" || localLang === "de")) {
      setLanguage(localLang);
    }
  }, []);

  const switchLanguage = () => {
    const newLanguage = language === 'en' ? 'de' : 'en';
    localStorage.setItem('lang', newLanguage);
    setLanguage(newLanguage);
  }

  return (
    <button
      className="flex flex-row justify-center items-center fixed bottom-[100px] right-3 px-2 py-2 bg-greyDark z-50 rounded-full text-white shadow-2xl cursor-pointer no-underline"
      onClick={switchLanguage}
    >
      <div className={language === "en" ? activeItem : normalItem} >
        EN
      </div>
      <div className={language === "de" ? activeItem : normalItem}>
        DE
      </div>
    </button>
  );
};

export default LanguageSwitch;