import React from 'react'
import Button from '../buttons/button';

export default function Video() {
  return (
    <div className="h-screen bg-black-white-50 max-sm:h-[70vh] flex flex-row-reverse items-center px-10 justify-center gap-20 max-sm:flex-col-reverse max-sm:gap-10">
      <div className="w-1/3 max-sm:w-full">
        <h2 className="text-5xl font-semibold pb-5 text-black max-sm:text-3xl">
          Why Invest in Real Estate
        </h2>
        <p>
          Unlock the door to prosperous real estate investments with Stems. Our
          seasoned experts navigate the market to secure growth and value.
          Invest confidently in a future where every property holds potential.
        </p>
        <Button width={"w-1/2"} text={"Invest Now"} />
      </div>
      <iframe
        className="bg-white rounded-xl w-3/5 max-sm:w-full h-2/3 max-sm:h-1/3"
        src="https://www.youtube.com/embed/9TXs_0U2758?si=7xEDkx0gpzgepjK3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

