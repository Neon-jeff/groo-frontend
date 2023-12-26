import React from 'react'
import FeatureCard from './featureCard'
import Button from '../buttons/button'

export default function Stats() {
  return (
    <div className="mt-36 px-10 max-sm:w-full flex flex-col items-center mx-auto max-sm:px-5  ">
      <h1 className="text-5xl pb-5 font-semibold w-1/3 max-sm:text-3xl max-sm:w-full text-center  ">
        Our number grows rapidly
      </h1>
      <p className="w-1/2 py-5 max-sm:w-full text-center">
        Stems Real Estate has demonstrated remarkable growth, boasting an
        impressive 40% increase in the past year. This fabricated statistic
        underscores our commitment to excellence and strategic prowess in the
        market.
      </p>
      <Button width={"w-1/5 max-sm:w-4/5"} text={"Start Investing"} />
      <div className="pt-10 flex gap-10 max-sm:flex-col justify-center">
        <FeatureCard
          head="Over $22M Invested in Stem "
          text={
            "Creating Stem spanned several years, yet you have the opportunity to invest within just 5 minutes."
          }
        />
        <FeatureCard
          head="+$300K wealth created"
          text={
            "Investors in Stems have contributed to residents amassing a wealth exceeding $300,000."
          }
        />
        <FeatureCard
          head="Roots fund is up 40%"
          text={
            "From April 1, 2021, to October 1, 2023, Roots has experienced a 40% increase in value."
          }
        />
      </div>
    </div>
  );
}
