import React from 'react'
import Button from '../buttons/button'
import img from '../../assets/images/image1.jpg'
import image1 from '../../assets/images/happy-man-with-house-removebg-preview.png'
import groo from '../../assets/images/groo.png'
import HeaderImageCard from './headerImageCard';

export default function Header() {
  return (
    <>
      <main className="pt-28 px-20 items-center h-screen   max-sm:h-full w-screen gap-10 flex max-ss:flex-col  ">
        <div className="w-1/2 self-center max-sm:w-screen max-sm:px-3 mt-10 flex flex-col gap-5 ">
          <h1 className="text-6xl max-sm:text-4xl font-medium font-workSans">
            Real Estate investment made easier with{" "}
            <span class="text-green-700 font-bold">GROO</span>
          </h1>
          <div>
            <div className="absolute bg-yellow-200 h-full "></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur consequatur possimus quos tempore dignissimos nemo
            </p>
          </div>
          <Button
            text={"Get Started"}
            width={"w-1/2"}
            action={() => {
              console.log("Hello Pricsy");
            }}
          />
        </div>

        <div class="  max-sm:h-[600px] w-full mt-10 relative self-center  p-10 max-sm:p-5 max-sm:mt-16  rounded-md flex max-sm:w-screen justify-center">
          <img src={groo} alt="" className="h-[500px] max-sm:w-full w-4/5 object-contain" />
          <HeaderImageCard position={"bottom-10 left-10 max-sm:left-5"} />
          <HeaderImageCard position={"top-0 right-20 max-sm:right-0 max-sm:left-[45%] "} />
          <HeaderImageCard position={"bottom-24 right-0 max-sm:hidden "} />
        </div>
      </main>
    </>
  );
}
