import React from 'react'

export default function FieldSet({label,name,type}) {
  return (
    <div className='w-full'>
        <fieldset className='flex flex-col gap-2 '>
            <label htmlFor="input">
                {label}
            </label>
            <input type={type} required className='border-[1px] bg-white rounded-md p-3' name={name} />
        </fieldset>
    </div>
  )
}

