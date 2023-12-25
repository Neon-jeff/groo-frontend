import React from 'react'
import Calculator from './Calculator';
import ButtonDBoard from '../buttons/buttonDashboard';
import { GrGrow } from "react-icons/gr";
import { AiFillAppstore } from "react-icons/ai";
import capital from '../../assets/icons/money.png'
import time from '../../assets/icons/clock (1).png'
import recurring from '../../assets/icons/subscription-model.png'
import profit from '../../assets/icons/financial-profit.png'
import { userStore } from '../../data/store';

export default function MainContent({showMobile,mobile}) {
  let {profile}=userStore(state=>state.user)
  if(!profile){
    return <div className='bg-white text-black text-3xl h-screen w-screen'>
      <p>loading</p>
    </div>
  }
  return (
    <div className=" w-7/12 px-10 py-6 max-sm:px-5 max-sm:w-full mt-28 ">
      {/* Investment Status */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-medium">
            Welcome,{profile.user.first_name}{" "}
          </p>
          <AiFillAppstore
            className="self-end sm:hidden"
            size={40}
            color=""
            onClick={() => {
              showMobile(!mobile);
            }}
          />
        </div>
        <h1 className="text-xl max-sm:text-lg font-semibold">
          Our Funds Status
        </h1>
        <div className=" p-10 max-sm:p-5 bg-white rounded-3xl max-sm:hidden border-[1px] border-gray-300 flex justify-between max-sm:text-[.9rem] text-sm gap-5  ">
          <div className="flex items-center gap-5">
            <img
              src={capital}
              alt=""
              className="bg-lime-50 rounded-md h-[50px] p-2"
            />
            <div>
              <p>
                Distributions Last <br /> Quater
              </p>
              <p className="text-2xl font-medium">$320,018</p>
              <p className="text-[.7rem] text-lime-600">payout of $1.80/unit</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <img
              src={profit}
              alt=""
              className="bg-lime-50 rounded-md h-[50px] p-2"
            />
            <div>
              <p>
                Annualized <br /> Returns
              </p>
              <p className="text-2xl font-medium">%16</p>
              <p className="text-[.7rem] text-lime-600">
                istorical performance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <img
              src={recurring}
              alt=""
              className="bg-lime-50 rounded-md h-[50px] p-2"
            />
            <div>
              <p>
                Resident
                <br /> Impact
              </p>
              <p className="text-2xl font-medium">$305,104</p>
              <p className="text-[.7rem] text-lime-600">saved and invested</p>
            </div>
          </div>
        </div>
        {/* mobile carousel component */}
        <div className="carousel carousel-center md:hidden bg-white p-10 rounded-2xl border-2">
          <div className="flex items-center gap-5 carousel-item">
            <img
              src={capital}
              alt=""
              className="bg-lime-50 rounded-md h-[50px] p-2"
            />
            <div>
              <p>
                Distributions Last <br /> Quater
              </p>
              <p className="text-2xl font-medium">$320,018</p>
              <p className="text-[.7rem] text-lime-600">payout of $1.80/unit</p>
            </div>
          </div>

          <div className="flex items-center gap-5 carousel-item">
            <img
              src={profit}
              alt=""
              className="bg-lime-50 rounded-md h-[50px] p-2"
            />
            <div>
              <p>
                Annualized <br /> Returns
              </p>
              <p className="text-2xl font-medium">%16</p>
              <p className="text-[.7rem] text-lime-600">
                istorical performance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 carousel-item">
            <img
              src={recurring}
              alt=""
              className="bg-lime-50 rounded-md h-[50px] p-2"
            />
            <div>
              <p>
                Resident
                <br /> Impact
              </p>
              <p className="text-2xl font-medium">$305,104</p>
              <p className="text-[.7rem] text-lime-600">saved and invested</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Calculator */}
      <div className="mt-10">
        <h1 className="text-xl max-sm:text-lg font-semibold pb-5 flex items-center gap-2  ">
          <GrGrow size={30} color="#0d3428" />
          Stems Growth Machine
        </h1>
        <Calculator />
      </div>
    </div>
  );
}

