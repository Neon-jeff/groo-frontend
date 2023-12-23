import React from "react";

export default function FieldSet({
  label,
  name,
  type,
  placeholder = ` ${label?.toLowerCase()}`,
  required = true,
  state,
  setState=()=>{},
}) {
  return (
    <div className="w-full">
      <fieldset className="flex flex-col gap-2 ">
        <label htmlFor="input">{label}</label>
        <input
          placeholder={placeholder}
          onChange={(e) => {
            if (type == "file") {
              setState(e.target.files[0])
            }
            else{
              setState(e.target.value);
            }

          }}
          type={type}
          required={required}
          className="border-[1px] bg-white rounded-md p-3 w-full"
          name={name}
          accept={type == "file" ? "image/*" : null}
        />
      </fieldset>
    </div>
  );
}
