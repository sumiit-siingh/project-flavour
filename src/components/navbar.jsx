import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isHover, setIsHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`h-18 w-full flex items-center font-[Poppins] justify-around z-[100] fixed top-0 left-0 select-none transition-all duration-300 ${
        scrolled ? "bg-transparent/90 shadow-md backdrop-blur" : "bg-white/0"
      }`}
    >
  
      {isHover ? (
        <div className="font-extrabold text-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
          <span>
            f<span className="text-red-600">o</span>c
            <span className="text-red-600">o</span>
          </span>
        </div>
      ) : (
        <div className="font-extrabold text-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-red-600">
          <span>
            f<span className="text-black">o</span>c
            <span className="text-black">o</span>
          </span>
        </div>
      )}

      <div className="max-w-[40%] flex text-[15px] gap-16 justify-start">
        {["Home", "Menu", "Services", "Contact"].map((item, i) => (
          <div
            key={i}
            className="cursor-pointer transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2"
          >
            {item}
          </div>
        ))}
      </div>

    
      <div className="flex gap-4">
        <button className="text-white px-6 py-2 bg-[#e56023]  rounded-full cursor-pointer font-medium overflow-hidden hover:bg-[#66e7f0] text-outline hover:scale-105 border-1 border-black">
          Sign in
        </button>
        <button className="px-6 text-white text-outline py-2 bg-black border-1 border-black rounded-full cursor-pointer font-medium hover:bg-[#66e7f0] transition delay-75 duration-200 ease-out hover:scale-105">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
