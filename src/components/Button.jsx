import React from 'react'

function Button({onClick, className, type="button", children}) {
  return (
    <button
        type={type}
        onClick={onClick}
        className={`border-2 px-6 py-3  border-zinc-200 text-zinc-200 rounded tracking-wide  
            sm:text-base
            md:text-lg 
            lg:text-l 
            ${className}`}
    >
        {children}
    </button>
  )
}

export default Button