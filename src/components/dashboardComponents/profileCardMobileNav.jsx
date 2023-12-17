import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

export default function ProfileCardMobileNav() {
  return (
    <div className="bg-secondary flex justify-between items-center p-3 w-1/3 rounded-full ">
      <p className="flex items-center gap-2 text-sm">
        <BsPersonCircle size={25} color="#0d3428" />
        Jeff
      </p>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className=" m-1">
          <BsThreeDots />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Change password</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
