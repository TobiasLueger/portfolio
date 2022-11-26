import { ChatsTeardrop } from "phosphor-react";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-row justify-center items-center fixed bottom-2 right-2 px-4 py-2 bg-fontOrange z-50 rounded-3xl text-white">
      <ChatsTeardrop size={32} color="#ffffff" weight="fill" />
      <p className="ml-2">Contact Me</p>
    </div>
  );
};

export default Contact;
