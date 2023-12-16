import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import ButtonDBoard from "../buttons/buttonDashboard";
import { IoLogOut } from "react-icons/io5";
import { RiBankCardFill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiApps2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

export default function SideNavMobile() {
  let [mNav, setMNav] = useState(false);
  const iconProps = {
    size: 30,
  };
  return (
    <div className=" lg:w-2/12">
      {/* mobile Nav */}
      <div className="bg-white w-full md:hidden fixed top-0 p-5 flex justify-between">
        <HiMenuAlt2 {...iconProps} onClick={()=>{setMNav(!mNav)}}/>
        <RiApps2Line {...iconProps} />
      </div>
      {mNav && (
        <div className="relative max-sm:top-0 max-sm:h-full max-sm:z-[1] max-sm:fixed max-sm:w-4/5 py-10 px-5 text-sm bg-primary h-full text-white flex flex-col justify-evenly items-center">
        <IoCloseOutline size={30} className="absolute top-5 right-5" onClick={()=>{setMNav(!mNav)}}/>
          <p>LOGO</p>
          {/* Nav Element */}
          <ul className="text-white flex flex-col gap-8 w-full">
            <Link className="flex items-center gap-5 ">
              <MdDashboard {...iconProps} />
              Dashboard
            </Link>
            <Link className="flex items-center gap-5 ">
              <RiBankCardFill {...iconProps} />
              Investments
            </Link>
            <Link className="flex items-center gap-5">
              <RiAccountCircleFill {...iconProps} />
              Account
            </Link>
          </ul>
          <ButtonDBoard />
          <Link className="flex items-center gap-5 w-full text-secondary">
            <MdEmail {...iconProps} />
            Contact Us
          </Link>
          <Link className="flex items-center gap-5 w-full text-gray-400 ">
            <IoLogOut {...iconProps} />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
