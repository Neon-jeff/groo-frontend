import React from 'react'

export default function StepIcons({icon,align}) {
  return (
    <div
      className={`h-[100px]  relative w-[100px] max-sm:w-[70px] max-sm:h-[70px]   hover:scale-105 transition duration-100 ease-in ${align} `}
    >
      <div className="absolute  border-2 border-white bg-primary w-full  h-full rounded-xl"></div>
      <div className=" text-[.9rem] w-full p-5 h-full bg-primary border-2 border-white  translate-x-2 -translate-y-2 flex items-center justify-center  rounded-xl font-medium">
        <img src={icon} alt="" className='object-contain w-[60px]' />
      </div>
    </div>
  );
}
