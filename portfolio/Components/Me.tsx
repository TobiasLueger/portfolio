import React from "react";
import Image from "next/image";

const Me = ({}) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row snap-center overflow-hidden">
      <div className="w-[60%] flex justify-center items-center h-full">
        <div className="font-bold text-xl">
          <h1 className="text-6xl font-extrabold mb-5">HELLO IM TOBI,</h1>
          <p>FRONTEND DEVELOPER,</p>
          <p>REACT - TAILWINDCSS - CYPRESS,</p>
          <p>OPEN MINDED,</p>
          <p>ALWAYS LEARNING,</p>
          <p>BASED IN GERMANY</p>
          <p>🚀🚀🚀</p>
        </div>
      </div>
      <div className="w-[40%] flex justify-center items-center h-full">
        <Image
          src="/img/me.jpg"
          alt="Mein Bild"
          className="w-1/2 rounded-xl opacity-90"
          width={2698}
          height={4059}
        />
      </div>
    </div>
  );
};

export default Me;
