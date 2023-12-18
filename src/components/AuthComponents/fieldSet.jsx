import React from 'react'

export default function FieldSet({label,name,type,placeholder=` ${label?.toLowerCase()}`,required=true}) {
  return (
    <div className='w-full'>
        <fieldset className='flex flex-col gap-2 '>
            <label htmlFor="input">
                {label}
            </label>
            <input placeholder={placeholder} type={type} required={required} className='border-[1px] bg-white rounded-md p-3 w-full' name={name} />
        </fieldset>
    </div>
  )
}

