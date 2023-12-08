import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StepProgress({ stepNo, stepText,stepHeader,progress }) {
  let progressEl = useRef(null);
  let { scrollYProgress } = useScroll({
    target: progressEl,
    offset: ["0 1", "1.11 1"],
  });
 let  opacityTransfrom=useTransform(scrollYProgress,[0,0.3,0.9,1],progress)

  return (
    <motion.div
      ref={progressEl}
      style={{
        opacity: opacityTransfrom,
        borderLeft:scrollYProgress,
        borderLeftColor:"yellow",
        scale:"100%"
      }}
      className="flex gap-10 items-center h-56 max-sm:h-full max-sm:gap-5 max-sm:flex-col "
    >
      <p className="text-2xl text-secondary max-sm:self-start">{stepNo}</p>
      <div>
        <h1 className="text-4xl max-sm:text-xl font-medium text-secondary">{stepHeader}</h1>
        <p className="text-xl w-1/2 max-sm:w-full mt-5">{stepText}</p>
        <button className="text-secondary text-xl pt-10">Learn More </button>
      </div>
    </motion.div>
  );
}
