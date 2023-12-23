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
              "Choosing Stems was a game-changer for my real estate journey. Their meticulous house planning impressed me, resulting in a home that perfectly blends functionality and aesthetics"
            }
            user={{
              name: "Maya Daniels",
              status: "Resident",
              heading: "Attractive House Planning",
            }}
          />
          <Reviewscard
            img={img2}
            text={
              "Stems' flexibility in payment methods made my investment journey hassle-free. Their commitment to accommodating individual needs sets them apart. A seamless and convenient experience from start to finish."
            }
            user={{
              name: "Mark Jones",
              status: "Investor",
              heading: "Flexible Payment Method",
            }}
          />
          <Reviewscard
            img={img3}
            text={
              "Stems' futuristic investments redefine the real estate game. Their forward-thinking strategies and cutting-edge projects promise not just returns, but a glimpse into the future of smart, sustainable living"
            }
            user={{
              name: "Jane Collins",
              status: "Investor",
              heading: "Futuristic Investment",
            }}
          />
        </div>
      </div>
    </div>
  );
}

