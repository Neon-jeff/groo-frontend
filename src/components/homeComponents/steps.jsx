import React, { useRef } from 'react'
import {m, motion,useScroll, useTransform} from 'framer-motion'
import Button from '../buttons/button';
import StepIcons from './stepIcons';
import group from '../../assets/icons/group.png'
import home from '../../assets/icons/home.png'
import ButtonSecondary from '../buttons/buttonSecondary';
import logo from '../../assets/icons/letter-g.png'
import StepProgress from './stepProgress';
export default function Steps() {
  let stepRef=useRef(null)
  const {scrollYProgress}=useScroll({
    target:stepRef,
    offset:["start end","0.9 1"]
  })
  let scaleTransform=useTransform(scrollYProgress,[0,0.5,1],[0.9,1,1])
   let borderTransform = useTransform(scrollYProgress, [0, 0.4,0.5, 1], ["50px", "20px","0px", "0px"]);
  return (
    <motion.div
      onClick={() => {
        console.log(scaleTransform);
      }}
      style={{
        scaleX: scaleTransform,
        borderRadius: borderTransform,
      }}
      ref={stepRef}
      className=" bg-primary  mx-auto p-20 max-sm:p-10"
    >
      <div className=" flex justify-center gap-0 max-sm:flex-col max-sm:gap-10">
        {/* Sub Hero Text  */}
        <div className="w-1/2 max-sm:w-full">
          <h1 className="text-4xl pb-10 font-semibold text-white w-3/4 max-sm:text-2xl max-sm:pb-5 max-sm:w-full">
            A <span className="text-secondary">Duo-Profit</span> ecosystem that
            creates partnership, not tenancy
          </h1>

          <ButtonSecondary
            text={"Start Investing"}
            width={"w-1/4 max-sm:w-full"}
          />
        </div>

        {/* Icons Avatar Wrapper Container */}
        <div className="flex flex-col gap-10 w-1/4 relative max-sm:w-4/5 max-sm:pt-10 max-sm:items-center max-sm:mx-auto max-sm:gap-5">
          <p className="absolute text-white bottom-4 left-0 text-[12px] w-1/2 -translate-x-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <p className="absolute text-white top-4 right-4 text-[12px] w-1/2 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <p className="absolute text-white top-1/2 right-0 text-[12px] w-1/2 translate-x-20 max-sm:translate-x-14 -translate-y-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>

          <StepIcons icon={group} align={"self-start"} />
          <StepIcons icon={logo} align={"self-center"} />
          <StepIcons icon={home} align={"self-end"} />
        </div>
      </div>
      {/* steps progress wrapper */}

      <div className="text-sub flex flex-col gap-16 mt-10">
        <StepProgress
          stepHeader={"Invest with as small as $200"}
          stepNo={"1"}
          stepText={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt quae voluptas fugiat obcaecati, error recusandae labore sint repellendus minus earum sed porro inventore nisi at laboriosam dolores placeat ipsum?"
          }
          progress={[0.1, 0.5, 1, 0.2]}
        />
        <StepProgress
          stepHeader={"Invest with as small as $200"}
          stepNo={"2"}
          stepText={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt quae voluptas fugiat obcaecati, error recusandae labore sint repellendus minus earum sed porro inventore nisi at laboriosam dolores placeat ipsum?"
          }
          progress={[0.1, 0.5, 1, 0.2]}
        />
        <StepProgress
          stepHeader={"Invest with as small as $200"}
          stepNo={"3"}
          stepText={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt quae voluptas fugiat obcaecati, error recusandae labore sint repellendus minus earum sed porro inventore nisi at laboriosam dolores placeat ipsum?"
          }
          progress={[0.1, 0.5, 1, 1]}
        />
      </div>
    </motion.div>
  );
}

