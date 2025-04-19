import React, { useState } from 'react';

  function Navbar() {
    const [isHover, setisHover] = useState(false);
    return (
      <div onMouseEnter = {()=>setisHover(true)} onMouseLeave = {()=>setisHover(false)} className="h-26 w-full bg-white/0 flex items-center font-[Poppins] justify-around z-[100] fixed top-0 left-0 select-none">
        {isHover ? (
        <div className="font-extrabold text-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
          <span>
            f<span className="text-red-600 ">o</span>c
            <span className="text-red-600">o</span>
          </span>
        </div>
        ) : (
          <div className="font-extrabold text-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-red-600 ">
          <span>
            f<span className="text-black ">o</span>c
            <span className="text-black">o</span>
          </span>
        </div>
        ) }

        <div className="max-w-[40%] flex text-[15px] gap-16 justify-start">

          <div className="cursor-pointer  transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2">Home</div>
          <div className="cursor-pointer  transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2">Menu</div>
          <div className="cursor-pointer  transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2">Services</div>
          <div className="cursor-pointer  transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2">Contact</div>
        </div>

    
        <div className="flex gap-4">
          <button className="text-black px-6 py-2  bg-[#f2d49c] border-none rounded-full cursor-pointer font-medium overflow-hidden hover:bg-amber-400 hover:scale-105">
            Sign in
          </button>
          <button className="px-6 py-2 bg-[#f2d49c] border-none rounded-full cursor-pointer font-medium hover:bg-amber-400 transtion delay-75 duration-200 ease-out hover:scale-105">
            Login
          </button>
        </div>
      </div>
    );
  }

  export default Navbar;
