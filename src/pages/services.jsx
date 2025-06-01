import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Services() {
    const { isDarkMode } = useTheme();

    return (
        <div className={`min-h-screen overflow-hidden flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black' : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300'} px-4 relative transition-colors duration-300`}>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                {/* === Card Component === */}
                {[
                    {
                        src: "https://res.cloudinary.com/dq829orud/image/upload/v1744914196/double-cheeseburger_hyjkss.png",
                        lines: ["Order", "Mood ", "food"]
                    },
                    {
                        src: "https://res.cloudinary.com/dq829orud/image/upload/v1744926270/blend-archive-gzAqZM831kc-unsplash-removebg-preview_lmgziy.png",
                        lines: ["Order", "Ch", "ef"]
                    },
                    {
                        src: "https://res.cloudinary.com/dq829orud/image/upload/v1744920528/pexels-rajesh-tp-749235-1633525-removebg-preview_z4rptf.png",
                        lines: ["Order", "Groc", "eries"]
                    }
                ].map((item, index) => (
                    <div key={index} className={`relative w-full max-w-sm mx-auto border-1 ${isDarkMode ? 'border-amber-400' : 'border-amber-600'} rounded-xl overflow-hidden translate-y-1 hover:shadow-2xl hover:scale-110 transition-transform`}>
                        {/* Text Positioned Above Image */}
                        <div className="absolute top-4 left-0 w-full text-center">
                            <a className={`font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-md/70 ${isDarkMode ? 'text-[#ffcc70]' : 'text-amber-600'} block`}>
                                {item.lines[0]}
                            </a>
                            <a className={`font-extrabold text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-md/70 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                {item.lines[1]}
                            </a>
                            <a className={`font-extrabold text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg/50 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                {item.lines[2]}
                            </a>
                        </div>

                        {/* Image */}
                        <img
                            className={`w-full hover:drop-shadow-xl/50 ${isDarkMode ? 'drop-shadow-amber-400' : 'drop-shadow-amber-600'} hover:scale-110 transition-transform`}
                            src={item.src}
                            alt="image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
