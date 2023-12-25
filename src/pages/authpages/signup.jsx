import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FieldSet from "../../components/AuthComponents/fieldSet";
import ButtonAuth from "../../components/buttons/buttonLogin";
import logo from "../../assets/images/logo-color.svg";
import register from "../../data/auth";
import Modal from "../../components/Modal/modal";
import Loader from "../../components/Modal/modalLoader";
import { useModal } from "../../data/store";

export default function SignUp() {
  let [first_name, setFname] = useState("");
  let [last_name, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");

  let{showModal}=useModal(state=>state)
  return (
    <div className=" p-10 h-full max-sm:h-screen">
      <Modal
        text={
          password == confirm
            ? "Account with email already exists"
            : "Passwords do not match"
        }
      />
      <Loader />
      {/* form-container */}
      <div className="mx-auto w-1/3 flex flex-col items-center text-sm max-sm:w-full ">
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[70px] max-sm:h-[50px]" />
        </Link>
        <h2 className="text-4xl font-semibold text-primary pb-3">
          Create Account
        </h2>
        <p>
          Already have an account?{" "}
          <Link to="/users/login" className="text-lime-600">
            Sign In
          </Link>
        </p>
        <form
          action=""
          method="post"
          className="w-full pt-5"
          onSubmit={async (e) => {
            e.preventDefault();
            let data = { first_name, last_name, email, password };
            if (password != confirm) {
              showModal();
            } else {
              await register(data);
            }
          }}
        >
          {/* Names container */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex gap-10  max-sm:gap-5">
              <FieldSet
                label={"First Name"}
                type={"text"}
                name={"fname"}
                state={first_name}
                setState={setFname}
              />
              <FieldSet
                label={"Last Name"}
                type={"text"}
                name={"lname"}
                state={last_name}
                setState={setLname}
              />
            </div>
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
