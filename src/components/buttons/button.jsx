import React from 'react'

export default function Button({text,width,action}) {
  return (
    <button
      className={`${width} relative mt-5  h-16 hover:scale-95 transition duration-100 ease-in `}
      onClick={() => {
        action();
      }}
    >
      <div className="absolute top-0 bg-secondary border-[1px] border-black w-full h-full rounded-xl"></div>
      <div className="bg-primary text-white text-xl  h-full border-[1px] border-black  translate-x-2 -translate-y-2 flex items-center justify-center  rounded-xl  font-medium">
        {text}
      </div>
    </button>
  );
}
