import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
import getUserInvestment from '../../data/getInvestments';
import { MdError } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import downloadAgreement from '../../data/download';
import Modal from '../../components/Modal/modal'

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
  return (
    <div className=" h-full  w-11/12 max-sm:w-full flex gap-3 flex-col items-center">
      <Modal text={"Download unavailable, try again in a few minutes"}/>
      <h1 className="text-lg text-start font-medium w-full">Investment History</h1>
      {/* investment type-toggle and values */}
      <div className=" w-full lg:w-full flex flex-col items-center   gap-5 lg:p-8 bg-white p-5 rounded-xl shadow-sm ">
        {/* <h1 className="text-xl font-medium self-start">Investment Type</h1> */}
        {/* toggle payment option*/}
        <div className="flex bg-saltpan-100 p-1  rounded-md w-full">
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
          className={`grid grid-cols-1 gap-10 text-sm place-items-center w-full`}
        >
          {arr.length > 0 &&
            arr.map((item) => (
              <div
                className={`flex gap-2 w-full  items-center  bg-gray-50  p-5 rounded-xl justify-between`}
                key={item.id}
              >
                <p className="font-medium text-lg flex flex-col  text-green-600">
                  ${item.amount}{" "}
                  <span className="text-center text-black font-light  text-[.8rem]">
                    {item.created}
                  </span>
                </p>

                <p className="flex items-center gap-1 cursor-pointer text-blue-500" onClick={async()=>{
                  await downloadAgreement(item.id)
                }}>
                  <FaFileDownload size={15} />
                  agreement
                </p>

                {!item.confirmed ? (
                  <MdError color="orange" size={20} />
                ) : (
                  <IoIosCheckmarkCircle color="green" size={20} />
                )}
              </div>
            ))}
        </div>

        {/* <div className=" px-1 flex w-full text-[.8rem] mt-5 max-sm:gap-5 justify-end gap-5">
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
        </div> */}
      </div>
    </div>
  );
}

