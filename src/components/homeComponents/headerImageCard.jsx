import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderImageCard({
  position,
  text = "Invest with us today",
}) {
  return (
    <div
      className={`h-20 text-green-700 absolute ${position} w-1/3 max-sm:w-1/2 hover:scale-105 transition duration-75 ease-in `}
    >
      <div className="absolute bg-secondary border-[1px] border-black w-full h-full rounded-md"></div>
      <div className="bg-white text-[.75rem] p-5 h-full border-[1px] border-black  -translate-x-2 -translate-y-2 flex items-center justify-center  rounded-md font-medium">
        {text}
      </div>
    </div>
  );
}
