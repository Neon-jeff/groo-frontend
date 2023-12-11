import React from 'react'
import FooterContact from './footerIcons';

export default function FooterLinks() {
  return (
    <div className='flex flex-col gap-10 w-1/2 max-sm:w-full'>
      {/* Nav Section */}
      <div className='flex flex-col gap-5 text-lg    text-lime-300'>
        <p className='text-white'>Quick Links</p>
        <a
          href="#"
          className=""
        >
          Home
        </a>
        <a
          href="#"
          className=""
        >
          About Us
        </a>
        <a
          href="#"
          className=""
        >
          Legals
        </a>
        <a
          href="#"
          className=""
        >
          Company
        </a>
      </div>
      <FooterContact/>
    </div>
  );
}

