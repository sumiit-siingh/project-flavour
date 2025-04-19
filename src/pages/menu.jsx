import React from "react";
import { motion } from "motion/react"
function Menu() {
    return (
        <div className="min-h-screen p-3">
        <div className="bg-white text-xl pb-2 xl:ml-10
        sm:ml-5  font-semibold text-start ">
          Hey, What's your Food mood?
        </div>
      
        <div className="mt-1 overflow-x-auto">
          <div className="flex xl:grid-cols-9 justify-around ">
            {[
              {
                src: "https://res.cloudinary.com/dq829orud/image/upload/v1745002098/ai-generated-top-view-burger-png_rgdoob.webp",
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
                className="flex flex-col items-center min-w-[100px] max-w-[100px] border-none "
              >
                <img
                  src={item.src}
                  alt={item.lines}
                  className="w-20 h-20 object-cover rounded-full mt-10 hover:drop-shadow-xl/50 drop-shadow-amber-400 hover:scale-130 transition-transform duration-300"
                />
                <p className="mt-2 text-sm text-center font-medium">{item.lines}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white sm:ml-5 md:ml-7 xl:ml-10 mt-15 font-semibold text-xl">Top discounts for you</div>
      </div>
      
    )
}
export default Menu