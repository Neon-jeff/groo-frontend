import React from 'react'
import ProfileCard from './profileCard'
import ButtonDBoard from '../buttons/buttonDashboard';
import { Link } from 'react-router-dom';
import { userStore } from '../../data/store';
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function Aside() {
  const user=userStore(state=>state.user)
  return (
    <div className="border-l-2 max-sm:hidden border-gray-100  p-10  w-3/12 flex flex-col gap-10 items-center">
      <ProfileCard />
      <div className="w-full flex flex-col gap-5">
        <h1 className="text-xl font-semibold">Your Account Status</h1>
        <progress
          className="progress progress-success w-56"
          value={user.profile?.is_verified ? 100 : 20}
          max="100"
        ></progress>
        {user?.profile?.is_verified ? (
          <div className="bg-green-100  rounded-lg p-3 text-sm flex justify-center items-center gap-3">
            <BsFillPatchCheckFill color='green' size={30}/>
            <p className="text-md font-medium text-saltpan-500 ">Set up complete!</p>

            {/* <Link
              to={"/users/verify/account-type"}
              className="text-center w-1/2 bg-saltpan-300 p-2 rounded-md"
            >
              Start
            </Link> */}
          </div>
        ) : (
          <div className="bg-saltpan-100  rounded-lg p-5 text-sm flex flex-col gap-2">
            <p className="text-lg font-semibold ">Verify your Account</p>
            <p>Steps</p>
            <p className="flex flex-col gap-1">
              <span>1. add contact info</span>
              <span>2. add address</span>
              <span>3. add social security number</span>
            </p>
            <Link
              to={"/users/verify/account-type"}
              className="text-center w-1/2 bg-saltpan-300 p-2 rounded-md"
            >
              Start
            </Link>
          </div>
        )}
      </div>
      <ButtonDBoard width="w-full max-sm:w-1/2" />
    </div>
  );
}

