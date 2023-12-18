import React from 'react'
import FieldSet from "../../components/AuthComponents/fieldSet";
import { Link, useNavigate } from 'react-router-dom';
export default function SocialNumber() {
    let navigate=useNavigate()
  return (
    <div className=" flex flex-col gap-10 items-center justify-center text-sm pb-10 bg-[#f8f9fa] ">
      <div className="fixed left-0 bottom-0 w-full bg-primary h-1/2 max-sm:h-1/2 "></div>
      <div className=" py-10 relative shadow-lg w-full max-sm:px-0 justify-center flex flex-col max-sm:gap-5 text-center">
        <p className="absolute left-5 max-sm:static">Logo</p>
        <div>
          <h1 className="text-2xl font-semibold pb-3 ">
            Add Social Security Number
          </h1>
          <p>Ignore if you don't reside in the US</p>
        </div>
        <progress
          className="progress progress-success  w-full absolute bottom-0"
          value={80}
          max="100"
        ></progress>
      </div>
      <div className="flex w-full justify-center max-sm:px-5 gap-10 max-sm:mt-5 ">
        <form
          action=""
          method="post"
          className="z-[1] w-full lg:w-1/3 lg:grid lg:grid-cols-1 h-56 place-content-center  grid grid-cols-1 gap-3 lg:p-10 bg-saltpan-50 p-5 rounded-md shadow-lg "
        >
          <FieldSet
            label={"Social Security Number (US residents only)"}
            placeholder={"Add social security number"}
            type={"text"}
            name={"text"}
            required={false}
          />
        </form>
      </div>
      <div className="z-[1] px-3 flex w-full max-sm:gap-5 justify-center gap-10">
        <Link
          className="text-black text-center z-[1] bg-dash w-1/5 max-sm:w-1/2 lg:p-5 p-3 rounded-md"
          to={"/users/verify/contact"}
        >
          Back
        </Link>
        <Link
          to={"/users/verify/complete"}
          className="text-black z-[1] bg-secondary w-1/4 max-sm:w-1/2 text-center p-3 lg:p-5 rounded-md "
        >
          Complete Verification
        </Link>
      </div>
    </div>
  );
}

