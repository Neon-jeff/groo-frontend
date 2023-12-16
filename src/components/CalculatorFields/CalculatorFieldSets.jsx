import React, { useState } from "react";

export default function CalculatorFieldSets({
  name,
  label,
  min,
  max,
  onChange,
  step,
}) {
  let [sliderVal, setSliderVal] = useState(min);
  return (
    <div>
      <fieldset className="w-full flex flex-col gap-x-0 gap-y-5 text-sm ">
        <div className="flex items-center gap-2">
          <label htmlFor={name} className="">
            {label}
          </label>
          <input
            type="text"
            name={name}
            value={sliderVal}
            onChange={(e) => {
              onChange(e.target.value);
              setSliderVal(e.target.value);
              console.log("hey baby");
            }}
            className="bg-sub h-10 w-full rounded-md p-3 input"
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={sliderVal}
          step={step}
          onInput={(e) => {
            setSliderVal(e.target.value);
          }}
          onChange={(e) => {
            setSliderVal(e.target.value);
          }}
          className=" range range-sm  accent-secondary"
        />
      </fieldset>
    </div>
  );
}
