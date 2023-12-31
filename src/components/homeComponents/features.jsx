import React from 'react'
import { TypeAnimation } from "react-type-animation";
import FeatureCard from './featureCard'
import Button from '../buttons/button.jsx';

export default function Features() {
  return (
    <div className="p-10 max-sm:p-5 flex flex-col mt-20 items-center gap-5 ">
      <h1 className="text-5xl font-semibold w-1/2 text-center max-sm:w-full max-sm:text-3xl">
        <TypeAnimation
          sequence={[
            1000,
            "Stem brings Investment Solutions to Everyone",
            1000,
            "Anyone can invest in Real Estates",
            1000,
          ]}
          speed={20}
          repeat={Infinity}
        />
      </h1>
      <div className="flex gap-12 justify-center pt-10 max-sm:flex-col">
        <FeatureCard
          head="Innovative Investment Strategies:"
          text={
            " Stems Real Estate pioneers inventive approaches, leveraging cutting-edge market insights and technologies to optimize returns and mitigate risks for investors."
          }
        />
        <FeatureCard
          head="Transparent Expert Guidance: "
          text={
            "Stems provides transparent, expert guidance throughout the investment journey, empowering clients with clear insights, regular updates, and personalized strategies for informed decision-making."
          }
        />
        <FeatureCard
          head="Community-Centric Development:"
          text={
            " Beyond profit, Stems prioritizes creating vibrant, sustainable communities through its real estate projects, fostering a positive impact on local environments and lifestyles."
          }
        />
      </div>
      <Button width={"w-1/4 max-sm:w-full mt-10"} text={"Invest Now"} />
    </div>
  );
}
