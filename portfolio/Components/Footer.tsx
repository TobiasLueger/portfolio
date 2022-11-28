import Link from "next/link";
import { Copyright, GithubLogo, Heart } from "phosphor-react";
import React from "react";
import SocialBar from "./SocialBar";

const Footer = () => {
  return (
    <footer className="lg:fixed lg:w-1/4 lg:top-1/2 flex lg:h-1/2 lg:justify-end lg:items-end lg:footerHeight:hidden px-4 lg:pb-8 flex flex-col mt-20 lg:mt-0 max-w-xs lg:max-w-none mx-auto">
      <div className="lg:pr-7 xl:pr-12 lg:flex lg:flex-col lg:justify-end lg:items-end lg:gap-4">
        <div className="bg-yellow-300 rounded-lg py-1 px-2 text-greyDark w-fit hidden lg:flex">
          Open to Work
        </div>
        <div className="mb-5 lg:mb-0 flex justify-center">
          <SocialBar></SocialBar>
        </div>
        <div className="flex justify-between mb-5 lg:mb-0">
          <Link
            href="https://streamlabs.com/oftoto/tip"
            className="no-underline flex flex-row items-center bg-bgChip text-greyDark py-1 px-2 rounded-lg w-fit"
          >
            <Heart color="red" weight="fill" size={16} className="mr-2" />
            Support me
          </Link>

          <div className="bg-yellow-300 rounded-lg py-1 px-2 text-greyDark w-fit flex lg:hidden">
            Open to Work
          </div>
        </div>

        <div className="flex flex-col w-full justify-center lg:justify-end items-center lg:items-end mb-16 lg:mb-0">
          <p className="flex items-center justify-center lg:justify-end lg:text-right mb-2 lg:mb-0">
            <Copyright
              size={16}
              color="#555"
              weight="regular"
              className="mr-1"
            />
            2022 Tobias Lüger
          </p>
          <small className="break-normal mb-2 lg:mb-0">
            Find me at
            <Link href="mailto:tobias-lueger@web.de" className="ml-2 no">
              tobias-lueger@web.de
            </Link>
          </small>
          <small>Designed & coded from scretch</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
