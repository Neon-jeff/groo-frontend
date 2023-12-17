import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import FieldSet from "../../components/AuthComponents/fieldSet";
import ButtonAuth from "../../components/buttons/buttonLogin";
import logo from "../../assets/icons/logoSmall.png";
import { AuthContext } from '../../data/aurhContext';

export default function SignUp() {
  let {isAuth}=useContext(AuthContext)
  console.log(isAuth);
  return (
    <div className=" p-10 h-full">
      {/* form-container */}
      <div className="mx-auto w-1/3 flex flex-col items-center text-sm max-sm:w-full ">
        <img src={logo} alt="" className="" />
        <h2 className="text-4xl font-semibold text-primary pb-3">
          Create Account
        </h2>
        <p>
          Already have an account? <Link to="/login" className='text-lime-600'>Sign In</Link>
        </p>
        <form action="" method="post" className="w-full pt-5">
          {/* Names container */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex gap-10  max-sm:gap-5">
              <FieldSet label={"First Name"} type={"text"} name={"fname"} />
              <FieldSet label={"Last Name"} type={"text"} name={"lname"} />
            </div>
            <FieldSet label={"Email"} type={"email"} name={"email"} />
            <FieldSet label={"Password"} type={"password"} name={"password"} />
            <FieldSet label={"Confirm Password"} type={"password"} name={"password"} />
            <fieldset className="flex items-center gap-3">
              <input type="checkbox" name="remember" id="" />
              <label htmlFor="">Remember me</label>
            </fieldset>
            <ButtonAuth text="Create Account" />
          </div>
        </form>
      </div>
    </div>
  );
}

