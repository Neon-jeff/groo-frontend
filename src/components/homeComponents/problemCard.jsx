import React from 'react'

export default function ProblemCard({text}) {
  return (
    <div
      className={`h-40  relative w-4/5 max-sm:w-full  hover:scale-105 transition duration-100 ease-in `}
    >
      {/* <div className="absolute bg-transparent border-2 border-black w-full  h-full rounded-md"></div> */}
      <div className="bg-fill text-md w-full p-5 h-full border-[1px] border-black  flex items-center justify-center  rounded-2xl font-medium">
       {text}
      </div>
    </div>
  );
}

