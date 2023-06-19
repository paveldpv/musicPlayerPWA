"use client";
import { Dispatch, SetStateAction } from "react";
import { TDataStream, TProgress } from "../../Type/Types";
import RadioStreamElement from "../UI/RadioStreamElement";
import { motion, AnimateSharedLayout } from "framer-motion";

type TMain = {
  data: TDataStream[];
  setRadio: Dispatch<SetStateAction<TDataStream>>;
  setProgressAudio: Dispatch<SetStateAction<TProgress>>;
  idCurrentStream?: string;
};

export default function Main({ data, setRadio, idCurrentStream, setProgressAudio }: TMain) {
  const variable = {
    visible: (i: number) => ({
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: (i: number) => (i % 2 === 0 ? { x: 1800 } : { y: 1800 }),
  };
  return (
    <>
      <ul className=" flex  gap-5 flex-row w-full flex-wrap  mt-16 ">
        {data.map((radio, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={variable}
            initial={"hidden"}
            animate={"visible"}
            custom={index}
          >
            <RadioStreamElement
              data={radio}
              setRadio={setRadio}
              idCurrentStream={idCurrentStream}
              setProgressAudio={setProgressAudio}
            />
          </motion.div>
        ))}
      </ul>
    </>
  );
}
