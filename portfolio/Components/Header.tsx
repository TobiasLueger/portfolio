import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List } from "phosphor-react";

const Header = ({}) => {
  const [mobileClicked, setMobileClicked] = useState(false);

  return (
    <div className="absolute w-full flex flex-row justify-between items-end h-[60px] md:h-[80px] px-[30px]">
      <div className="flex flex-row w-full justify-between items-center">
        <Link href="/">
          <p className="font-bold text-2xl text-black flex relative">
            tobias lüger
            <Image
              src="/img/portfolio.png"
              className="max-w-[30px] relative -top-3 -right-2"
              alt={""}
              width="920"
              height="920"
            ></Image>
          </p>
        </Link>
        <div className="md:hidden">
          <List
            size={35}
            color="#000"
            weight="bold"
            onClick={() => setMobileClicked(!mobileClicked)}
          />
        </div>

        <div className={`md:flex ${mobileClicked ? "flex" : "hidden"}`}>
          <nav className="h-full relative flex flex-col justify-end">
            <ul className="flex-row h-full relative flex justify-end list-none">
              <li className="flex border-none text-left text-[#0f0f0f] leading-[2.4] text-[15px] tracking-[-0.2px] font-[600]">
                <Link href="#work">work</Link>
              </li>
              <li className="flex border-none text-left text-[#0f0f0f] leading-[2.4] text-[15px] tracking-[-0.2px] font-[600]">
                <Link href="/about-me">about me</Link>
              </li>
              <li className="flex border-none text-left text-[#0f0f0f] leading-[2.4] text-[15px] tracking-[-0.2px] font-[600]">
                <Link href="mailto:tobias-lueger@web.de">get in touch</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
