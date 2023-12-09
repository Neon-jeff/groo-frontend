import React from 'react'
import FeatureCard from './featureCard';

export default function Benefits() {
  return (
    <div className="mt-16 mx-auto flex flex-col items-center gap-10 ">
      <h1 className="text-5xl font-semibold text-center w-1/2 max-sm:w-full max-sm:text-3xl">
        Invest in a platform where the residents are partners not tenants
      </h1>
      <div className="w-full flex justify-center gap-10 max-sm:flex-col max-sm:w-4/5">
        <FeatureCard
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores distinctio iste eum est sint suscipit vel rem recusandae amet!"
          }
        />
        <FeatureCard
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores distinctio iste eum est sint suscipit vel rem recusandae amet!"
          }
        />
        <FeatureCard
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores distinctio iste eum est sint suscipit vel rem recusandae amet!"
          }
        />
      </div>
    </div>
  );
}

