import React from "react";

function Menu() {
  return (
    <div className="min-h-screen bg-red-200 p-3">
      <div className=" pt-10 ">
        {/* White Box with Title and Images */}
        <div className="bg-white mt-10 p-4">
          <div className="text-lg font-semibold mb-4">Hey, What's your Food mood?</div>

          <div className="overflow-x-auto">
            <div className="flex justify-around">
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
                  className="flex flex-col items-center min-w-[100px] max-w-[100px] border-none"
                >
                  <img
                    src={item.src}
                    alt={item.lines}
                    className="w-20 h-20 object-cover rounded-full mt-4 hover:drop-shadow-xl hover:scale-110 transition-transform duration-300"
                  />
                  <p className="mt-2 text-sm text-center font-medium">{item.lines}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Below the image and mood text */}
      <div className="bg-white sm:ml-5 md:ml-7 xl:ml-10 mt-10 font-semibold text-xl">
        Top discounts for you
      </div>
    </div>
  );
}

export default Menu;
