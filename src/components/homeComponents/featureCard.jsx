import React from 'react'

export default function FeatureCard({text}) {
  return (
    <div
      className={`h-48  relative w-1/4 max-sm:w-full  hover:scale-105 transition duration-100 ease-in `}
    >
      <div className="absolute bg-white border-2 border-black w-full  h-full rounded-md"></div>
      <div className="bg-yellow-50 text-[.9rem] w-full p-5 h-full border-2 border-black  translate-x-2 -translate-y-2 flex items-center justify-center  rounded-md font-medium">
        {text}
      </div>
    </div>
  );
}
