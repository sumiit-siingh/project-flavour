import React, { useState } from "react";

function Homepage() {
  const [count, setCount] = useState(7);
  const increment = () => setCount((x) => x + 1);
  const decrement = () => setCount((x) => (x > 0 ? x - 1 : 0));

  const foodItems = [
    { name: "Burger", price: "$3.25", color: "bg-green-100" },
    { name: "Cake", price: "$2.25", color: "bg-pink-100" },
    { name: "Salad", price: "$5.25", color: "bg-orange-100" },
    { name: "Pizza", price: "$6.75", color: "bg-yellow-100" },
    { name: "Fries", price: "$2.75", color: "bg-blue-100" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, foodItems.length - visibleCount)
    );
  };

  const visibleItems = foodItems.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black font-poppins overflow-hidden pt-24 select-none">
      <div className="w-[90%] mx-auto pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <div className="text-[#ffcc70] text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-2">
            Order your
          </div>
          <div className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[4rem] text-white font-normal mb-6">
            favourite foods
          </div>
          <div className="text-base text-gray-400 max-w-md mb-10">
            Fresh and tasty seafood curry sit amet, consectetur Curabitur
            accumsan auctor pulvinar proin sit amet.
          </div>

          <div className="mb-12">
            <div className="text-2xl text-[#ffcc70] font-light mb-6">
              Total order : <span className="font-bold text-white">$24.30</span>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                <span
                  onClick={decrement}
                  className="text-gray-400 cursor-pointer"
                >
                  ▼
                </span>
                <span className="mx-4 text-xl text-white/90 font-medium">
                  {count}
                </span>
                <span
                  onClick={increment}
                  className="text-gray-400 cursor-pointer"
                >
                  ▲
                </span>
              </div>

              <div className="bg-[#ffcc70] font-bold px-8 py-3 rounded-full cursor-pointer flex items-center gap-2">
                <span className="bg-[#ffcc70] w-6 h-6 rounded-full flex items-center justify-center text-2xl">
                  🛒
                </span>
                Buy Now
              </div>
            </div>
          </div>

          {/* Food Carousel */}
          <div className="flex gap-4 items-center flex-wrap">
            <div
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer"
              onClick={handlePrev}
            >
              ◀
            </div>

            <div className="flex gap-4 transition-all duration-300 ease-in-out overflow-x-auto">
              {visibleItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} px-6 py-4 rounded-full text-center min-w-[120px]`}
                >
                  <div>{item.name}</div>
                  <div className="font-bold">{item.price}</div>
                </div>
              ))}
            </div>

            <div
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer"
              onClick={handleNext}
            >
              ▶
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center items-center overflow-visible">
          {/* Background Image */}
          <img
            src="https://res.cloudinary.com/dpwqggym0/image/upload/v1744543029/istockphoto-2074939734-612x612-removebg-preview_zxqsdx.png"
            alt="background"
            className="absolute right-[-80%] sm:right-[-60%] md:right-[-50%] top-0 scale-[2.1] sm:scale-[1.7] md:scale-[1.5] z-0 opacity-100"
          />

          {/* Front Image */}
          <div className="z-10 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dpwqggym0/image/upload/v1745103077/erasebg-transformed_mwsgcy.png"
              alt="Salad"
              className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
