import React from 'react'
import { userStore } from '../../data/store';
import { BsPersonCircle } from "react-icons/bs";
import Modal from '../../components/Modal/modal';
import { useModal } from '../../data/store';



export default function InvestmentPerformance() {
     let { profile } = userStore((state) => state.user);
  return (
    <div className="w-11/12 max-sm:w-full">
      {/* <Modal text={"Account Unaccreditated"}/> */}
      <h1 className="text-lg pb-2 font-medium">Performance</h1>
      <div className="bg-white shadow-sm rounded-xl w-full p-5 flex max-sm:flex-col max-sm:items-start max-sm:gap-4 items-center justify-between">
        <div className="flex gap-3 max-sm:items-center relative">
          <BsPersonCircle
            size={90}
            color="#ffcf83"
            className=" rounded-full p-[1px] max-sm:p-0 max-sm:bg-transparent"
          />
          <div>
            <p>
              {profile?.user?.first_name} {profile?.user?.last_name}
            </p>
            <p className="text-secondary text-sm font-medium">
              {profile.acct_type}
            </p>
            <p className="text-red-400 text-[.7rem] pt-3 font-semibold">
              not accredited
            </p>
          </div>
        </div>
        <div className="self-start flex flex-col gap-3 pr-10  max-sm:gap-2 max-sm:w-full">
          <p className=" text-sm text-end  max-sm:text-start">
            Distribution Balance
          </p>
          <p className="text-xl font-semibold">${profile.balance}</p>
          <button
            className="bg-primary opacity-80 text-white p-2 rounded-md w-full"
            onClick={() => {}}
          >
            cash out
          </button>
          <p className="text-[.8rem] text-green-500">
            Unavailable, accredit your account
          </p>
        </div>
      </div>
    </div>
  );
}

