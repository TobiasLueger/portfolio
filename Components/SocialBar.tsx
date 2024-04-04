import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialBar = ({}) => {
  return (
    <div className="flex flex-row gap-2">
      <Link
        href={"https://www.instagram.com/design_with_tobi/"}
        className="mx-1 hover:opacity-60 transition-all"
      >
        <Image
          src="/icons/instagram.png"
          alt="Instagram"
          className="w-[24px]"
          width={100}
          height={100}
        />
      </Link>
      <Link
        href={"https://www.xing.com/profile/Tobias_Lueger2/cv"}
        className="mx-1 hover:opacity-60 transition-all"
      >
        <Image
          src="/icons/xing.png"
          alt="Xing"
          className="w-[24px]"
          width={100}
          height={100}
        />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/tobias-l%C3%BCger-257903269/"}
        className="mx-1 hover:opacity-60 transition-all"
      >
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn"
          className="w-[24px]"
          width={100}
          height={100}
        />
      </Link>
      <Link
        href={"https://github.com/TobiasLueger"}
        className="mx-1 hover:opacity-60 transition-all"
      >
        <Image
          src="/icons/github.png"
          alt="Github"
          className="w-[24px]"
          width={100}
          height={100}
        />
      </Link>
      <Link
        href={"https://dribbble.com/DesignWithTobi"}
        className="mx-1 hover:opacity-60 transition-all"
      >
        <Image
          src="/icons/dribble.png"
          alt="Dribble"
          className="w-[24px]"
          width={100}
          height={100}
        />
      </Link>
      <Link
        href={"mailto:tobias-lueger@web.de"}
        className="mx-1 hover:opacity-60 transition-all"
      >
        <Image
          src="/icons/mail.png"
          alt="Mail"
          className="w-[24px]"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
};

export default SocialBar;
