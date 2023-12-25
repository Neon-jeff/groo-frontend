import React from 'react'
import Calculator from '../dashboardComponents/Calculator'

export default function HomepageCal() {
  return (
    <div className="p-10 text-lg flex items-center max-sm:flex-col max-sm:gap-5 ">
      <div>
        <h1 className="text-5xl pb-5 font-semibold max-sm:text-3xl">
          Our Investment Calculator
        </h1>
        <p className='w-1/2 max-sm:w-full'>Predict your investment returns with our calculator</p>
      </div>
      <Calculator color="bg-sub" />
    </div>
  );
}

