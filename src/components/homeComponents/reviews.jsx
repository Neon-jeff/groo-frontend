import React from 'react'
import img1 from '../../assets/images/rev1.jpg'
import img2 from '../../assets/images/rev2.jpg'
import img3 from '../../assets/images/rev3.jpg'
import img4 from '../../assets/images/rev4.jpg'
import Reviewscard from './reviewsCard'
export default function Reviews() {
  return (
    <div className="mt-20 p-10  ">
      {/* Reviews Wrapper */}
      <div>
        <h1 className="text-5xl max-sm:text-3xl pb-10 font-semibold text-center">
          What our owners and residents say
        </h1>
        {/* reviews card container Bento grids patterns */}
        <div className="grid grid-cols-2  mx-auto w-4/5 max-sm:w-full max-sm:grid-cols-1 gap-20">
          <Reviewscard
            img={img1}
            span={"col-span-2 max-sm:col-span-1"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque voluptatum at, earum vel suscipit"
            }
          />
          <Reviewscard
            img={img2}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque voluptatum at, earum vel suscipit"
            }
          />
          <Reviewscard
            img={img3}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque voluptatum at, earum vel suscipit"
            }
          />
        </div>
      </div>
    </div>
  );
}

