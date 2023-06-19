"use client";
import { TDataStream, TProgress } from "../../Type/Types";
import { memo, useMemo } from "react";

import { Dispatch, SetStateAction } from "react";
type TRadioStreamElement = {
  data: TDataStream;
  setRadio: Dispatch<SetStateAction<TDataStream>>;
  setProgressAudio: Dispatch<SetStateAction<TProgress>>;
  idCurrentStream?: string;
};

function RadioStreamElement({ setRadio, data, idCurrentStream, setProgressAudio }: TRadioStreamElement) {
  const selectedRadio = useMemo(() => idCurrentStream === data.id, [idCurrentStream]);
  return (
    <li
    
      className={` w-20 ${
        selectedRadio ? "buttonSelected" : "buttonViolet"
      } p-2 flex items-center justify-center rounded-xl`}
    >
      <button
        onClick={() => {
          setProgressAudio({ progress: "load" });
          setRadio(data);
          localStorage.setItem(`idRadio`, data.id);
        }}
        className="flex items-center justify-center flex-col gap-1 "
      >
        <img src={data.logo} className={`  w-14 text-sm p-1 $ ${selectedRadio ? "invert-0" : "invert"} `} />
        <span className={`text-xs ${selectedRadio ? " text-black" : " text-white"}`}>{data.nameRadio}</span>
      </button>
    </li>
  );
}
export default memo(RadioStreamElement);
