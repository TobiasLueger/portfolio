import Link from "next/link";
import Image from "next/image";
import React from "react";
import Chip from "./Chip";
import { ArrowSquareIn, Hourglass } from "phosphor-react";
import useLanguageStore from "../lib/globalLanguage";

const Teaser = (props: {
  img: any;
  headline: any;
  content: any;
  chips?: any;
  link: any;
  margin?: boolean;
  noFinish?: boolean;
  imageBorder?: boolean;
  blank?: boolean;
}) => {
  const {
    img,
    headline,
    content,
    chips,
    link,
    noFinish,
    imageBorder = false,
    blank = true,
  } = props;

  const lang = useLanguageStore((state:any) => state.language);

  return (
    <Link
      href={link}
      className={`lg:w-[50%] lg:rounded-2xl lg:hover:bg-bgGrey lg:transition-all px-10 lg:px-6 lg:p-6 group no-underline text-grey h-fit relative`}
      target={blank ? '_blank' : '_self'}
    >
      <div className="p-2 bg-white absolute rounded-lg right-[3rem] top-3 lg:right-8 lg:top-8 transition-all lg:opacity-0 lg:group-hover:opacity-100 shadow-md">
        <ArrowSquareIn size={25} color="#000" weight="bold" />
      </div>
      <Image
        src={img}
        alt={""}
        width="920"
        height="920"
        className={`${
          imageBorder && "border-white border-[4px]"
        } lg:rounded-xl lg:object-cover`}
        sizes="(max-width: 1023px) 100vw, 50vw"
      ></Image>
      <div className="pl-4 lg:pl-2">
        <div>
          <h3 className="mt-3 text-2xl flex flex-row gap-4 items-center">
            <b>{headline} </b>
            {noFinish && (
              <>
                <Hourglass className="text-fontNavyBlue " weight="bold" />
                <span className="text-sm -ml-3"> {lang === "en" ? "in progress..." : "in bearbeitung..."}</span>
              </>
            )}
          </h3>
          <p className="mt-3 text-xl font-bold">{content}</p>
        </div>
        {chips && (
          <div className="flex flex-row flex-wrap gap-2 mt-4">
            {chips.map((chip: string, key:number) => (
              <Chip key={key} text={chip} classes="font-normal"></Chip>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Teaser;
