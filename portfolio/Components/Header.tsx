import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({}) => {
  return (
    <div className="absolute w-full">
      <div className="bg-transparent z-[5] relative left-0 pt-0 w-full h-auto visible opacity-100 text-right">
        <div className="max-w-[90%] px-0 mx-auto">
          <div className="flex h-[80px]">
            <div className="w-[40%] text-left">
              <Link href="/">
                <p>tobias lüger</p>
              </Link>
            </div>
            <div className="w-[60%] text-right">
              <nav className="h-full relative flex flex-col justify-end">
                <ul className="flex-row h-full relative flex justify-end list-none">
                  <li className="flex border-none text-left text-[#000] leading-[2.4] text-[15px] tracking-[-0.2px] font-[600]">
                    <Link href="#work">work</Link>
                  </li>
                  <li className="flex border-none text-left text-[#000] leading-[2.4] text-[15px] tracking-[-0.2px] font-[600]">
                    <Link href="/about-me">about me</Link>
                  </li>
                  <li className="flex border-none text-left text-[#000] leading-[2.4] text-[15px] tracking-[-0.2px] font-[600]">
                    <Link href="mailto:tobias-lueger@web.de">get in touch</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
