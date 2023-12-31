import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-color.svg";

export default function PaymentCheckout() {
  let location=useLocation()

  return (
    <div className=" flex flex-col gap-10 items-center justify-center text-sm pb-10 bg-[#f8f9fa] ">
      <div className="fixed left-0 bottom-0 w-full bg-primary h-1/2 max-sm:h-1/2 "></div>
      <div className=" py-10 relative shadow-lg w-full max-sm:px-0 justify-center flex flex-col max-sm:gap-5 text-center">
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[70px] max-sm:h-[50px] pl-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-semibold pb-3 ">Order Summary</h1>
          <p>Step 2</p>
        </div>
        <progress
          className="progress progress-success  w-full absolute bottom-0"
          value={70}
          max="100"
        ></progress>
      </div>
      <div className="flex w-full justify-center max-sm:px-5 gap-10 max-sm:mt-5 ">
        <div className="z-[1] w-full lg:w-1/2 flex flex-col items-center   gap-5 lg:p-8 bg-saltpan-50 p-5 rounded-md shadow-lg ">
          {/* Investment Summary*/}

          <h1 className="text-xl font-medium">Order Summary</h1>
          <p>{}</p>
          <div className="w-full flex flex-col gap-2">
            <p className="flex justify-between w-full">
              <span>TBD Units</span>
              <span className="font-semibold">${location.state?.amount}</span>
            </p>
            <p className="flex justify-between w-full">
              <span>Fees</span>
              <span className="font-semibold">5%</span>
            </p>
            <p className="flex justify-between w-full">
              <span>Total</span>
              <span className="font-semibold text-green-600">
                $
                {parseInt(location.state?.amount) +
                  parseInt(0.05 * location.state?.amount)}
              </span>
            </p>
          </div>

          {/* payment plan*/}
          <div className="z-[1] px-1 flex w-full text-[.8rem] mt-5 max-sm:gap-5 justify-end gap-5">
            <Link
              className="text-black text-center z-[1] bg-gray-200 w-1/3 max-sm:w-1/2 lg:p-2 p-3 rounded-md"
              to={"/users/payment/payment-type"}
            >
              Back
            </Link>
            <Link
              to={"/users/payment/make-payment"}
              className="text-black z-[1] bg-secondary w-1/3 max-sm:w-1/2 text-center p-3 lg:p-2 rounded-md"
              state={location.state}
            >
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
