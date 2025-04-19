import React from 'react';

  function Navbar() {
    return (
      <div className="h-26 w-full bg-white/0 flex items-center font-[Poppins] justify-around z-[100] fixed top-0 left-0 select-none">
        <div className="font-extrabold text-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
          <span>
            f<span className="text-red-600">o</span>c
            <span className="text-red-600">o</span>
          </span>
        </div>

        <div className="max-w-[40%] flex text-[15px] gap-16 justify-start">

          <div className="cursor-pointer  transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Home</div>
          <div className="cursor-pointer  transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">Menu</div>
          <div className="cursor-pointer  transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">Services</div>
          <div className="cursor-pointer  transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">Contact</div>
        </div>

    
        <div className="flex gap-4">
          <button className="text-black px-6 py-2  bg-[#ffcc70] border-none rounded-full cursor-pointer font-medium overflow-hidden">
            Sign in
          </button>
          <button className="px-6 py-2 bg-[#ffcc70] border-none rounded-full cursor-pointer font-medium">
            Login
          </button>
        </div>
      </div>
    );
  }

  export default Navbar;
