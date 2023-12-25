import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FieldSet from '../../components/AuthComponents/fieldSet'
import ButtonAuth from '../../components/buttons/buttonLogin';
import logo from "../../assets/images/logo-color.svg";
import login from '../../data/login'
import { useAuth } from '../../data/store';
import Modal from '../../components/Modal/modal';
import Loader from '../../components/Modal/modalLoader';
export default function Login() {
  let setAuth=useAuth((state)=>state.setAuth)
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  return (
    <div className=" p-10 h-screen">
      <Modal
        text={"Invalid login details, check credentials"}
        showclose={true}
      />
      <Loader />
      {/* form-container */}
      <div className="mx-auto w-1/3 flex flex-col items-center text-sm max-sm:w-full ">
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[70px] max-sm:h-[50px]" />
        </Link>
        <h2 className="text-4xl font-semibold text-primary pb-3">
          Welcome Back!
        </h2>
        <p>
          Don't have an account?{" "}
          <Link to={"/users/signup"} className="text-lime-600">
            Sign Up
          </Link>
        </p>
        <form
          action=""
          method="post"
          className="w-full pt-5"
          onSubmit={async (e) => {
            e.preventDefault();
            let data = { email: email, password: password };
            await login(data);
          }}
        >
          {/* Names container */}
          <div className="w-full flex flex-col gap-3">
            <FieldSet
              label={"Email"}
              type={"email"}
              name={"email"}
              state={email}
              setState={setEmail}
            />
            <FieldSet
              label={"Password"}
              type={"password"}
              name={"password"}
              state={password}
              setState={setPassword}
            />
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
