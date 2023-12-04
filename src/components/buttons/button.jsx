import React from 'react'

export default function Button({text,width,action}) {
  return (
    <button
      className={`${width} relative mt-5  h-16 hover:scale-95 transition duration-100 ease-in `}
      onClick={() => {
        action();
      }}
    >
      <div className="absolute top-0 bg-yellow-400 border-2 border-black w-full h-full rounded-md"></div>
      <div className="bg-green-700 text-white  h-full border-2 border-black  translate-x-2 -translate-y-2 flex items-center justify-center  rounded-md  font-medium">
        {text}
      </div>
    </button>
  );
}
