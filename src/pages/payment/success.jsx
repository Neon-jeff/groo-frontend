import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";
import logo from "../../assets/images/logo-color.svg";

export default function PaymentSuccess() {
  let navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-10 items-center justify-center text-sm pb-10 bg-[#f8f9fa] ">
      <div className="fixed left-0 bottom-0 w-full bg-primary h-1/2 max-sm:h-1/2 "></div>
      <div className=" py-10 shadow-lg relative w-full max-sm:px-0 justify-center flex flex-col max-sm:gap-5 text-center">
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[70px] max-sm:h-[50px] pl-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-semibold pb-3 ">Complete!</h1>
          <p>Wait for verification</p>
        </div>
        <progress
          className="progress progress-success  w-full absolute bottom-0"
          value={100}
          max="100"
        ></progress>
      </div>

      <div className="flex w-full justify-center max-sm:px-5 gap-10 max-sm:mt-5 ">
        <div className="z-[1] w-full lg:w-1/3 lg:grid lg:grid-cols-1 h-56 place-items-center place-content-center  grid grid-cols-1 gap-3 lg:p-10 bg-saltpan-50 p-5 rounded-md shadow-lg ">
          <BsFillPatchCheckFill className="" size={60} color="green" />
          <p className="text-2xl font-medium">Investment Complete</p>
          <p className="text-saltpan-600 text-center">
            Please wait for payment verification from our support
          </p>
        </div>
      </div>
      <div className="z-[1] px-3 flex w-full max-sm:gap-5 justify-center gap-10">
        <Link
          to={"/users/dashboard"}
          className="text-black z-[1] bg-secondary text-center w-1/4 max-sm:w-1/2 p-3 lg:p-5 rounded-md "
        >
          back to dashboard
        </Link>
      </div>
    </div>
  );
}
