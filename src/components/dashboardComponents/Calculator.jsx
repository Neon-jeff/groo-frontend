import React, { useState } from 'react'
import CalculatorFieldSets from '../CalculatorFields/CalculatorFieldSets';
import ButtonAuth from '../buttons/buttonLogin'

export default function Calculator() {
    let [Initial,setInitial]=useState(0)
    let [recurring,setRecurring]=useState(0)
    let [duration,setDuration]=useState(1)
    console.log(Initial);
  return (
    <div className="bg-white p-5 rounded-md  flex flex-col gap-5">
      <div className=" flex gap-10 max-sm:flex-col">
        <CalculatorFieldSets
          label={"Initial Payment"}
          min={Initial}
          max={"100000"}
          onChange={setInitial}
          step={100}
        />
        <CalculatorFieldSets
          label={"Monthly Payment"}
          min={recurring}
          max={"10000"}
          onChange={setRecurring}
          step={1}
        />
        <CalculatorFieldSets
          label={"Duration (Months)"}
          min={duration}
          max={"30"}
          onChange={setDuration}
          step={1}
        />
      </div>
      <p className='w-1/2 max-sm:w-full text-sm'>
        If you invest{" "}
        <span className="text-lime-600 bg-lime-50 rounded-md p-1">${Initial}</span>{" "}
        initial payment and make a monthly payment of{" "}
        <span className="text-lime-600 bg-lime-50 rounded-md p-1">
          ${recurring}
        </span>{" "}
        for{" "}
        <span className="text-lime-600 bg-lime-50 rounded-md p-1">
          {duration} month(s)
        </span>{" "}
        , your income will be .........
      </p>
      <ButtonAuth width='w-1/4 max-sm:w-1/2' text='Calculate'/>
    </div>
  );
}

