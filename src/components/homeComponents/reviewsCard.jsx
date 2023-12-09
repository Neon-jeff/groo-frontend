import React from 'react'
import FeatureCard from './featureCard'

export default function Reviewscard({img,text,span}) {
  return (
    <div className={`flex  w-full items-center lg:gap-10 max-sm:gap-5 text-lg ${span} max-sm:flex-col`}>
      <img src={img} alt="" className="w-1/2 max-sm:w-full object-contain rounded-3xl" />
      <div>
        <h1 className="text-3xl text-primary font-medium max-sm:text-2xl">Heading 1</h1>
        <p className="w-full ">{text}</p>
        <p className="pt-5 text-xl ">~ Lizzy Benson</p>
        <p className="text-primary">Investor</p>
      </div>
    </div>
  );
}
