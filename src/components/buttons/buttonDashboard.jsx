import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useProfileUpdate } from '../../data/store';

export default function ButtonDBoard({ text = "Invest Now", width = "w-full", action }) {
  let navigate=useNavigate()

  return (
    <button
      className={`${width} relative mt-5  h-14 hover:scale-95 transition duration-100 ease-in `}
      onClick={() => {
        if(!JSON.parse(localStorage.getItem("user")).profile.is_verified){
          navigate("/users/verify/account-type");
        }
        else{
          navigate("/users/payment/payment-type");
        }
      }}
    >
      <div className="absolute top-0 bg-secondary flex justify-center items-center text-black border-[1px] border-black w-full h-full rounded-xl">
        {text}
      </div>
    </button>
  );
}

