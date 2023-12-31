import React from 'react'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa6";


export default function FooterContact() {
    const iconProps = {
      color: "black",
      size: 30,
    };
  return (
    <div className="flex flex-col gap-5">
      <p>Social Media</p>
      {/* icon main container */}
      <div className="grid w-2/12 grid-cols-2 gap-10 max-sm:w-3/12">
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white hover:bg-secondary">
          <FaInstagram {...iconProps} />
        </div>
        <a
          href="https://www.tiktok.com/@investwithstem"
          target="_blank"
          className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white hover:bg-secondary"
        >
          <FaTiktok {...iconProps} />
        </a>
      </div>
      <p>Contacts</p>
      <div className="grid w-1/12 grid-cols-1 gap-y-2">
        <a
          href="mailto:support@investwithstem.com"
          className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white hover:bg-secondary"
        >
          <MdOutlineMail {...iconProps} />
        </a>
        <p className="text-lime-300 text-sm">support@investwithstem.com</p>
      </div>
    </div>
  );
}
