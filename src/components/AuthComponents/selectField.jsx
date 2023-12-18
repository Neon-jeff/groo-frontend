import React from 'react'

export default function SelectField({
  label,
  name,
  type,
  placeholder = ` ${label?.toLowerCase()}`,
  required = true,
  options=[]
}) {
  return (
    <div className="w-full">
      <fieldset className="flex flex-col gap-2 ">
        <label htmlFor="input">{label}</label>
        <select name={name} id="" required={required} placeholder={placeholder} className='w-full border-[1px] p-3 rounded-md'>
            {
                options.map((item,index)=>(
                    <option key={index} value={item?.toLowerCase()}>{item}</option>
                ))
            }
        </select>
      </fieldset>
    </div>
  );
}
