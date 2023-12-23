import React from 'react'

export default function FeatureCard({text,head=""}) {
  return (
    <div
      className={`h-72  relative w-1/4 max-sm:w-full  hover:scale-105 transition duration-100 ease-in `}
    >
      <div className="absolute bg-sub border-[1px] border-black w-full  h-full rounded-md"></div>
      <div className="bg-fill flex-col text-md w-full p-5 h-full border-[1px] border-black  translate-x-2 -translate-y-2 flex gap-2 justify-center  rounded-md font-medium">
        <h1 className="font-semibold text-lg">{head}</h1>
        <p className='text-sm'>{text}</p>
      </div>
    </div>
  );
}
