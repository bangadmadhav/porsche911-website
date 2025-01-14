import React, { createContext, useState, useEffect } from 'react'

export const ScrollContext = createContext();

export const ScrollProvider = ({children}) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
      
          const totalScroll = documentHeight - windowHeight;
          const scrollPercentage = (scrollTop / totalScroll) * 100;
      
          setScrollProgress(scrollPercentage);
        };
      
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
      
        
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleResize);
        };
      }, []);
      
      

    return (
        <ScrollContext.Provider value={{scrollProgress, windowWidth,isVisible, setIsVisible}}>
            {children}
        </ScrollContext.Provider>
    );
};