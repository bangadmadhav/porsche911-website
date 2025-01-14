import React, { useRef, useState, useEffect, useContext } from 'react'
import Button from './Button';
import { IoPlaySharp, IoPauseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ScrollContext } from '../context/ScrollContext';


function VideoSection() {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    // Control Button Logic
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

    // Scroll Context (Hiding Navbar)
    const {setIsVisible} = useContext(ScrollContext);
    useEffect(() => {
      const sectionElement = sectionRef.current;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update state based on visibility
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null, 
          threshold: 0.2,
        }
      );
  
      if (sectionElement) {
        observer.observe(sectionElement); // Start observing
      }
  
      return () => {
        if (sectionElement) {
          observer.unobserve(sectionElement); // Cleanup observer on unmount
        }
      };
    }, []);



  return (
    <section className='h-dvh w-screen text-zinc-200' ref={sectionRef}>
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
        
            <div className="absolute bottom-0 left-0 mb-[10rem] | align-left">
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
        
        <div className="controlButton align-right | absolute bottom-0 right-0 mb-[3rem] ">
            <Button onClick={handlePlayButtonClick} className="px-3 py-3 rounded-none
                                ">
                {isPlaying ? <IoPauseOutline className='text-[24px] max-md:text-[21px] max-sm:text-[18px]'/> : <IoPlaySharp className='text-[24px] max-md:text-[21px] max-sm:text-[18px]'/>  }      
            </Button>
        </div>
        <div className="scrollButton | absolute bottom-2 w-full flex justify-center items-center tracking-wider"><button className='flex justify-center items-center'>Scroll Down <IoIosArrowDown size={16}/></button></div>
    </section>
  )
}

export default VideoSection