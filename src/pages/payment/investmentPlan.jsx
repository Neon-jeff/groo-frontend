import React, { useState } from 'react'
import FieldSet from "../../components/AuthComponents/fieldSet";
import { Link } from "react-router-dom";
import { faL } from '@fortawesome/free-solid-svg-icons';
import SelectField from '../../components/AuthComponents/selectField';

export default function InvestmentPlan() {
    let [oneTime,setonetime]= useState(true)
    let [amount,setAmount]=useState(0)
    let [frequency,setFrequency]=useState("none")
  return (
    <div className=" flex flex-col gap-10 items-center justify-center text-sm pb-10 bg-[#f8f9fa] ">
      <div className="fixed left-0 bottom-0 w-full bg-primary h-1/2 max-sm:h-1/2 "></div>
      <div className=" py-10 relative shadow-lg w-full max-sm:px-0 justify-center flex flex-col max-sm:gap-5 text-center">
        <p className="absolute left-5 max-sm:static">Logo</p>
        <div>
          <h1 className="text-2xl font-semibold pb-3 ">
            Select Investment Plan
          </h1>
          <p>Step 1</p>
        </div>
        <progress
          className="progress progress-success  w-full absolute bottom-0"
          value={50}
          max="100"
        ></progress>
      </div>
      <div className="flex w-full justify-center max-sm:px-5 gap-10 max-sm:mt-5 ">
        <div className="z-[1] w-full lg:w-1/2 flex flex-col items-center   gap-5 lg:p-8 bg-saltpan-50 p-5 rounded-md shadow-lg ">
          {/* toggle plan */}
          <div className="flex bg-gray-200 p-1 shadow-lg rounded-md w-full">
            <p
              className={`w-1/2 text-center cursor-pointer ${
                oneTime
                  ? "bg-primary text-white p-3 rounded-md"
                  : "bg-transparent text-black p-3"
              }`}
              onClick={() => {
                setonetime(true);
                setFrequency("none")
              }}
            >
              One time
            </p>
            <p
              className={`w-1/2 text-center cursor-pointer ${
                !oneTime
                  ? "bg-primary text-white p-3 rounded-md"
                  : "bg-transparent text-black p-3"
              }`}
              onClick={() => {
                setonetime(false);
              }}
            >
              Recurring
            </p>
          </div>
          {/* Price addition */}
          <div className="flex w-full justify-between items-center">
            <div>
              <FieldSet
                label={"How much do u want invest"}
                type={"number"}
                name={"amount"}
                placeholder="$ 0.00"
                state={amount}
                setState={setAmount}
              />
              <p className="text-[.8rem]">minimum amount ($100)</p>
            </div>
            <div>
              <p>price per unit</p>
              <h1 className="text-2xl text-end font-bold">TBD</h1>
            </div>
          </div>
          {
            !oneTime&&(
                <div className='self-start  w-1/2 max-sm:w-full' >
                    <SelectField options={["Monthly","Quaterly"]} state={frequency} setState={setFrequency} name={"frequency"} label={"Frequency"} />
                </div>
            )
          }
          <div className="z-[1] px-1 flex w-full text-[.8rem] mt-5 max-sm:gap-5 justify-end gap-5">
            <Link
              className="text-black text-center z-[1] bg-gray-200 w-1/3 max-sm:w-1/2 lg:p-2 p-3 rounded-md"
              to={"/users/dashboard"}

            >
              Dashboard
            </Link>
            <Link
              to={amount>=100?"/users/payment/checkout":null}
              className="text-black z-[1] bg-secondary w-1/3 max-sm:w-1/2 text-center p-3 lg:p-2 rounded-md "
              state={{amount,frequency,inv_type:oneTime?"onetime":"recurring"}}
              onClick={
                ()=>{
                  if(amount<100){
                    alert("minimum capital is $100")
                  }
                }
              }

            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

