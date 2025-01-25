import React from 'react'
import {IMAGES, INFO} from '../constants/constant.js';

const Info = () => {
  return (
    <section className='bg-white pt-[15%]'>
       <div className="flex justify-center items-center w-full pb-8">
            <img src={IMAGES.modelSectionOverlay} alt="911 Overlay" 
                            className='object-cover w-[14%] max-md:w-[25%]'/>
       </div>
       <div className="grid grid-cols-15 grid-rows-10 w-full gap-0 overflow-hidden">
            <div className="col-start-3 row-start-1 col-span-9 row-span-4">
                <img 
                src={INFO.img1}
                alt="Center Image" 
                className=" w-full h-full object-cover rounded-3xl"
                />
            </div>
            <div className="col-start-4 row-start-5 col-span-3 row-span-3 | font-AsapCondensed">
                <h1 className='text-[3rem] leading-tight py-8 '>{INFO.title}</h1>
                <p className='text-xl text-justify tracking-tight'>{INFO.description}</p>
            </div>
            <div className="col-start-9 row-start-4 col-span-4 row-span-4">
                <img 
                    src={INFO.img2}
                    alt="Right Image" 
                    className=" w-full h-full object-cover rounded-3xl"
                    />
            </div>
            <div className="row-start-8 col-start-5 row-span-3 col-span-5">
                <img 
                    src={INFO.img3}
                    alt="Bottom Image" 
                    className=" w-full h-full object-cover rounded-3xl"
                    />
            </div>
            
        
        
       </div>

    </section>
  )
}

export default Info