import React, { useState } from 'react'
import FieldSet from '../../components/AuthComponents/fieldSet';
import { Link, useNavigate } from 'react-router-dom';
import { useProfileUpdate, userStore } from '../../data/store';
import logo from "../../assets/images/logo-color.svg";

export default function Contact() {
  const[phone,setPhone]=useState('')
  const[address,setaddress]=useState('')
  const[state,setstate]=useState('')
  const[zip,setZip]=useState('')
  let { profile, setProfile } = useProfileUpdate((state) => state);
  let navigate=useNavigate()
  return (
    <div className=" flex flex-col gap-10 items-center justify-center text-sm pb-10 bg-[#f8f9fa] ">
      <div className="fixed left-0 bottom-0 w-full bg-primary h-1/2 max-sm:h-1/2 "></div>
      <div className=" py-10 relative shadow-lg w-full max-sm:px-0 justify-center flex flex-col max-sm:gap-5 text-center">
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[70px] max-sm:h-[50px] pl-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-semibold pb-3 ">Add Contact Info</h1>
          <p>How can we reach you?</p>
        </div>
        <progress
          className="progress progress-success  w-full absolute bottom-0"
          value={60}
          max="100"
        ></progress>
      </div>
      <div className="flex w-full justify-center max-sm:px-5 gap-10 max-sm:mt-5 ">
        <form
          className="z-[1] w-full lg:w-1/3 lg:grid lg:grid-cols-2 grid grid-cols-2 gap-3 lg:p-10 bg-saltpan-50 p-5 rounded-md shadow-lg "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FieldSet
            label={"Phone"}
            type={"tel"}
            name={"phone"}
            state={phone}
            setState={setPhone}
          />
          <FieldSet
            label={"Address Line"}
            type={"text"}
            name={"address"}
            state={address}
            setState={setaddress}
          />
          <FieldSet
            label={"State"}
            type={"text"}
            name={"text"}
            state={state}
            setState={setstate}
          />
          <FieldSet
            label={"Zip Code"}
            type={"text"}
            name={"text"}
            state={zip}
            setState={setZip}
          />
          <div></div>
          <button
            onClick={() => {
              if (state == "" && phone == "" && address == "" && zip == "") {
                return;
              } else {
                navigate("/users/verify/social", {
                  state: {
                    state: state,
                    phone: phone,
                    address: address,
                    zip_code: zip,
                  },
                });
              }
            }}
            className="text-black text-center z-[1] bg-secondary w-full   max-sm:w-1/full p-2 rounded-md "
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

