import React, { useContext, useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import porscheBS from '/img/porscheBigScreenLogo.svg'; 
import porscheSS from '/img/porscheSmallScreenLogo.svg';
import { ScrollContext } from '../context/ScrollContext';

function Navbar() {
  const {windowWidth, scrollProgress, isVisible} = useContext(ScrollContext);
  const [isClick, setIsClick] = useState(false);

  const handleMenuClick = () => {
    setIsClick(!isClick)
  }
  return (
    <div  
        className={`fixed top-0 left-0 z-[1] w-screen bg-white shadow-sm py-5 flex justify-start items-center overflow-hidden
                      md:shadow-md ${isVisible ? `hidden`: ``}`}>
      <div className="menu align-left text-zinc-900 
            sm:text-base
            md:text-lg 
            lg:text-l ">
        <div className="menu-button | flex items-center gap-1 cursor-pointer" onClick={handleMenuClick}>
          {isClick ? <LuMenu /> : <IoClose />}
          {windowWidth > 760 ? <p className='uppercase'>Menu</p>: ``}
        </div>
      </div>
      <div className={`logo | absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${windowWidth > 760 ? `w-[200px]` : `w-[32px]`}`} >
        {windowWidth > 760 ? (
            <img src={porscheBS} alt="Porsche Big Screen Logo" />
          ) : (
            <img src={porscheSS} alt="Porsche Small Screen Logo"/>
          )}
      </div>
      <div className="progressBarContainer | absolute bottom-0 left-0 w-full bg-zinc-200 h-[0.15rem]">
        <div
          className="absolute h-full left-0 top-0 bg-black"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Navbar