import React from 'react'
import {m, motion} from 'framer-motion'
import Button from '../buttons/button';
import StepIcons from './stepIcons';
import group from '../../assets/icons/group.png'
import home from '../../assets/icons/home.png'
import ButtonSecondary from '../buttons/buttonSecondary';
import logo from '../../assets/icons/letter-g.png'
export default function Steps() {
  return (
    <motion.div
      whileInView={{ width: "100%", borderRadius: "0px" }}
      initial={{ width: "80%", borderRadius: "100px" }}
      transition={{ duration: 1 }}
      className="w-11/12  bg-saltpan-700 h-full mx-auto p-20 max-sm:p-10"
    >
      <div className="w-full flex max-sm:flex-col max-sm:gap-10">
        {/* Sub Hero Text  */}
        <div>
          <h1 className="text-4xl pb-10 font-semibold text-white w-1/2 max-sm:pb-5 max-sm:w-full">
            A <span className='text-black-white-300'>Duo-Profit</span> ecosystem that creates partnership, not
            tenancy
          </h1>

          <ButtonSecondary text={"Start Investing"} width={"w-1/4 max-sm:w-full"}/>
        </div>

        {/* Icons Avatar Wrapper Container */}
        <div className='flex flex-col gap-20 w-1/2 max-sm:w-full max-sm:gap-10'>
          <StepIcons icon={group} align={'self-start'} />
          <StepIcons icon={logo} align={'self-center'}  />
          <StepIcons icon={home} align={'self-end'}/>
        </div>
      </div>
    </motion.div>
  );
}

