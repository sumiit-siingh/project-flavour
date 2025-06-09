

import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const menuItems = ["Home", "Menu", "Services", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  const getPath = (item) => {
    return item.toLowerCase().replace(/\s+/g, "");
  };

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  return (
    <nav className={`${isDarkMode ? 'backdrop-blur-3xl' : ' backdrop-blur-3xl'} shadow-lg p-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 `}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <button onClick={toggleTheme}> <Link  className={`${isDarkMode ? 'text-white hover:text-amber-400' : 'text-gray-800 '} transition-colors duration-300`}>
            <span className={isDarkMode ? 'text-amber-400 font-beau-rivage-regular text-xl font-extrabold' : ' font-beau-rivage-regular text-xl  text-black'}>MOOD</span> G <span className={isDarkMode ? 'text-amber-400 font-beau-rivage-regular text-xl font-bold' : ' font-beau-rivage-regular text-xl text-black font-bold'}>FOOD</span>
          </Link></button>

        </div>
       

        {/* Welcome Message */}
        {isAuthenticated && (
          <div className={`${isDarkMode ? 'text-white' : 'text-gray-800'} text-lg font-medium`}>
            Welcome, <span className={isDarkMode ? 'text-amber-400' : 'text-[#450920]'}>{capitalizeFirstLetter(user.name)}</span>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-medium text-lg">
          {menuItems.map((item, i) => (
            <li key={i}>
              <NavLink
                to={`/${getPath(item)}`}
                className={({ isActive }) =>
                  isActive
                    ? `${isDarkMode ? 'text-amber-400' : 'text-amber-600'} font-semibold`
                    : `${isDarkMode ? 'text-white hover:text-amber-400' : 'text-gray-800 hover:text-amber-600'} transition-colors duration-300`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle and Auth/Profile Section */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}
          >
            {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                <FaUserCircle className={`text-2xl ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                <span>{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className={`px-6 py-2 ${isDarkMode ? 'text-white bg-black border-white' : 'text-gray-800 bg-white border-gray-800'} border rounded-full cursor-pointer font-medium transition-all duration-300 hover:bg-opacity-90 focus:outline-none`}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className={`px-6 py-2 ${isDarkMode ? 'text-white bg-black border-white' : 'text-gray-800 bg-white border-gray-800'} border rounded-full cursor-pointer font-medium transition-all duration-300 hover:bg-opacity-90 focus:outline-none`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`text-white px-6 py-2 ${isDarkMode ? 'bg-[#e56023] hover:bg-[#d4551d]' : 'bg-amber-600 hover:bg-amber-700'} rounded-full cursor-pointer font-medium transition-all duration-300 focus:outline-none`}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="relative z-[60]">
          <button
            onClick={toggleMenu}
            className={`${isDarkMode ? 'text-white hover:text-amber-400 hover:bg-gray-800' : 'text-gray-800 hover:text-amber-600 hover:bg-gray-200'} transition-colors duration-300 p-2 rounded-lg`}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl transform transition-transform duration-300 hover:rotate-90" />
            ) : (
              <FaBars className="text-2xl transform transition-transform duration-300 hover:rotate-180" />
            )}
          </button>
        </div>
      </div>

      {/* Side Panel Menu */}
      <div
        className={`fixed top-[72px] right-0 w-[300px] h-[calc(100vh-72px)] ${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-100 to-gray-200'} transform transition-all duration-300 ease-in-out z-[55] rounded-tl-xl ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="px-4 pt-6 pb-8 space-y-6 h-full overflow-y-auto">
          {/* Theme Toggle for Mobile */}


          {isAuthenticated && (
            <div
              onClick={() => {
                navigate('/profile');
                toggleMenu();
              }}
              className={`flex items-center gap-3 p-4 ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70' : 'bg-white/50 border-gray-200 hover:bg-white/70'} rounded-xl border cursor-pointer transition-colors duration-300`}
            >
              <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-amber-400 text-gray-900' : 'bg-amber-600 text-white'} flex items-center justify-center font-bold text-xl`}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className={isDarkMode ? 'text-white' : 'text-gray-800'}>{capitalizeFirstLetter(user.name)}</p>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{user.email}</p>
              </div>
            </div>
          )}

          <ul className="space-y-4">
            {menuItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={`/${getPath(item)}`}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                      ? `${isDarkMode ? 'bg-amber-400 text-gray-900' : 'bg-amber-600 text-white'} font-semibold`
                      : isDarkMode
                        ? 'text-white hover:bg-gray-800'
                        : 'text-gray-800 hover:bg-gray-200'
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={`pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className={`w-full px-4 py-3 ${isDarkMode ? 'text-white bg-black border-white' : 'text-gray-800 bg-white border-gray-800'} border rounded-xl cursor-pointer font-medium transition-all duration-300 hover:bg-opacity-90 focus:outline-none`}
              >
                Logout
              </button>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className={`block w-full text-center px-4 py-3 ${isDarkMode ? 'text-white bg-black border-white' : 'text-gray-800 bg-white border-gray-800'} border rounded-xl cursor-pointer font-medium transition-all duration-300 hover:bg-opacity-90 focus:outline-none`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={toggleMenu}
                  className={`block w-full text-center px-4 py-3 text-white ${isDarkMode ? 'bg-[#e56023] hover:bg-[#d4551d]' : 'bg-amber-600 hover:bg-amber-700'} rounded-xl cursor-pointer font-medium transition-all duration-300 focus:outline-none`}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;