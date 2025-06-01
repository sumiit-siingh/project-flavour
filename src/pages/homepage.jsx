import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Homepage() {
  const { isDarkMode } = useTheme();
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

  const services = [
    {
      title: "Fast Delivery",
      description: "Get your favorite meals delivered to your doorstep within 30 minutes.",
      icon: "🚚"
    },
    {
      title: "Fresh Ingredients",
      description: "We use only the freshest ingredients sourced from local suppliers.",
      icon: "🥬"
    },
    {
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to assist you.",
      icon: "💬"
    }
  ];

  const benefits = [
    "Exclusive discounts for regular customers",
    "Free delivery on orders above $30",
    "Loyalty points system",
    "Special weekend offers"
  ];

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black' : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300'} font-poppins overflow-hidden pt-24 select-none transition-colors duration-300`}>
      <div className="w-[90%] mx-auto pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-2 ${isDarkMode ? 'text-[#ffcc70]' : 'text-yellow-600'}`}>
            Order your
          </div>
          <div className={`text-4xl sm:text-5xl md:text-[3rem] lg:text-[4rem] font-normal mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            favourite foods
          </div>
          <div className={`text-base max-w-md mb-10 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Experience the perfect blend of taste and convenience with our premium food delivery service. Fresh ingredients, expert chefs, and lightning-fast delivery.
          </div>

          {/* Services Section */}
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{service.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Benefits</h2>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <div className={`text-2xl font-light mb-6 ${isDarkMode ? 'text-[#ffcc70]' : 'text-yellow-600'}`}>
              Total order : <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>$24.30</span>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <div className={`flex items-center border ${isDarkMode ? 'border-gray-300' : 'border-gray-400'} rounded-full px-4 py-2`}>
                <span
                  onClick={decrement}
                  className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} cursor-pointer`}
                >
                  ▼
                </span>
                <span className={`mx-4 text-xl font-medium ${isDarkMode ? 'text-white/90' : 'text-gray-800'}`}>
                  {count}
                </span>
                <span
                  onClick={increment}
                  className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} cursor-pointer`}
                >
                  ▲
                </span>
              </div>

              <div className={`${isDarkMode ? 'bg-[#ffcc70]' : 'bg-yellow-500'} font-bold px-8 py-3 rounded-full cursor-pointer flex items-center gap-2`}>
                <span className={`${isDarkMode ? 'bg-[#ffcc70]' : 'bg-yellow-500'} w-6 h-6 rounded-full flex items-center justify-center text-2xl`}>
                  🛒
                </span>
                Buy Now
              </div>
            </div>
          </div>

          {/* Food Carousel */}
          <div className="flex gap-4 items-center flex-wrap">
            <div
              className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-md flex items-center justify-center cursor-pointer`}
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
              className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-md flex items-center justify-center cursor-pointer`}
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
