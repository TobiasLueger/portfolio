import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialBar = ({}) => {
  return (
    <div className="flex flex-row fixed bottom-[10px] left-1/2 -translate-x-1/2 z-50">
      <Link
        href={"https://www.instagram.com/designwithtobi/"}
        className="mx-1 hover:opacity-60 transition-all"
      >
        <Image
          src="/icons/instagram.png"
          alt="Instagram"
          className="w-[20px]"
          width={100}
          height={100}
        />
      </Link>
      <Link
        href={"https://www.xing.com/profile/Tobias_Lueger2/cv"}
        className="mx-1"
      >
        <Image
          src="/icons/xing.png"
          alt="Xing"
          className="w-[20px]"
          width={100}
          height={100}
        />
      </Link>
      <Link href={"https://github.com/TobiasLueger"} className="mx-1">
        <Image
          src="/icons/github.png"
          alt="Github"
          className="w-[20px]"
          width={100}
          height={100}
        />
      </Link>
      <Link href={"mailto:tobias-lueger@web.de"} className="mx-1">
        <Image
          src="/icons/mail.png"
          alt="Mail"
          className="w-[20px]"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
};

export default SocialBar;
