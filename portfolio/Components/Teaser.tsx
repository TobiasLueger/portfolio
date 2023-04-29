import Link from "next/link";
import Image from "next/image";
import React from "react";
import Chip from "./Chip";
import { Hourglass } from "phosphor-react";

const Teaser = (props: {
  img: any;
  headline: any;
  content: any;
  chips?: any;
  link: any;
  margin?: boolean;
  noFinish?: boolean;
}) => {
  const { img, headline, content, chips, link, noFinish } = props;
  return (
    <Link
      href={link}
      className={`lg:w-[50%] lg:rounded-2xl lg:hover:bg-bgGrey lg:transition-all lg:p-6 group no-underline text-grey h-fit`}
    >
      <Image
        src={img}
        alt={""}
        width="920"
        height="920"
        className="lg:rounded-xl lg:object-cover"
        sizes="(max-width: 1023px) 100vw, 50vw"
      ></Image>
      <div className="pl-4 lg:pl-2">
        <div>
          <h3 className="mt-3 text-2xl flex flex-row gap-4 items-center">
            <b>{headline} </b>
            {noFinish && (
              <Hourglass className="text-fontNavyBlue" weight="bold" />
            )}
          </h3>
          <p className="mt-3 text-xl font-bold">{content}</p>
        </div>
        {chips && (
          <div className="hidden lg:flex lg:flex-row lg:flex-wrap lg:gap-2 lg:mt-4">
            {chips.map((chip: string) => (
              <Chip text={chip} classes="font-normal"></Chip>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Teaser;
