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
          head="Strategic Growth Opportunities:"
          text={
            "Stems Real Estate identifies lucrative investment opportunities, optimizing returns through innovative strategies and market insights"
          }
        />
        <FeatureCard
          head="Community-Centric Impact:"
          text={
            " Investing with Stems not only yields financial gains but also contributes to the development of sustainable and vibrant communities."
          }
        />
        <FeatureCard
          head="Expert Guidance and Transparency:"
          text={
            " Clients benefit from transparent communication and expert guidance, empowering them with the knowledge to make informed investment decisions for long-term success."
          }
        />
      </div>
    </div>
  );
}

