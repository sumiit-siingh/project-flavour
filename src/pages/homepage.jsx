import React, { useState } from "react";

function Homepage() {
  const [count, setCount] = useState(7);
  const increment = () => {
    setCount((x) => x + 1);
  };
  const decrement = () => {
    setCount((x) => (x > 0 ? x - 1 : 0));
  };
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
    <div className="min-h-screen w-full bg-gray-100 font-poppins overflow-hidden pt-24 select-none">
      <div className="w-[90%] mx-auto pt-12 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="text-6xl md:text-8xl font-bold leading-tight mb-2">
            Order your
          </div>
          <div className="text-6xl md:text-[4rem] font-normal mb-6">
            favourite foods
          </div>

          <div className="text-base text-gray-600 max-w-md mb-10">
            Fresh and tasty seafood curry sit amet, consectetur Curabitur
            accumsan auctor pulvinar proin sit amet.
          </div>

          <div className="mb-12">
            <div className="text-2xl font-light mb-6">
              Total order : <span className="font-bold">$24.30</span>
            </div>

            <div className="flex items-center gap-6 flex-wrap select-none">
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                <span
                  onClick={decrement}
                  className="text-gray-400 cursor-pointer"
                >
                  ▼
                </span>
                <span className="mx-4 text-xl font-medium">{count}</span>
                <span
                  onClick={increment}
                  className="text-gray-400 cursor-pointer"
                >
                  ▲
                </span>
              </div>

              <div className="bg-gray-900 text-white px-8 py-3 rounded-full cursor-pointer flex items-center gap-2">
                <span className="bg-yellow-300 text-gray-900 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  🛒
                </span>
                Buy Now
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center flex-wrap">
            <div
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer"
              onClick={handlePrev}
            >
              ◀
            </div>

            <div className="flex gap-4 transition-all duration-300 ease-in-out">
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

        <div className="relative flex justify-center overflow-visible">
          <img
            src="https://res.cloudinary.com/dpwqggym0/image/upload/v1744543029/istockphoto-2074939734-612x612-removebg-preview_zxqsdx.png"
            alt="background"
            className="absolute right-[-50%] top scale-210 z-0 opacity-100  "
          />

          <div className="z-1 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dpwqggym0/image/upload/v1745103077/erasebg-transformed_mwsgcy.png"
              alt="Salad"
              className="h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
