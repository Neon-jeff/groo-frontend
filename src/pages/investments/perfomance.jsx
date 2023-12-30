import React from 'react'
import { userStore } from '../../data/store';
import { BsPersonCircle } from "react-icons/bs";



export default function InvestmentPerformance() {
     let { profile } = userStore((state) => state.user);
  return (
    <div className="w-11/12 max-sm:w-full">
      <h1 className='text-xl pb-3'>Performance</h1>
      <div className="bg-white shadow-md rounded-xl w-full p-5 flex items-center justify-between">
        <div className="flex gap-3 max-sm:items-center">
          <BsPersonCircle
            size={90}
            color="#ffcf83"
            className="bg-primary rounded-full p-[1px] max-sm:p-0 max-sm:bg-transparent"
          />
          <div>
            <p>
              {profile?.user?.first_name} {profile?.user?.last_name}
            </p>
            <p className="text-secondary text-sm font-medium">
              {profile.acct_type}
            </p>
          </div>
        </div>
        <div className='self-end  max-sm:w-1/3'>
          <p className="text-red-300 text-sm text-end max-sm:text-[.6rem] max-sm:text-start">Not Accredited!</p>
          <p className='text-sm text-green-500 max-sm:hidden'>contact support chat to get accredited</p>
        </div>
      </div>
    </div>
  );
}

