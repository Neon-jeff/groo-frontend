import React from 'react'
import FeatureCard from './featureCard'

export default function Reviewscard({img,text,span,user}) {
  return (
    <div className={`flex  w-full   lg:gap-10 max-sm:gap-5 text-lg ${span} flex-col`}>
      <img src={img} alt="" className="w-full h-[600px] max-sm:h-[400px] max-sm:w-full object-cover object-top rounded-xl" />
      <div>
        <h1 className="text-3xl text-primary font-medium max-sm:text-xl">{user.heading}</h1>
        <p className=" ">{text}</p>
        <p className="pt-5 text-xl ">~ {user.name}</p>
        <p className="text-primary">{user.status}</p>
      </div>
    </div>
  );
}
