import React, { useEffect, useRef, useState } from "react";

export default function CalculatorFieldSets({
  name,
  label,
  min,
  max,
  onChange,
  step,
}) {
  let [sliderVal, setSliderVal] = useState(min);
  let InputRef=useRef(null)
  let SliderRef=useRef(null)

  useEffect(()=>{
    let value=InputRef.current?.value
    onChange(sliderVal);

  },[sliderVal])
  return (
    <div>
      <fieldset className="w-full flex flex-col gap-x-0 gap-y-5 text-sm ">
        <div className="flex items-center gap-2">
          <label htmlFor={name} className="">
            {label}
          </label>
          <input
            ref={InputRef}
            type="text"
            name={name}
            value={sliderVal}
            onChange={(e) => {
              setSliderVal(e.target.value)
              onChange(e.target.value)

            }}
            className="bg-gray-200 h-10 w-full rounded-md p-3 input"
          />
        </div>
        <input
        ref={SliderRef}
          type="range"
          min={min}
          max={max}
          value={sliderVal?sliderVal:0}
          onChange={(e) => {
            setSliderVal(e.target.value);

          }}
          className=" range range-sm  accent-secondary"
        />
      </fieldset>
    </div>
  );
}
