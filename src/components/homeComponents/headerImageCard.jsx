import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HeaderImageCard({position}) {
  return (
    <div
      className={`h-32 absolute ${position} w-1/3 max-sm:w-1/2 hover:scale-105 transition duration-75 ease-in `}
    >
      <div className="absolute bg-teal-800 border-2 border-black w-full h-full rounded-md"></div>
      <div className="bg-white text-[.75rem] p-5 h-full border-2 border-black  -translate-x-2 -translate-y-2 flex items-center justify-center  rounded-md font-medium">

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque
        magnam laboriosam ad, illo incidunt .
      </div>
    </div>
  );
}
