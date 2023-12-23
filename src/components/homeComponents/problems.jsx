import React from 'react'
import ProblemCard from './problemCard'
import ButtonOutiline from '../buttons/buttonOutline';

export default function Problems() {
  return (
    <div className="bg-sub border-t-[1px] border-b-[1px] border-black  flex w-full flex-row-reverse py-20 items-center justify-center max-sm:flex-col max-sm:gap-10 px-5  ">
      <div className="w-1/3 max-sm:w-full">
        <h1 className="text-5xl max-sm:text-3xl pb-6 font-semibold self-start ">
          Has investing in Real Estate become difficult
        </h1>
        <p>
          Embarking on the journey of real estate investment brings promise and
          potential, but not without its challenges. Navigating market
          fluctuations, understanding diverse property landscapes, and managing
          financial intricacies demand strategic foresight and resilience
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-10 max-sm:gap-5 max-sm:w-full ">
        <ProblemCard
          text={
            "Economic Uncertainty: Fluctuations in the economy create instability, impacting property values and investment returns."
          }
        />
        <ProblemCard
          text={
            "Rising Interest Rates: Higher rates increase borrowing costs, affecting affordability and investment feasibility."
          }
        />
        <ProblemCard
          text={
            " Supply Shortages: Limited property availability intensifies competition and raises acquisition costs for investors."
          }
        />
        <ProblemCard
          text={
            " Market Volatility: Unpredictable market conditions amplify risk, challenging investors to make informed decisions amidst uncertainty."
          }
        />
      </div>
      {/* <ButtonOutiline width={"w-full"} text={'Invest Now'}/> */}
    </div>
  );
}

