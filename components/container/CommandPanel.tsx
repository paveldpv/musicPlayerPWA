"use client";
import { useRef, memo, Dispatch, SetStateAction } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";
import { TProgress } from "../../Type/Types";
import { motion } from "framer-motion";

type TCommandPAnel = {
  src: String;
  progressAudio: TProgress;
  setProgressAudio: Dispatch<SetStateAction<TProgress>>;
};

function CommandPanel({ src, progressAudio, setProgressAudio }: TCommandPAnel) {
  const refAudio = useRef<HTMLAudioElement>(null);

  return (
    <div className="fixed z-40 top-3/4 left-72">
      {progressAudio.progress !== "stop" && (
        <motion.div className=" bg-slate-300 p-4 rounded-tl-full rounded-bl-full  opacity-70">
          <motion.div
            hidden={progressAudio.progress != "load"}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            animate={{
              rotate: [0, 360],
            }}
          >
            <BiLoaderCircle size={70} className=" rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 " />
          </motion.div>
          <motion.div hidden={progressAudio.progress !== "play"} >
          
            <BsFillPlayFill
              size={70}
              className=" rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 "
              onClick={() => {
                refAudio.current?.pause();
                setProgressAudio({ progress: "pause" });
              }}
            />
          </motion.div>
          <motion.div hidden={progressAudio.progress !== "pause"}>
            <BsFillPauseFill
              size={70}
              className=" rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 "
              onClick={() => {
                refAudio.current?.play();
                setProgressAudio({ progress: "play" });
              }}
            />
          </motion.div>
        </motion.div>
      )}

      <audio
        autoPlay
        controls
        src={src as string}
        hidden
        ref={refAudio}
        onCanPlay={() => setProgressAudio({ progress: "play" })}
        onLoadedData={() => {
          setProgressAudio({ progress: "load" });
        }}
      />
    </div>
  );
}
export default memo(CommandPanel);
