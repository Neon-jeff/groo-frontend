import React, { useState } from 'react'
import CalculatorFieldSets from '../CalculatorFields/CalculatorFieldSets';
import ButtonAuth from '../buttons/buttonLogin'
import { motion } from 'framer-motion';

export default function Calculator() {
    let [Initial,setInitial]=useState(0)
    let [recurring,setRecurring]=useState(0)
    let [duration,setDuration]=useState(0)
    let [showResult,setShowResult]=useState(false)
    let [result,setResult]=useState(0)

    let calculateResult=()=>{
      let result=parseInt(Initial)*1.11 + parseInt(recurring)*parseInt(duration)*1.11
      setResult(result.toFixed(2))
    }
  return (
    <div className="bg-white p-5 rounded-md  flex flex-col gap-5">
      <div className=" flex gap-10 max-sm:flex-col">
        <CalculatorFieldSets
          label={"Initial Payment"}
          min={0}
          max={"100000"}
          onChange={(e) => {
            setInitial(e);
            setShowResult(false);
          }}
          step={100}
        />
        <CalculatorFieldSets
          label={"Monthly Payment"}
          min={0}
          max={"10000"}
          onChange={(e) => {
            setRecurring(e);
            setShowResult(false);
          }}
          step={1}
        />
        <CalculatorFieldSets
          label={"Duration (Months)"}
          min={0}
          max={"30"}
          onChange={(e) => {
            setDuration(e);
            setShowResult(false);
          }}
          step={1}
        />
      </div>
      <p className="w-1/2 max-sm:w-full text-sm">
        If you invest{" "}
        <span className="text-lime-600 bg-lime-50 rounded-md p-1">
          ${Initial}
        </span>{" "}
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
      {showResult && (
        <motion.p
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-lime-200 w-1/3 text-md border-[1px] border-black max-sm:w-full p-5 rounded-full font-semibold text-center "
        >
          Worth: ${result}
        </motion.p>
      )}
      <ButtonAuth
        width="w-1/4 max-sm:w-1/2"
        text="Calculate"
        action={() => {
          calculateResult();
          setShowResult(true);
        }}
      />
    </div>
  );
}

