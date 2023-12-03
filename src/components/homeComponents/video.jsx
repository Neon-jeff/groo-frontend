import React from 'react'
import Button from '../buttons/button';

export default function Video() {
  return (
    <div className="h-screen bg-yellow-50 flex items-center px-10 justify-center gap-20 max-sm:flex-col-reverse max-sm:gap-10">
      <div className='w-1/3 max-sm:w-full'>
        <h2 className='text-4xl font-medium'>Why Invest in Real Estate</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
          voluptates! Quidem, rerum dolore. Quia maiores nisi veniam eveniet
          odio impedit?
        </p>
        <Button width={"w-1/2"} text={"Invest Now"}/>
      </div>
      <iframe
      className='bg-white rounded-xl'
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9TXs_0U2758?si=7xEDkx0gpzgepjK3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

