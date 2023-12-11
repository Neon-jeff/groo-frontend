import React from 'react'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


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
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white hover:bg-secondary">
          <RiFacebookCircleLine {...iconProps} />
        </div>
      </div>
      <p>Contacts</p>
      <div className="grid w-1/12 grid-cols-1 gap-y-2">
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white hover:bg-secondary">
          <MdOutlineMail {...iconProps} />
        </div>
        <p className='text-lime-300 text-sm'>contact@investwithstem.com</p>
      </div>
    </div>
  );
}
