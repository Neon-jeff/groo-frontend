import React from 'react'
import Calculator from './Calculator';
import ButtonDBoard from '../buttons/buttonDashboard';
import { GrGrow } from "react-icons/gr";
import { AiFillAppstore } from "react-icons/ai";
import capital from '../../assets/icons/money.png'
import time from '../../assets/icons/clock (1).png'
import recurring from '../../assets/icons/subscription-model.png'
import profit from '../../assets/icons/financial-profit.png'

export default function MainContent({showMobile,mobile}) {
  return (
    <div className=" w-7/12 px-10 py-6 max-sm:px-5 max-sm:w-full mt-20 ">
      {/* Investment Status */}
      <div className="flex flex-col gap-5">
        <AiFillAppstore
          className="self-end sm:hidden"
          size={40}
          color=""
          onClick={() => {
            showMobile(!mobile);
          }}
        />
        <h1 className="text-xl font-semibold">Recent Investment</h1>
        <div className=" rounded-md flex justify-between text-sm gap-5 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5 ">
          <p className="flex flex-col gap-1 shadow-md lg:w-1/4  justify-center bg-lime-100 p-5  rounded-lg ">
            <img src={capital} className="w-[40px]" alt="" />
            Initial Investment{" "}
            <span className="text-md font-semibold text-lime-600 ">$500</span>
          </p>
          <p className="flex flex-col gap-1  p-5 justify-center lg:w-1/4  rounded-lg shadow-md bg-sky-100">
            <img src={recurring} className="w-[40px]" alt="" />
            Monthly Payment{" "}
            <span className="text-md font-semibold text-sky-600 ">$3000</span>
          </p>
          <p className="flex flex-col gap-1 justify-center p-5 lg:w-1/4 rounded-lg shadow-md bg-yellow-100">
            <img src={time} className="w-[40px]" alt="" />
            Duration{" "}
            <span className="text-md font-semibold text-yellow-600">
              19months
            </span>
          </p>
          <p className="flex flex-col gap-1 p-5 justify-center lg:w-1/4 rounded-lg shadow-md bg-saltpan-100">
            <img src={profit} className="w-[40px]" alt="" />
            Expected Income{" "}
            <span className="text-md font-semibold text-green-600">$16000</span>
          </p>
        </div>
        <button className=" w-3/12 max-sm:w-1/2  self-end  text-sm rounded-md text-end">
          See all investments
        </button>
      </div>

      {/* Investment Calculator */}
      <div className="mt-10">
        <h1 className="text-xl font-semibold pb-5 flex items-center gap-2  ">
          <GrGrow size={30} color="#0d3428" />
          Growth Machine
        </h1>
        <Calculator />
      </div>
    </div>
  );
}

