'use client'

import { Comfortaa } from 'next/font/google';
import Footer from '../../components/container/Footer';
import Main from '../../components/container/Main';
import CommandPanel from '../../components/container/CommandPanel';

import data from './../../data/streamRadio'
import { useState,useEffect } from 'react';
import { TDataStream,TProgress } from '../../Type/Types';
const comfortaa = Comfortaa({
  subsets:['cyrillic'],weight:'300'
})
export default function Home() {
  
  const [currentStream,setCurrentStream]=useState<TDataStream>({src:``,id:'',nameRadio:'',logo:''})
  const [progressAudio, setProgressAudio] = useState<TProgress>({ progress: "stop" });
  useEffect(()=>{
    const storageRadioId = localStorage.getItem(`idRadio`)
    if(!storageRadioId)return
    const initialRadio = data.filter(streamData=>streamData.id===storageRadioId)[0]
    setCurrentStream(initialRadio)
  },[])
  
  return (
    
     
    <div className={` w-96 bg-bgViolet ${comfortaa.className} m-auto  flex flex-col h-full relative `}>      
      <Footer statusBarRadio={currentStream.nameRadio || `выберите радио`} />
      <Main data={data} setRadio={setCurrentStream} idCurrentStream={currentStream.id} setProgressAudio={setProgressAudio} />
      <CommandPanel src={currentStream?.src || ``} setProgressAudio={setProgressAudio} progressAudio={progressAudio}/>   
    </div>
    
  );
}
