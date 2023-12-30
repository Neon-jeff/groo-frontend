import React, { useState } from "react";
import SideNav from "../../components/dashboardComponents/SideNav";
import SideNavMobile from "../../components/dashboardComponents/SideNavMobile";
import { userStore } from "../../data/store";
import FieldSet from "../../components/AuthComponents/fieldSet";
import ButtonAuth from '../../components/buttons/buttonLogin'
import Modal from '../../components/Modal/modal'
import Loader from "../../components/Modal/modalLoader";
import { useModal,useLoader } from "../../data/store";
import changepassword from "../../data/change-password";
import { BsPersonCircle } from "react-icons/bs";

export default function UpdateProfile() {
    let {user}=userStore(state=>state)
    let [password,setPasswrod]=useState("")
    let [confirm,setConfirm]=useState("")
  return (
    <div className="h-screen bg-dash flex overflow-x-hidden">
      <Modal text={"Passwords do not match"} />
      <Loader />
      <SideNavMobile />
      <SideNav />
      {/* Main content container */}
      <div className="w-full flex flex-col text-sm gap-5 items-center justify-center">
        {/* Details container */}
        {/* <h1 className="text-xl font-semibold max-sm:self-start px-5">
          Details
        </h1> */}
        <div className="w-3/5 bg-dash shadow-sm p-5 rounded-lg flex items-center max-sm:flex-col max-sm:items-center gap-8 max-sm:gap-2 max-sm:w-11/12  ">
          <div className="max-sm:text-center w-full  flex flex-col items-center">
            <BsPersonCircle
              size={90}
              color="#ffcf83"
              className=" rounded-full p-[1px] max-sm:p-0 max-sm:bg-transparent"
            />
            <p className="text-xl font-semibold">
              {user.profile.user.first_name} {user.profile.user.last_name}
            </p>
            <p className="text-secondary">{user.profile.acct_type}</p>
            <p
              className={`${
                user.profile.is_verified ? "text-green-500" : "text-secondary"
              } text-[.7rem]`}
            >
              {user.profile.is_verified ? "profile complete" : ""}
            </p>
          </div>

          <div className="flex gap-5 max-sm:justify-between w-full">
            <div className="flex flex-col gap-1 text-[.8rem]">
              <p className="font-medium">SSN or TAX ID</p>
              <p className="text-sm">{user.profile.social_number}</p>

              <p className="font-medium">Phone</p>
              <p>{user.profile.phone}</p>
            </div>

            <div className="flex flex-col gap-1 text-[.8rem]">
              <p className="font-medium">State</p>
              <p>{user.profile.state}</p>

              <p className="font-medium">Address</p>
              <p>{user.profile.address}</p>
            </div>
          </div>
        </div>
        {/* update password container */}
        <h1 className="text-xl font-semibold max-sm:self-start px-5">
          Change Password
        </h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (password !== confirm) {
              useModal.setState({ modal: true });
            } else {
              await changepassword({ password })
                .then((data) => useLoader.setState({ loader: false }))
                .catch((e) => {
                  useLoader.setState({ loader: false });
                  useModal.setState({ modal: true });
                });
              window.location.reload();
            }
          }}
          className="w-3/5 bg-dash shadow-sm p-5 rounded-lg grid grid-cols-2 max-sm:grid-cols-2 gap-5 max-sm:gap-2 max-sm:w-11/12"
        >
          <FieldSet
            label={"New password"}
            type={"password"}
            required={true}
            state={password}
            setState={setPasswrod}
          />
          <FieldSet
            label={"Confirm password"}
            type={"password"}
            required={true}
            state={confirm}
            setState={setConfirm}
          />
          <ButtonAuth
            text="Update Password"
            disabled={password == "" && confirm == ""}
          />
        </form>
      </div>
    </div>
  );
}
