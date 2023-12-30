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
          head="Start with $100"
          text={
            "Non-accredited and accredited investors can get started with only $100."
          }
        />
        <FeatureCard
          head="Quarterly Liquidity:"
          text={
            " Stems offers investors liquidity every quarter, not common for private real estate investments."
          }
        />
        <FeatureCard
          head="Low Fees
:"
          text={
            " Only a $5 platform fee to get started and no fees to cash out after the first year."
          }
        />
      </div>
    </div>
  );
}

