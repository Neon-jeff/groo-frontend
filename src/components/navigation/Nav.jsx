import React, { useState } from 'react'
import Button from '../buttons/button'
import ButtonOutiline from '../buttons/buttonOutline';

export default function Nav() {
    let [mobile,setMobile] = useState(false)
  return (
    <>
      <nav className="flex fixed items-center border-b-2 py-3 justify-between px-10 top-0 z-[2] bg-white w-full max-sm:hidden">
        <p className="text-lg font-semibold text-green-500">Groo</p>
        <ul className="flex gap-10 text-sm">
          <a
            href="#"
            className="hover:text-green-600 hover:font-medium hover:scale-110 transition duration-75 ease-in"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-green-600 hover:font-medium hover:scale-110 transition duration-75 ease-in"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-green-600 hover:font-medium hover:scale-110 transition duration-75 ease-in"
          >
            Legals
          </a>
          <a
            href="#"
            className="hover:text-green-600 hover:font-medium hover:scale-110 transition duration-75 ease-in"
          >
            Company
          </a>
        </ul>
        <Button text={"Invest Now"} action={() => {}} width={"w-1/12"} />
      </nav>
      <nav className="hidden max-sm:flex p-5 justify-between flex-col gap-16 fixed top-0 right-0 w-full z-[3]  bg-white items-center">
        <div className="flex justify-between items-center w-full ">
          <p className="text-lg font-semibold text-green-500">Groo</p>
          <label className="btn btn-circle swap swap-rotate bg-transparent border-0 shadow-none hover:bg-transparent">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <ul
          className={
            mobile == true
              ? "flex gap-10 text-2xl h-screen transition w-full duration-75 ease-in flex-col items-center"
              : "hidden"
          }
        >
          <a
            href="#"
            className="hover:text-green-600 hover:font-medium hover:scale-110 transition duration-75 ease-in"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-green-600 hover:font-medium hover:scale-110 transition duration-75 ease-in"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-green-600 hover:font-medium hover:scale-110 transition duration-75 ease-in"
          >
            Legals
          </a>
          <a
            href="#"
            className="hover:text-green-600 hover:font-medium hover:scale-110 transition duration-75 ease-in"
          >
            Company
          </a>
          <ButtonOutiline text={"Invest Now"} action={() => {}} width={"w-4/5"} />
        </ul>
      </nav>
    </>
  );
}

