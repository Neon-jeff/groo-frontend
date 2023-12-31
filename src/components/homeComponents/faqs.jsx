import React from 'react'
import FaqItems from './faqItems';

export default function Faq() {
  return (
    <div className='flex px-10 mt-20 text-xl items-center justify-around w-4/5 mx-auto max-sm:flex-col max-sm:w-full max-sm:gap-10'>
      <div className=''>
        <h1 className='text-5xl font-semibold pb-10 max-sm:text-3xl'>FAQs</h1>
        <p className='w-1/2 max-sm:w-full'>
         Find answers to frequently asked questions from our prospective investors
        </p>
      </div>
      <FaqItems/>
    </div>
  );
}

