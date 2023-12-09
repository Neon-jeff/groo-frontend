import React from 'react'
import ProblemCard from './problemCard'
import ButtonOutiline from '../buttons/buttonOutline';

export default function Problems() {
  return (
    <div className="bg-sub border-t-2 border-b-2 border-black flex w-full flex-row-reverse py-20 items-center justify-center max-sm:flex-col max-sm:gap-10 px-5  ">
      <div className="w-1/3 max-sm:w-full">
        <h1 className="text-5xl max-sm:text-3xl pb-6 font-medium self-start ">
          Has investing in Real Estate become difficult
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          temporibus provident qui doloribus beatae laboriosam ipsam id
          praesentium excepturi minima!
        </p>
      </div>
      <div className="w-1/2 flex flex-col gap-10 max-sm:gap-5 max-sm:w-full ">
        <ProblemCard
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Option temporibus provident qui doloribus beatae laboriosam ipsam id praesentium excepturi minima!"
          }
        />
        <ProblemCard
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Option temporibus provident qui doloribus beatae laboriosam ipsam id praesentium excepturi minima!"
          }
        />
        <ProblemCard
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Option temporibus provident qui doloribus beatae laboriosam ipsam id praesentium excepturi minima!"
          }
        />
        <ProblemCard
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Option temporibus provident qui doloribus beatae laboriosam ipsam id praesentium excepturi minima!"
          }
        />
      </div>
      {/* <ButtonOutiline width={"w-full"} text={'Invest Now'}/> */}
    </div>
  );
}

