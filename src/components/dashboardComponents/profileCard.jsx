import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { userStore } from "../../data/store";
import { Link } from "react-router-dom";
export default function ProfileCard() {
  let { profile } = userStore((state) => state.user);
  if (!profile) {
    return (
      <div className="bg-white text-black text-3xl h-screen w-screen">
        <p>loading</p>
      </div>
    );
  }
  return (
    <div className="bg-white flex justify-between items-center p-5 rounded-full w-full">
      <p className="flex items-center gap-2 text-sm">
        <BsPersonCircle size={25} color="#0d3428" />
        {profile?.user?.first_name} {profile?.user?.last_name}
      </p>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className=" m-1">
          <BsThreeDots />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <Link to={"/users/update-profile"}>
            Change Password
          </Link>
        </ul>
      </div>
    </div>
  );
}
