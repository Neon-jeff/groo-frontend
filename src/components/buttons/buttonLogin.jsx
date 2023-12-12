import React from "react";

export default function ButtonAuth({
  text = "Login",
  width = "w-full",
  action,
}) {
  return (
    <button
      className={`${width} relative mt-5  h-14 hover:scale-95 transition duration-100 ease-in `}
      onClick={() => {
        action();
      }}
    >
      <div className="absolute top-0 bg-primary flex justify-center items-center text-white border-[1px] border-black w-full h-full rounded-xl">
        {text}
      </div>
    </button>
  );
}
