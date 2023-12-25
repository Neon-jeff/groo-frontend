import React, { useState } from 'react'
import ButtonAuth from '../../components/buttons/buttonLogin'
import FeatureCard from '../../components/homeComponents/featureCard'
import { Link, useNavigate } from 'react-router-dom';
import { useAccountType } from '../../data/store';

export default function AccountType() {
  let {isIndividual,setIndividual,setCustodial}=useAccountType(state=>state)
  let navigate=useNavigate()
  let [proceed,setProceed]= useState(false)
  return (
    <div className=" flex flex-col gap-10 items-center justify-center text-sm pb-10 bg-[#f8f9fa] ">
      <div className="fixed left-0 bottom-0 w-full bg-primary h-1/2 max-sm:h-1/2 "></div>
      <div className=" py-10 relative shadow-lg w-full max-sm:px-0 justify-center flex flex-col max-sm:gap-5 text-center">
        <p className="absolute left-5 max-sm:static">Logo</p>
        <div>
          <h1 className="text-2xl font-semibold pb-3 max-sm:pb-0">
            Select account type
          </h1>
          <p>Tell us how you intend to use Stems</p>
        </div>
        <progress
          className="progress progress-success  w-full absolute bottom-0"
          value={40}
          max="100"
        ></progress>
      </div>
      <div className="flex w-full justify-center max-sm:px-5 gap-10 max-sm:mt-5 ">
        <div
          className={`bg-dash h-56 w-1/4 max-sm:w-1/2 flex flex-col items-center justify-center rounded-md  border-black z-[1] p-10 max-sm:p-5 ${
            isIndividual
              ? " border-[3px] border-secondary"
              : "border-[1px] border-black"
          } text-center`}
          onClick={setIndividual}
        >
          <p className="font-semibold">Individual</p>
          <p>Personal account for your investments</p>
        </div>
        <div
          className={`bg-dash h-56 w-1/4 max-sm:w-1/2 flex flex-col items-center justify-center rounded-md  z-[1] p-10 max-sm:p-5 text-center ${
            !isIndividual
              ? "border-[3px] border-secondary"
              : "border-[1px] border-black"
          }`}
          onClick={() => {
            setCustodial();
          }}
        >
          <p className="font-semibold">Custodial</p>
          <p>Account on behalf of another person</p>
        </div>
      </div>
      <p className="flex w-1/2 max-sm:w-full max-sm:px-5 text-secondary items-center gap-5 z-[1] ">
        <input
          type="checkbox"
          value={proceed}
          onChange={() => {
            setProceed(!proceed);
          }}
        />
        <p>
          By checking this box you agree that your informations are safe and not shared to any third party
        </p>
      </p>
      <button
        disabled={!proceed}
        className={`text-center text-black z-[1] ${
          proceed ? "bg-secondary" : "bg-yellow-200"
        } w-1/4 max-sm:w-1/2 p-5 rounded-md `}
        onClick={() => {
          navigate("/users/verify/contact");
        }}
      >
        Proceed
      </button>
    </div>
  );
}

