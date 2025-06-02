import React from "react";
import { CiStar } from "react-icons/ci";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useTheme } from '../context/ThemeContext';

function Menu() {
  const { isDarkMode } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-700 ' : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300'} px-4 transition-colors duration-300`}>
      <div className="pt-10">
        {/* White Box with Title and Images */}
        <div className="mt-10 p-4">
          <div className={`text-lg font-semibold ${isDarkMode ? 'text-amber-600 bg-whit e/80' : 'text-amber-600'} mb-4 lg:ml-6  bg-gr ay-800 rounded-lg  w-fit pl-2 pr-10`}>Hey, your <span className="text-white/80 font-beau-rivage-regular text-3xl font-bold ">Mood  <span className="text-amber-600 font-poppins-regular text-xl"> Got </span> Food?</span> </div>

          <div className="overflow-x-auto">
            <div className="flex justify-around">
              {[
                {
                  src: "https://res.cloudinary.com/dq829orud/image/upload/v1744914196/double-cheeseburger_hyjkss.png",
                  lines: ["Burger"],
                },
                {
                  src: "https://res.cloudinary.com/dq829orud/image/upload/v1745002098/pngtree-chicken-pizza-top-view-png-image_12623725_ieuzjn.png",
                  lines: ["Pizza"],
                },
                {
                  src: "https://res.cloudinary.com/dq829orud/image/upload/v1745057544/png-transparent-north-indian-cuisine-vegetarian-cuisine-thali-south-indian-cuisine-india-removebg-preview_ym6stp.png",
                  lines: ["North Indian"],
                },
                {
                  src: "https://res.cloudinary.com/dq829orud/image/upload/v1745002099/pngtree-breakfast-idli-png-image_16305939_pkt5lt.png",
                  lines: ["South Indian"],
                },
                {
                  src: "https://res.cloudinary.com/dq829orud/image/upload/v1745056453/white-plate-chicken-biryani-top-view-isolated-transparent-background_1232542-72749-removebg-preview_g4iyqi.png",
                  lines: ["Biryani"],
                },
                {
                  src: "https://res.cloudinary.com/dq829orud/image/upload/v1745056704/images__1_-removebg-preview_qkreeu.png",
                  lines: ["Rolls"],
                },
                {
                  src: "https://res.cloudinary.com/dq829orud/image/upload/v1745056648/crispy-paratha-white-plate-top-view-transparent-background_220739-85717-removebg-preview_ufa0eg.png",
                  lines: ["Paratha"],
                },
                {
                  src: "https://res.cloudinary.com/dq829orud/image/upload/v1745056454/spicy-noodles-black-bowl-tasty-asian-food_84443-47621-removebg-preview_tsfikh.png",
                  lines: ["Chinese"],
                },
                {
                  src: "https://res.cloudinary.com/dq829orud/image/upload/v1745056453/delicious-chocolate-birthday-cake-with-candles_632498-24980-removebg-preview_ozrtlf.png",
                  lines: ["Cakes"],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center min-w-[100px] max-w-[150px] ${isDarkMode ?'bg-none':'bg-gray-800 text-white'} rounded-xl p-2`}
                >
                  <img
                    src={item.src}
                    alt={item.lines}
                    className={`w-20 h-20 object-cover rounded-full mt-4 hover:drop-shadow-md  ${isDarkMode ? 'hover:drop-shadow-amber-500' : 'hover:drop-shadow-amber-600'} hover:scale-130 transition-transform duration-400`}
                  />
                  <p className={`mt-2 text-sm text-center   ${isDarkMode ? 'text-[#f2d49c]' : ' font-bold font-poppins-regular'}`}>{item.lines}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Below the image and mood text */}
      <div className={`sm:ml-5 md:ml-7 xl:ml-14 mt-10 font-semibold text-xl ${isDarkMode ? 'text-amber-500' : 'text-amber-600'} text-outline`}>
        Top discounts for you
      </div>
      <div>
        <div className="flex flex-wrap justify-around mt-10">
          {[
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127502/IMG-20250420-WA0016_ae1kp6.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"],
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127502/IMG-20250420-WA0015_nqc8fu.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3 |", "  15-20 mins", "Snacks", "Indirapuram"],
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127500/IMG-20250420-WA0005_axilu7.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3 |", "15-20 mins", "Snacks", "Indirapuram"],
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127501/IMG-20250420-WA0014_yjjslc.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127500/IMG-20250420-WA0007_rv8q84.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127500/IMG-20250420-WA0011_fx7ws2.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127499/IMG-20250420-WA0006_yxlhwm.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127499/IMG-20250420-WA0010_rspj8d.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127498/IMG-20250420-WA0003_fiue3x.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127498/IMG-20250420-WA0004_ovmlfw.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127498/IMG-20250420-WA0009_wktqhs.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127498/IMG-20250420-WA0002_d7arg2.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745127497/IMG-20250420-WA0001_kzsmjd.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
            {
              src: "https://res.cloudinary.com/dq829orud/image/upload/v1745176815/dosa_sulfg5.jpg",
              lines: ["Items @ 99", "Desi Hit", "4.3  |", "15-20 mins", "Snacks", "Indirapuram"]
            },
          ].map((item, index) => {
            const controls = useAnimation();
            const [ref, inView] = useInView({ triggerOnce: true });
          
            useEffect(() => {
              if (inView) {
                controls.start("visible");
              }
            }, [controls, inView]);
          
            const variants = {
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.08,
                },
              },
            };
          
            return (
              <motion.div
                ref={ref}
                key={index}
                initial="hidden"
                animate={controls}
                variants={variants}
                className={`${isDarkMode ? 'text-amber-700 bg-white/80'  : 'text-amber-600'} mb-10 xl:text-[15px] bg-gray-800 rounded-xl p-2 text-xs overflow-hidden`}
              >
                <div className="w-[15rem] h-[10rem] rounded-xl overflow-hidden mx-auto">
                  <motion.img
                    className="w-full h-full object-cover cursor-pointer"
                    src={item.src}
                    alt={item.lines}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
          
                <div className="cursor-pointer rounded-full -translate-y-4">
                  <a className={`block -translate-y-9 ${isDarkMode ? 'text-white' : 'text-gray-300'} font-extrabold text-sm w-full text-outline xl:text-2xl text-center lg:text-xl md:text-xl`}>
                    {item.lines[0]}
                  </a>
          
                  <div className="flex items-center flex-col">
                    <a className="font-bold">{item.lines[1]}</a>
                    <div className="flex">
                      <a className="flex items-center">
                        <CiStar className="text-green-300" />
                        {item.lines[2]}
                      </a>
                      <a className="ml-2">{item.lines[3]}</a>
                    </div>
                    <a>{item.lines[4]}</a>
                    <a>{item.lines[5]}</a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
