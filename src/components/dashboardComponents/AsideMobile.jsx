import React from "react";
import ProfileCard from "./profileCard";
import ButtonDBoard from "../buttons/buttonDashboard";
import { IoCloseOutline } from "react-icons/io5";
import { easeIn, easeOut, motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../../data/store";
import { BsFillPatchCheckFill } from "react-icons/bs";
import capital from "../../assets/icons/money.png";
import coin from "../../assets/icons/coin.png";
import house from "../../assets/icons/investment.png";
import handshake from "../../assets/icons/handshake.png";
import roi from "../../assets/icons/return-of-investment.png";

export default function AsideMobile({ show, setShow }) {
    const user = userStore((state) => state.user);
  let navigate=useNavigate()
  return (
    <>
      {show && (
        <motion.div
          initial={{
            y: 1000,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            ease: easeOut,
            duration: 0.3,
          }}
          className="px-10 pt-20 fixed top-20 bottom-0 md:hidden bg-sub rounded-t-3xl h-full w-full flex flex-col gap-5 items-center"
        >
          <IoCloseOutline
            size={30}
            className="absolute top-5 right-5"
            onClick={() => {
              setShow(!show);
            }}
          />
          <ProfileCard />
          <div className="w-full flex flex-col gap-5 items-center">
            <h1 className="text-xl font-semibold">Your Account Status</h1>
            <progress
              className="progress progress-success w-56"
              value={user.profile?.is_verified ? 100 : 20}
              max="100"
            ></progress>
            {user?.profile?.is_verified ? (
              <div className="bg-green-200  rounded-lg p-3 text-sm flex justify-center items-center gap-3">
                <BsFillPatchCheckFill color="green" size={30} />
                <p className="text-md font-medium text-saltpan-500 ">
                  Set up complete!
                </p>

                {/* <Link
              to={"/users/verify/account-type"}
              className="text-center w-1/2 bg-saltpan-300 p-2 rounded-md"
            >
              Start
            </Link> */}
              </div>
            ) : (
              <div className="bg-saltpan-100  rounded-lg p-5 text-sm flex flex-col gap-2">
                <p className="text-lg font-semibold ">Verify your Account</p>
                <p>Steps</p>
                <p className="flex flex-col gap-1">
                  <span>1. add contact info</span>
                  <span>2. add address</span>
                  <span>3. add social security number</span>
                </p>
                <Link
                  to={"/users/verify/account-type"}
                  className="text-center w-1/2 bg-saltpan-300 p-2 rounded-md"
                >
                  Start
                </Link>
              </div>
            )}
          </div>

          {/* price status, to encourage customers */}
          <div className="w-full p-5 h-72 bg-transparent flex flex-col gap-8 rounded-lg overflow-scroll">
            <div className="flex items-center gap-5">
              <img
                src={coin}
                alt=""
                className="bg-lime-50 rounded-md h-[50px] p-2"
              />
              <div>
                <p>
                  Price per <br /> unit
                </p>
                <p className="text-2xl font-medium">$120.00</p>
                <p className="text-[.7rem] text-lime-600">
                  payout of $1.80/unit
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <img
                src={house}
                alt=""
                className="bg-lime-50 rounded-md h-[50px] p-2"
              />
              <div>
                <p>
                  Total properties <br /> owned
                </p>
                <p className="text-2xl font-medium">70</p>
                <p className="text-[.7rem] text-lime-600">
                  20 homes purchased last quater
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <img
                src={handshake}
                alt=""
                className="bg-lime-50 rounded-md h-[50px] p-2"
              />
              <div>
                <p>
                  Occupancy rate <br />
                </p>
                <p className="text-2xl font-medium">97%</p>
                {/* <p className="text-[.7rem] text-lime-600">
                  payout of $1.80/unit
                </p> */}
              </div>
            </div>

            <div className="flex items-center gap-5">
              <img
                src={roi}
                alt=""
                className="bg-lime-50 rounded-md h-[50px] p-2"
              />
              <div>
                <p>
                  Target returns <br />
                </p>
                <p className="text-2xl font-medium">12%-15%</p>
                {/* <p className="text-[.7rem] text-lime-600">
                  payout of $1.80/unit
                </p> */}
              </div>
            </div>
          </div>
          <ButtonDBoard width="w-full max-sm:w-1/2" />
        </motion.div>
      )}
    </>
  );
}
