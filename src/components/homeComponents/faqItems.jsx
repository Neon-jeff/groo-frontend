import React from 'react'

export default function FaqItems() {
  return (
    <div className='flex flex-col gap-10 w-10/12 max-sm:w-full'>
      <div className="collapse collapse-plus  bg-secondary ">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is the minimum amount to invest
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-secondary">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do my investments grow
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-secondary">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I relate with the occupants
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
