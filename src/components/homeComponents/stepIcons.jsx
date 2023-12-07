import React from 'react'

export default function StepIcons({icon,align}) {
  return (
    <div
      className={`h-[100px]  relative w-[100px] max-sm:w-[100px]   hover:scale-105 transition duration-100 ease-in ${align} `}
    >
      <div className="absolute  border-2 border-white bg-saltpan-700 w-full  h-full rounded-xl"></div>
      <div className=" text-[.9rem] w-full p-5 h-full bg-saltpan-700 border-2 border-white  translate-x-2 -translate-y-2 flex items-center justify-center  rounded-xl font-medium">
        <img src={icon} alt="" />
      </div>
    </div>
  );
}
