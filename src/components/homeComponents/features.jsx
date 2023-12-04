import React from 'react'
import { TypeAnimation } from "react-type-animation";
import FeatureCard from './featureCard'
import ButtonOutiline from '../buttons/buttonOutline';

export default function Features() {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-medium w-1/2 max-sm:w-full max-sm:text-3xl">
        <TypeAnimation
          sequence={[1000,"Groo brings Investment Solutions to Everyone",1000,"Anyone can invest in Real Estates",1000]}
          speed={20}
          repeat={Infinity}

        />
      </h1>
      <div className="flex gap-12 pt-10 max-sm:flex-col">
        <FeatureCard
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam accusamus obcaecati explicabo soluta nam qui, necessitatibus assumenda dolore eaque!"
          }
        />
        <FeatureCard
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam accusamus obcaecati explicabo soluta nam qui, necessitatibus assumenda dolore eaque!"
          }
        />
        <FeatureCard
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam accusamus obcaecati explicabo soluta nam qui, necessitatibus assumenda dolore eaque!"
          }
        />
      </div>
      <ButtonOutiline width={"w-1/4 max-sm:w-full mt-10"} text={"Invest Now"}/>
    </div>
  );
}
