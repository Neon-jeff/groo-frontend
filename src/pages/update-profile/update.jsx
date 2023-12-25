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

export default function UpdateProfile() {
    let {user}=userStore(state=>state)
    let [password,setPasswrod]=useState("")
    let [confirm,setConfirm]=useState("")
  return (
    <div className="h-screen bg-dash flex overflow-x-hidden">
      <Modal text={"Passwords do not match"}/>
      <Loader/>
      <SideNavMobile />
      <SideNav />
      {/* Main content container */}
      <div className="w-full flex flex-col text-sm gap-5 items-center justify-center">
        {/* Details container */}
        <h1 className="text-xl font-semibold max-sm:self-start px-5">Details</h1>
        <div className="w-3/5 bg-dash shadow-md p-5 rounded-lg grid grid-cols-3 max-sm:grid-cols-2 gap-y-5 max-sm:gap-2 max-sm:w-11/12  ">
          <div>
            <p className="font-medium">first name</p>
            <p>{user.profile.user.first_name}</p>
          </div>
          <div>
            <p className="font-medium">last name</p>
            <p>{user.profile.user.last_name}</p>
          </div>

          <div className="w-full  max-sm:col-span-2">
            <p className="font-medium">email</p>
            <p className="w-1/2 ">{user.profile.user.email}</p>
          </div>
          <div>
            <p className="font-medium">address</p>
            <p>{user.profile.address}</p>
          </div>
          <div>
            <p className="font-medium">phone</p>
            <p>{user.profile.phone}</p>
          </div>
          <div>
            <p className="font-medium">account type</p>
            <p>{user.profile.acct_type}</p>
          </div>
        </div>
        {/* update password container */}
        <h1 className="text-xl font-semibold max-sm:self-start px-5">Change Password</h1>
        <form
        onSubmit={async(e)=>{
          e.preventDefault()
          if(password!==confirm){
              useModal.setState({modal:true})
          }
          else{
            await changepassword({ password })
              .then((data) => useLoader.setState({ loader: false }))
              .catch((e) => {
                useLoader.setState({ loader: false });
                useModal.setState({ modal: true });
              });
              window.location.reload()
          }
        }}
        className="w-3/5 bg-dash shadow-md p-5 rounded-lg grid grid-cols-2 max-sm:grid-cols-2 gap-5 max-sm:gap-2 max-sm:w-11/12">
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
         <ButtonAuth text="Update Password" disabled={(password=="")&&(confirm=="")}/>
        </form>
      </div>
    </div>
  );
}
