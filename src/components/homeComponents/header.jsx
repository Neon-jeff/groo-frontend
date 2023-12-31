import React from "react";
import Button from "../buttons/button";
import groo from "../../assets/images/iphone.png";
import HeaderImageCard from "./headerImageCard";

export default function Header() {
  return (
    <>
      <main className="mt-36 px-20 items-center h-screen   max-sm:h-full w-screen gap-10 flex max-ss:flex-col  ">
        <div className="w-1/2 self-center max-sm:w-screen max-sm:px-3 mt-10 flex flex-col gap-5 ">
          <h1 className="text-6xl max-sm:text-4xl font-medium font-workSans">
            Real Estate investment made easier with{" "}
            <span class="text-green-700 font-bold">STEMS</span>
          </h1>
          <div>
            <div className="absolute bg-yellow-200 h-full "></div>
            <p>
              "Stems Real Estate, cultivating opportunities in every plot.
              Rooted in innovation, we transform spaces into blossoming
              investments. Join us in growing a future of prosperity and
              growth."
            </p>
          </div>
          <Button text={"Get Started"} width={"w-1/2"} />
        </div>

        <div class="  max-sm:h-[600px] w-full mt-10 relative self-center  p-10 max-sm:p-5 max-sm:mt-16  rounded-md flex max-sm:w-screen justify-center">
          <img
            src={groo}
            alt=""
            className="h-[500px] max-sm:w-full w-4/5 bg-transparent object-contain rounded-lg"
          />
          <HeaderImageCard
            position={"bottom-10 left-10 max-sm:left-5"}
            text="Amount Invested in Stems $22,000,000+"
          />
          <HeaderImageCard
            position={"top-0 right-20 max-sm:right-0 max-sm:left-[45%] "}
            text="$300,000+ of wealth created for residents"
          />
          {/* <HeaderImageCard position={"bottom-24 right-0 max-sm:hidden "} /> */}
        </div>
      </main>
    </>
  );
}
