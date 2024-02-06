import React, { useEffect } from 'react'
import GetWithdrawals from "../../data/getWithdrawals";
import { useWithdrawal } from "../../data/store";
import { MdError } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function WithdrawalHistory() {
  useEffect(()=>{
    GetWithdrawals()
  },[])
    let { data } = useWithdrawal((state) => state.data);
  return (
    <div className="w-11/12 max-sm:w-full">
      <h1 className="mb-3 font-medium text-lg">Withdrawal History</h1>
      <div className="bg-white rounded-md p-5 flex flex-col gap-5 ">
        {data?.map((item) => (
          <div className="bg-gray-50 p-5 rounded-md flex justify-between items-center">
            <p className="flex flex-col text-lg text-green-600 font-medium">
              ${item.amount}
              <span className="text-sm text-black font-normal">
                {item.created}
              </span>
            </p>
            {item.confirmed ? (
              <IoIosCheckmarkCircle color="orange" size={20} />
            ) : (
              <MdError color="orange" size={20} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

