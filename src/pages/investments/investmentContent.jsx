import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";

export default function InvestmentHistory() {
    let [crypto, setCrypto] = useState(true);
  return (
    <div className="bg-dash h-screen mt-36 px-5 w-full flex gap-5 flex-col items-center">
      <h1 className="text-2xl font-semibold">Investment History</h1>
      {/* investment type-toggle and values */}
      <div className=" w-full lg:w-1/2 flex flex-col items-center   gap-5 lg:p-8 bg-saltpan-50 p-5 rounded-md shadow-lg ">
        <h1 className="text-xl font-medium self-start">Investment Type</h1>
        {/* toggle payment option*/}
        <div className="flex bg-gray-200 p-1 shadow-lg rounded-md w-full">
          <p
            className={`w-1/2 text-center cursor-pointer ${
              crypto
                ? "bg-primary text-white p-3 rounded-md"
                : "bg-transparent text-black p-3"
            }`}
            onClick={() => {
              setCrypto(true);
            }}
          >
            One-time
          </p>
          <p
            className={`w-1/2 text-center cursor-pointer ${
              !crypto
                ? "bg-primary text-white p-3 rounded-md"
                : "bg-transparent text-black p-3"
            }`}
            onClick={() => {
              setCrypto(false);
            }}
          >
            Recurring
          </p>
        </div>
        {/* Payment Cards*/}
        {crypto && (
          <div className="w-full flex flex-col gap-5 text-sm font-medium">
            <div className="flex w-full items-center bg-saltpan-100 py-5 px-3 rounded-md justify-between">
              <p>
                $400
              </p>
              <p className="flex gap-3 items-center">03-12-203</p>
              <p className="bg-red-100 p-2 rounded-md">Pending</p>
            </div>
          </div>
        )}
        {!crypto && (
          <div className="w-full text-sm font-medium flex flex-col gap-5">
            <div className="flex w-full items-center bg-saltpan-100 py-5 px-3 rounded-md justify-between">
              <p>
                $200 <br /> Quaterly
              </p>
              <p className="flex gap-3 items-center">03-12-203</p>
              <p className="bg-red-100 p-2 rounded-md">Pending</p>
            </div>
          </div>
        )}
        <div className=" px-1 flex w-full text-[.8rem] mt-5 max-sm:gap-5 justify-end gap-5">
          <Link
            className="text-black text-center  bg-gray-200 w-1/3 max-sm:w-1/2 lg:p-2 p-3 rounded-md"
            to={"/users/dashboard"}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

