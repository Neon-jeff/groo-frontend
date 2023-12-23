import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FieldSet from "../../components/AuthComponents/fieldSet";
import ButtonAuth from "../../components/buttons/buttonLogin";
import logo from "../../assets/icons/logoSmall.png";
import register from "../../data/auth";

export default function SignUp() {
  let [first_name, setFname] = useState("");
  let [last_name, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");
  return (
    <div className=" p-10 h-full">
      {/* form-container */}
      <div className="mx-auto w-1/3 flex flex-col items-center text-sm max-sm:w-full ">
        <img src={logo} alt="" className="" />
        <h2 className="text-4xl font-semibold text-primary pb-3">
          Create Account
        </h2>
        <p>
          Already have an account?{" "}
          <Link to="/users/login" className="text-lime-600">
            Sign In
          </Link>
        </p>
        <form action="" method="post" className="w-full pt-5" onSubmit={async(e)=>{
          e.preventDefault()
          let data={first_name,last_name,email,password}
          let res=await register(data)
          console.log(res);
        }}>
          {/* Names container */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex gap-10  max-sm:gap-5">
              <FieldSet label={"First Name"} type={"text"} name={"fname"} state={first_name} setState={setFname} />
              <FieldSet label={"Last Name"} type={"text"} name={"lname"} state={last_name} setState={setLname} />
            </div>
            <FieldSet label={"Email"} type={"email"} name={"email"} state={email} setState={setEmail} />
            <FieldSet label={"Password"} type={"password"} name={"password"} state={password} setState={setPassword} />
            <FieldSet
              label={"Confirm Password"}
              type={"password"}
              name={"password"}
              state={confirm}
              setState={setConfirm}
            />
            {/* <fieldset className="flex items-center gap-3">
              <input type="checkbox" name="remember" id="" />
              <label htmlFor="">Remember me</label>
            </fieldset> */}
            <ButtonAuth text="Create Account" />
          </div>
        </form>
      </div>
    </div>
  );
}
