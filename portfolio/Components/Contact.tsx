import { ChatsTeardrop } from "phosphor-react";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-row justify-center items-center fixed bottom-7 right-3 px-4 lg:px-6 py-2 lg:py-3 bg-fontOrange z-50 rounded-full text-white shadow-2xl cursor-pointer">
      <ChatsTeardrop size={40} color="#ffffff" weight="fill" />
      <p className="lg:text-xl ml-2">Contact Me</p>
    </div>
  );
};

export default Contact;
