import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import ButtonDBoard from '../buttons/buttonDashboard';
import { IoLogOut } from "react-icons/io5";
import { RiBankCardFill } from "react-icons/ri";
import logout from '../../data/logout';
import logo from "../../assets/images/logo-white.svg";

export default function SideNav() {
  let navigate=useNavigate()
        const iconProps = {
          size: 30,
        };
  return (
    <div className=" max-sm:hidden max-sm:top-0 max-sm:h-full max-sm:z-[1] max-sm:fixed max-sm:w-4/5 py-10 px-5 text-sm bg-primary w-2/12 text-white flex flex-col justify-evenly items-center">
      <Link to={"/"}>
        <img src={logo} alt="" className="h-[70px] max-sm:h-[50px]" />
      </Link>
      {/* Nav Element */}
      <ul className="text-white flex flex-col gap-8 w-full">
        <Link to={"/users/dashboard"} className="flex items-center gap-5 ">
          <MdDashboard {...iconProps} />
          Dashboard
        </Link>
        <Link to={"/users/investments"} className="flex items-center gap-5 ">
          <RiBankCardFill {...iconProps} />
          Investments
        </Link>
        <Link to={"/users/update-profile"} className="flex items-center gap-5">
          <RiAccountCircleFill {...iconProps} />
          Account
        </Link>
      </ul>
      <ButtonDBoard
        action={() => {
          console.log("Baby");
        }}
      />
      <Link className="flex items-center gap-5 w-full text-secondary">
        <MdEmail {...iconProps} />
        Contact Us
      </Link>
      <Link
        className="flex items-center gap-5 w-full text-gray-400 "
        onClick={async () => {
          await logout();
        }}
      >
        <IoLogOut {...iconProps} />
        Logout
      </Link>
    </div>
  );
}

