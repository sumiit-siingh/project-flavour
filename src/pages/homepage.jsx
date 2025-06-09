import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

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

    <div className={`min-h-screen flex items-center  justify-center w-full ${isDarkMode ? 'bg-gray-700' : 'bg-[#f9dbbd]'} overflow-hidden pt-24 select-none transition-colors duration-300`}>
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dq829orud/image/upload/v1744634683/top-view-delicious-meat-soup-with-potatoes-greens-dark-blue-desk_xh01bu.jpg"
        alt="Soup"
        className={`absolute inset-0 w-full h-full object-cover ${isDarkMode ? 'opacity-30' : 'opacity-70'} blur-[2px]`}
      />

      {/* <div className="w-full md:w-[600px]  h-auto md:h-[600px] flex flex-wrap gap-10 bg-white/40 dark:bg-white/40 backdrop-blur-2xl rounded-4xl p-10"> */}
      {/* Foreground Container */}
      {/* <div className="relative z-10 w-[90%] md:w-[70%] flex justify-center items-center px-4"> */}
        <div className=" w-[90%] max-w-[600px] h-auto md:h-[600px] flex flex-wrap gap-10 bg-white/40 dark:bg-white/40 backdrop-blur-2xl rounded-4xl p-5 md:p-10 overflow-hidden">

          {/* Text Section */}
          <div className="flex-1 min-w-[280px] flex flex-col md:items-center justify-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <h1 className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Your Delicious Mood Food is waiting
              </h1>
              <p className={`text-base max-w-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-serif`}>
                Experience the perfect blend of taste and convenience with our premium food delivery service. Fresh ingredients, expert chefs, and lightning-fast delivery.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => navigate('/menu')}
                className="bg-black text-white px-6 py-2 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl cursor-pointer hover:bg-gray-800 transition-colors"
              >
                View Menu →
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 min-w-[280px] flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dq829orud/image/upload/v1749020555/istockphoto-1348318884-612x612-removebg-preview_pqetqq.png"
              alt="Food"
              className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[400px] max-h-[200px] md:max-h-full h-auto object-contain"
            />
          </div>

        </div>
      {/* </div> */}

    </div>

  );
}

export default Homepage;
