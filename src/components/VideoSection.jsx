import React, { useRef, useState, useEffect } from 'react'
import Button from './Button';
import { IoPlaySharp, IoPauseOutline } from "react-icons/io5";

function VideoSection() {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const handlePlayButtonClick = () => {
        setIsPlaying(!isPlaying);
    }
    useEffect(()=> {
        if(isPlaying){
          videoRef.current.play();
        }else{
          videoRef.current.pause();
        }
      }, [isPlaying]);

  return (
    <section className='h-dvh w-screen text-zinc-200'>
        <div className="videoBackground | ">
            <video 
            ref={videoRef}
            src="/videos/porsche.webm" 
            autoPlay
            muted
            loop
            className='absolute w-full h-full inset-0 object-cover -z-1'
            />
        </div>
        <div className="overlay | absolute w-full h-full bg-black opacity-35"></div>
        <div className="textContent | absolute bottom-0 left-0">
            <div className="relative mb-[10rem] ml-[3rem]
                            md:ml-[5rem]
                            sm:ml-[4rem]">
                <h1 className='text-[3.5rem] mb-4
                                md:text-[4.5rem]
                                xl:text-[5rem]
                                2xl:text-[6rem]'>
                Overfeel.
                </h1>
                <Button className="transition transition-all ease duration-200 hover:-translate-y-1">
                        Check All Models.
                </Button>
            </div>
        </div>
        <div className="controlButton | absolute bottom-0 right-0 m-[3rem]
                                        md:mr-[5rem]
                                        sm:mr-[4rem]
                                        max-sm:mb-[2rem]">
            <Button onClick={handlePlayButtonClick} className="px-3 py-3 rounded-none
                                ">
                {isPlaying ? <IoPauseOutline className='text-[24px] max-md:text-[21px] max-sm:text-[18px]'/> : <IoPlaySharp className='text-[24px] max-md:text-[21px] max-sm:text-[18px]'/>  }      
            </Button>
        </div>
    </section>
  )
}

export default VideoSection