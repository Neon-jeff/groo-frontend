import React from "react";

export default function ButtonOutiline({ text, width, action }) {
  return (
    <button
      className={`${width} relative mt-5  h-20 hover:scale-95 transition duration-100 ease-in `}
      onClick={() => {
        if (!action) {
          navigate("/users/signup");
        }
        action();
      }}
    >
      <div className="absolute bg-transparent border-[1px] border-black w-full h-full rounded-md"></div>
      <div className="bg-white text-black text-xl  h-full border-[1px] border-black  translate-x-2 -translate-y-2 flex items-center justify-center  rounded-md  font-medium">
        {text}
      </div>
    </button>
  );
}
