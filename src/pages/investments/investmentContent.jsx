import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
import getUserInvestment from '../../data/getInvestments';
import { MdError } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function InvestmentHistory() {
  let [investments,setInvest]=useState([])
  let [crypto, setCrypto] = useState(true);
  let [arr,setArr]=useState([])
    useEffect(()=>{
      async function get(){
        await getUserInvestment().then(data=>{
        setInvest(data.data.investments);
        setArr(data.data.investments.filter(item=>item.inv_type=="onetime"))
        })
      }
      get()
    },[])
  console.log(arr);
  return (
    <div className="bg-dash h-screen mt-36 px-5 w-full flex gap-5 flex-col items-center">
      <h1 className="text-2xl font-semibold">Investment History</h1>
      {/* investment type-toggle and values */}
      <div className=" w-full lg:w-1/2 flex flex-col items-center   gap-5 lg:p-8 bg-saltpan-50 p-5 rounded-md shadow-lg ">
        {/* <h1 className="text-xl font-medium self-start">Investment Type</h1> */}
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
              setArr(investments.filter((item) => item.inv_type == "onetime"));
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
              setArr(
                investments.filter((item) => item.inv_type == "recurring")
              );
            }}
          >
            Recurring
          </p>
        </div>
        {/* Payment Cards*/}
        <div
          className={`grid ${arr.length == 1 ? "grid-cols-1" : ""} ${
            arr.length == 2 ? "grid-cols-2" : ""
          } ${
            arr.length == 3 ? "grid-cols-3 max-sm:grid-cols-2" : ""
          } gap-10 text-sm place-items-center w-full`}
        >
          {arr.length > 0 &&
            arr.map((item) => (
              <div
                className={`flex flex-col gap-2 ${
                  arr.length == 1 ? "w-1/2" : "w-full"
                } border-[1px] border-black items-center bg-saltpan-100  p-8 rounded-md justify-between`}
              >
                <p className="font-semibold text-lg text-green-600">${item.amount}</p>
                <p className="text-center text-[.7rem]">{item.created}</p>

                  {!item.confirmed ? (<MdError color='orange' size={20}/> ): (<IoIosCheckmarkCircle color='green' size={20}/>)}

              </div>
            ))}
        </div>

        <div className=" px-1 flex w-full text-[.8rem] mt-5 max-sm:gap-5 justify-end gap-5">
          <Link
            className="text-black text-center  bg-gray-200 w-1/3 max-sm:w-1/2 lg:p-2 p-3 rounded-md"
            to={"/users/dashboard"}
          >
            Dashboard
          </Link>
          <Link
            className="text-black text-center  bg-secondary w-1/3 max-sm:w-1/2 lg:p-2 p-3 rounded-md"
            to={"/users/payment/payment-type"}
          >
            New Investment
          </Link>
        </div>
      </div>
    </div>
  );
}

