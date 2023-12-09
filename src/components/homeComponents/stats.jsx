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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error
        dolor reiciendis quia incidunt impedit perferendis dolorum aspernatur
        vero natus.
      </p>
      <Button width={"w-1/5 max-sm:w-4/5"} text={"Start Investing"} />
      <div className="pt-10 flex gap-10 max-sm:flex-col justify-center">
        <FeatureCard
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error dolor reiciendis quia incidunt impedit perferendis dolorum aspernatur vero natus."
          }
        />
        <FeatureCard
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error dolor reiciendis quia incidunt impedit perferendis dolorum aspernatur vero natus."
          }
        />
        <FeatureCard
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error dolor reiciendis quia incidunt impedit perferendis dolorum aspernatur vero natus."
          }
        />
      </div>
    </div>
  );
}
