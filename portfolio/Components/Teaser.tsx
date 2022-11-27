import Link from "next/link";
import Image from "next/image";
import React from "react";
import Chip from "./Chip";

const Teaser = (props: {
  img: any;
  headline: any;
  content: any;
  chips?: any;
  link: any;
  margin?: boolean;
}) => {
  const { img, headline, content, chips, link, margin } = props;
  return (
    <Link
      href={link}
      className={`lg:w-[50%] lg:rounded-2xl lg:hover:bg-bgGrey lg:transition-all lg:p-6 group no-underline text-grey h-fit ${
        margin && "lg:mt-36"
      }`}
    >
      <Image
        src={img}
        alt={""}
        width="920"
        height="920"
        className="lg:rounded-xl lg:object-cover"
      ></Image>
      <div className="pl-4 lg:pl-2">
        <div>
          <h2 className="mt-3">
            <b>{headline} </b>
          </h2>
          <p className="mt-3 text-lg font-bold">{content}</p>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:flex-wrap lg:gap-2 lg:mt-4">
          {chips &&
            chips.map((chip: string) => (
              <Chip text={chip} teaser={true}></Chip>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default Teaser;
