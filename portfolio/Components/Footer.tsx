import { Copyright, GithubLogo } from "phosphor-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="lg:fixed lg:w-1/4 lg:top-1/2 flex lg:h-1/2 lg:justify-end lg:items-end lg:footerHeight:hidden px-4 flex flex-col">
      <div>Social Links</div>
      <div>
        <p>https://streamlabs.com/oftoto/tip</p>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <small className="flex items-center">
          <Copyright size={14} color="#555" weight="regular" className="mr-1" />
          2022 Tobias Lüger
        </small>
        <small>Designed & coded from scretch</small>
      </div>
    </footer>
  );
};

export default Footer;
