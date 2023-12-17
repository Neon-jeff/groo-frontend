import React from 'react'
import ProfileCard from './profileCard'
import ButtonDBoard from '../buttons/buttonDashboard';

export default function Aside() {
  return (
    <div className="border-l-2 max-sm:hidden border-gray-100  p-10  w-3/12 flex flex-col gap-10 items-center">
      <ProfileCard />
      <div className="w-full flex flex-col gap-5">
        <h1 className="text-xl font-semibold">Your Account Status</h1>
        <progress
          className="progress progress-success w-56"
          value={20}
          max="100"
        ></progress>
        <div className="bg-saltpan-100  rounded-lg p-5 text-sm flex flex-col gap-2">
          <p className="text-lg font-semibold ">Verify your Account</p>
          <p>Steps</p>
          <p className="flex flex-col gap-1">
            <span>1. add contact info</span>
            <span>2. add address</span>
            <span>3. add social security number</span>
          </p>
          <button className="w-1/2 bg-saltpan-300 p-2 rounded-md">Start</button>
        </div>
      </div>
      <ButtonDBoard width="w-full max-sm:w-1/2" />
    </div>
  );
}

