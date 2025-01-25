import React, { useReducer, useState } from 'react'
import {IMAGES, MODELDETAILS} from '../constants/constant.js';


function Hero() {
  const initialState = {model: 'coupe'};
  const modelReducer = (state, action) => {
    switch (action.type){
      case 'coupe': {
        return {...state, model: 'coupe'}
      }
      case 'cabriolet': {
        return {...state, model: 'cabriolet'}
      }
      case 'targa': {
        return {...state, model: 'targa'}
      }
      case 'gt': {
        return {...state, model: 'gt'}
      }
      default: {
        break;
      }
    }
  }

  const [state, dispatch] = useReducer(modelReducer,initialState);
  const [selectedModel, setSelectedModel] = useState(MODELDETAILS[0]);
  const handleSelectModel = (id) => {
    const model = MODELDETAILS.find((item) => item.id === id);
    setSelectedModel(model);
  };
  
  return (
    <section className='w-screen bg-white rounded-t-3xl h-auto'>
      <div className="absolute w-full h-full">
        <div className="background | w-full relative">
          <div className="overlay | px-[33%] py-[7%] shadow-bottom-inner
                          max-md:px-[28%]">
            <img src={IMAGES.modelSectionOverlay} alt="911 Overlay" 
                  className='w-full h-full -z-1 opacity-15 object-cover'/>
          </div>
          <div className="car-image | absolute top-0 left-0 px-[17%] pt-[12%]
                          max-md:px-[7%]">
              <img 
                    src={selectedModel.mainImg} 
                    alt="Porsche" 
                    className='object-contain' 
                    key={selectedModel.id} 
                  />
          </div>
        </div>
        <div className="options | relative w-full flex justify-center gap-4 mt-[8%] max-md:mt-[10%] ">
            {MODELDETAILS.map(i => (
              <button className='model-btn' key={i.id} id={i.id} onClick={() => {
                dispatch({type: i.id});
                handleSelectModel(i.id);
              }}>
                <span className={i.id == state.model ? `active-model-btn` : ``} id={i.id}>{i.name}</span>
              </button>
            ))}
        </div>
        <div className="titleDetails | relative w-full flex flex-col justify-center items-center gap-2">
          <h1 className='text-[5rem] leading-none mt-3 font-normal
                        max-sm:text-[4rem] '>{selectedModel.title}</h1>
          <p className='bg-zinc-100 rounded px-2 py-1
                    max-md:text-sm'>Gasoline</p>
          <p className='text-zinc-400 text-base max-md:text-sm p-3 text-center'>{selectedModel.subTitle}</p>                
        </div>
        <div className="moreDetails | flex gap-8 md:gap-10 items-center w-full mt-[6%] px-[15%] max-lg:px-[5%] text-[350]
        max-md:mt-[8%] max-md:flex-col-reverse">
            <div className="max-md:text-center text-left relative flex flex-col justify-between gap-12 ">
              <div className="acceleration">
                <h1 className='text-[4.5rem] leading-none tracking-tight
                                max-lg:text-[3rem] '>{selectedModel.acceleration} <span className='text-[2rem] p-1'>s</span></h1>
                <p className='text-zinc-400 text-base max-lg:text-sm'>Acceleration 0 - 100 km/h with Sport Chrono Package</p>
              </div>
              <div className="power">
                <h1 className='text-[4.5rem] leading-none tracking-tight
                                max-lg:text-[3rem]'>{selectedModel.powerkw} <span className='text-[2rem] p-1'>kW / </span>{selectedModel.powerps} <span className='text-[1.5rem] p-1'>PS</span></h1>
                <p className='text-zinc-400 text-base max-lg:text-sm'>Power (kW) / Power (PS)</p>
              </div>
              <div className="topspeed">
                <h1 className='text-[4.5rem] leading-none tracking-tight
                                  max-lg:text-[3rem] '>{selectedModel.topspeed} <span className='text-[2rem] p-1'>km/h</span></h1>
                <p className='text-zinc-400 text-base max-lg:text-sm'>Top speed</p>
              </div>
            </div>
            <div className="secondimg relative flex-1">
              <img 
                src={selectedModel.img2} 
                alt="Porsche" 
                className='object-contain' 
                key={selectedModel.id} 
              />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero