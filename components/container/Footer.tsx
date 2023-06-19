"use client";
import React from "react";
import { motion } from "framer-motion";

type TFooter = {
  statusBarRadio: String;
};

export default function Footer({ statusBarRadio }: TFooter) {
  return (
    <div className=" fixed h-10 text-white buttonViolet rounded-xl p-1 mt-1  w-96 z-10 ">
      <motion.div
        className={` text-2xl `}
        initial={{
          x: 0,
          color:'rgba(227,221,214,1)'
          
        }}
        animate={{
          x: 500,
          color:'rgba(217,159,0,1)'
          
          
        }}
        transition={{         
          duration: 4,
          delay: 0.1,
          repeat: Infinity,
        }}
      >
        {statusBarRadio}
      </motion.div>
    </div>
  );
}
