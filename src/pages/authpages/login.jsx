import React from 'react'
import { Link } from 'react-router-dom'
import FieldSet from '../../components/AuthComponents/fieldSet'
import ButtonAuth from '../../components/buttons/buttonLogin';
import logo from "../../assets/icons/logoSmall.png";

export default function Login() {
  return (
    <div className=" p-10 h-screen">

      {/* form-container */}
      <div className="mx-auto w-1/3 flex flex-col items-center text-sm max-sm:w-full ">
        <img src={logo} alt="" className='' />
        <h2 className="text-4xl font-semibold text-primary pb-3">
          Welcome Back!
        </h2>
        <p>
          Don't have an account? <Link>Sign Up</Link>
        </p>
        <form action="" method="post" className="w-full pt-5">
          {/* Names container */}
          <div className="w-full flex flex-col gap-3">
            <FieldSet label={"Email"} type={"email"} name={"email"} />
            <FieldSet label={"Password"} type={"password"} name={"password"} />
            <fieldset className="flex items-center gap-3">
              <input type="checkbox" name="remember" id="" />
              <label htmlFor="">Remember me</label>
            </fieldset>
            <ButtonAuth />
          </div>
          <p className="pt-5 text-lime-600">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
}
