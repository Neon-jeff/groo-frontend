import React, { useState } from 'react'
import FieldSet from "../../components/AuthComponents/fieldSet";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useProfileUpdate, userStore } from "../../data/store";
import { useAccountType } from '../../data/store';
import updateProfile from '../../data/profile'

export default function SocialNumber() {
    let {profile,setProfile}=useProfileUpdate(state=>state)
    let acc_type=useAccountType(state=>state.isIndividual)
    let location=useLocation()
    let [social,setSocial]=useState('')
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
          onSubmit={(e)=>{e.preventDefault()}}
        >
          <FieldSet
            label={"Social Security Number (US residents only)"}
            placeholder={"Add social security number"}
            type={"text"}
            name={"text"}
            required={false}
            state={social}
            setState={setSocial}
          />
          <div className="z-[1]  flex justify-self-end w-full max-sm:gap-5 justify-end gap-5 text-[.8rem] max-sm:text-[.65rem]">
            <Link
              className="text-black text-center z-[1] bg-gray-200 w-1/2 max-sm:w-1/2 lg:p-2 p-3 rounded-md"
              to={"/users/verify/contact"}
            >
              Back
            </Link>
            <button
              onClick={async()=>{
                setProfile({
                  social_number:social,
                  acct_type:acc_type?"individual":"custodial",
                  is_verified:true
                })
                let data = {
                  ...location.state,
                  ...{
                    social_number: social!=''?social:"not-available",
                    acct_type: acc_type ? "individual" : "custodial",
                    is_verified: true,
                  },
                };
                console.log(data);
                await updateProfile(data)
                navigate("/users/verify/complete")


              }}
              className="text-black z-[1] bg-secondary  max-sm:w-1/2 text-center p-3 lg:p-2 rounded-md "
            >
              Complete Verification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

