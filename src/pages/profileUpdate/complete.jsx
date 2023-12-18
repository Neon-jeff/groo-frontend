import React from "react";
import FieldSet from "../../components/AuthComponents/fieldSet";
import { useNavigate } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function Complete() {
    let navigate=useNavigate()
  return (
    <div className=" flex flex-col gap-10 items-center justify-center text-sm pb-10 bg-[#f8f9fa] ">
      <div className="fixed left-0 bottom-0 w-full bg-primary h-1/2 max-sm:h-1/2 "></div>
      <div className=" p-10 shadow-lg w-full max-sm:px-5 justify-center flex flex-col max-sm:gap-5 text-center">
        <p className="absolute left-5 max-sm:static">Logo</p>
        <div>
          <h1 className="text-2xl font-semibold pb-3 ">
            All Done!
          </h1>
          <p>Your account set up is now complete</p>
        </div>
      </div>
      <div className="flex w-full justify-center max-sm:px-5 gap-10 max-sm:mt-5 ">
        <div
          className="z-[1] w-full lg:w-1/3 lg:grid lg:grid-cols-1 h-56 place-items-center place-content-center  grid grid-cols-1 gap-3 lg:p-10 bg-saltpan-50 p-5 rounded-md shadow-lg "
        >
                <BsFillPatchCheckFill className="" size={60} color="green"/>
                <p className="text-2xl font-medium">Verification Complete</p>
                <p className="text-saltpan-600">Click below to make your first investment</p>
        </div>
      </div>
      <div className="z-[1] px-3 flex w-full max-sm:gap-5 justify-center gap-10">

        <button className="text-black z-[1] bg-secondary w-1/4 max-sm:w-1/2 p-3 lg:p-5 rounded-md ">
          Make Investment
        </button>
      </div>
    </div>
  );
}
