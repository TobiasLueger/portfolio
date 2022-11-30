import React from "react";
import Image from "next/image";

const WorkListTeaser = (props: {
  img: string;
  company: string;
  place: string;
  jobTitel: string;
  date: string;
}) => {
  const { img, company, place, jobTitel, date } = props;
  return (
    <div className="flex flex-row gap-8">
      <div className="max-w-[100px] max-h-[100px] w-[100px] h-[100px] bg-white flex justify-center items-center rounded-xl">
        <Image
          src={img}
          alt={""}
          width="90"
          height="90"
          className=" lg:object-cover max-w-[90px] max-h-[90px]"
        ></Image>
      </div>
      <div>
        <p className="text-lg mb-1">{company}</p>
        <p className="text-lg  mb-1">{place}</p>
        <p className="text-lg text-greyDark font-bold  mb-1">{jobTitel}</p>
        <p className="text-lg  mb-1">{date}</p>
      </div>
    </div>
  );
};

export default WorkListTeaser;
