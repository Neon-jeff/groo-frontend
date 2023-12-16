import React from 'react'
import Calculator from './Calculator';
import ButtonDBoard from '../buttons/buttonDashboard';
import { GrGrow } from "react-icons/gr";

export default function MainContent() {
  return (
    <div className="bg-sub w-7/12 px-10 py-6 max-sm:px-5 max-sm:w-full ">
      {/* Investment Status */}
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold ">Recent Investment</h1>
        <div className="bg-white p-5 rounded-md flex justify-between text-sm max-sm:grid max-sm:grid-cols-2 max-sm:gap-5 ">
          <p className="flex flex-col gap-1  justify-center bg-lime-50 p-5  rounded-md ">
            Initial Investment{" "}
            <span className="text-md font-semibold text-lime-600 ">$500</span>
          </p>
          <p className="flex flex-col gap-1 p-5 justify-center rounded-md bg-purple-50">
            Monthly Payment{" "}
            <span className="text-md font-semibold text-purple-600">$3000</span>
          </p>
          <p className="flex flex-col gap-1 justify-center p-5 rounded-md bg-yellow-50">
            Duration{" "}
            <span className="text-md font-semibold text-yellow-600">19months</span>
          </p>
          <p className="flex flex-col gap-1 p-5 justify-center rounded-md bg-green-50">
            Expected Income{" "}
            <span className="text-md font-semibold text-green-600">$16000</span>
          </p>
        </div>
        <button className="bg-saltpan-100 w-3/12 max-sm:w-1/2 max-sm:self-center self-end p-3 text-sm rounded-md">
          See all investments
        </button>
      </div>

      {/* Investment Calculator */}
      <div className="mt-3">
        <h1 className="text-xl font-semibold pb-2 flex items-center gap-2 ">
          <GrGrow size={30} color="#0d3428" />
          Growth Machine
        </h1>
        <Calculator />
        <ButtonDBoard width="w-1/4 max-sm:w-1/2" />
      </div>
    </div>
  );
}

