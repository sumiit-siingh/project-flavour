import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LuEyeClosed, LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signup, isAuthenticated } = useAuth();
    const { isDarkMode } = useTheme();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            await signup(name, email, password);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed. Please try again.');
        }
    };

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-black' : 'bg-gray-100'} flex items-center justify-center transition-colors duration-300`}>
            <img
                src="https://res.cloudinary.com/dq829orud/image/upload/v1744634683/top-view-delicious-meat-soup-with-potatoes-greens-dark-blue-desk_xh01bu.jpg"
                alt="Soup"
                className={`absolute inset-0 w-full h-full object-cover ${isDarkMode ? 'opacity-20' : 'opacity-10'} blur-[2px]`}
            />
            <div className={`relative w-[90%] max-w-[400px] aspect-square ${isDarkMode ? 'bg-[#0a0909]' : 'bg-white'} rounded-2xl border border-amber-400 shadow-2xl overflow-hidden transition-colors duration-300`}>
                <div className="flex h-full">
                    {/* Image Section */}
                    <div className="hidden md:block w-1/2 h-full">
                        <img 
                            alt='signup background' 
                            className='w-full h-full object-cover'
                            src='https://res.cloudinary.com/dq829orud/image/upload/v1744637452/bg-removed-login_xga83m.png'
                        />
                    </div>

                    {/* Form Section */}
                    <div className={`w-full md:w-1/2 p-3 md:p-4 ${isDarkMode ? 'bg-[#151515]' : 'bg-gray-50'} flex items-center transition-colors duration-300`}>
                        <form onSubmit={handleSignup} className='w-full space-y-4'>
                            <div className='text-center text-base md:text-lg font-bold text-amber-500 transition-all duration-300 hover:scale-105'>
                                Create Account
                            </div>
                            
                            {error && (
                                <div className='text-red-500 text-xs text-center'>{error}</div>
                            )}

                            <div className='space-y-2'>
                                <div className='w-[90%] mx-auto'>
                                    <label className='text-amber-400 text-xs block text-left mb-1'>Name</label>
                                    <input 
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className={`w-full p-2 ${isDarkMode ? 'bg-white' : 'bg-gray-100'} text-xs rounded-lg outline-amber-300 focus:ring-1 focus:ring-amber-300 transition-colors duration-300`}
                                        placeholder='Enter your full name'
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className='space-y-2'>
                                <div className='w-[90%] mx-auto'>
                                    <label className='text-amber-400 text-xs block text-left mb-1'>Email</label>
                                    <input 
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={`w-full p-2 ${isDarkMode ? 'bg-white' : 'bg-gray-100'} text-xs rounded-lg outline-amber-300 focus:ring-1 focus:ring-amber-300 transition-colors duration-300`}
                                        placeholder='username@gmail.com'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <div className='w-[90%] mx-auto'>
                                    <label className='text-amber-400 text-xs block text-left mb-1'>Password</label>
                                    <div className="relative">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={`w-full p-2 ${isDarkMode ? 'bg-white' : 'bg-gray-100'} rounded-lg outline-amber-300 focus:ring-1 focus:ring-amber-300 text-xs transition-colors duration-300`}
                                            placeholder='Create a password'
                                            required
                                            minLength={6}
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className={`absolute right-2 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-600 hover:text-gray-800' : 'text-gray-500 hover:text-gray-700'} cursor-pointer transition-colors duration-300`}
                                        >
                                            {passwordVisible ? (
                                                <LuEye className="w-3.5 h-3.5" />
                                            ) : (
                                                <LuEyeClosed className="w-3.5 h-3.5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[90%] mx-auto'>
                                <button 
                                    type="submit"
                                    className='w-full bg-amber-500 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors focus:ring-1 focus:ring-amber-300 focus:ring-offset-1 cursor-pointer'
                                >
                                    Sign up
                                </button>
                            </div>

                            <div className={`${isDarkMode ? 'text-white' : 'text-gray-700'} text-xs text-center`}>or Continue with</div>

                            <div className='flex justify-center gap-2'>
                                <button type="button" className={`p-1.5 ${isDarkMode ? 'bg-white' : 'bg-gray-100'} rounded-full hover:scale-110 transition-transform cursor-pointer`}>
                                    <FcGoogle className='w-4 h-4' />
                                </button>
                                <button type="button" className={`p-1.5 ${isDarkMode ? 'bg-white' : 'bg-gray-100'} rounded-full hover:scale-110 transition-transform cursor-pointer`}>
                                    <FaGithub className='w-4 h-4' />
                                </button>
                                <button type="button" className={`p-1.5 ${isDarkMode ? 'bg-white' : 'bg-gray-100'} rounded-full hover:scale-110 transition-transform cursor-pointer`}>
                                    <FaFacebook className='w-4 h-4 text-blue-600' />
                                </button>
                            </div>

                            <div className={`flex justify-center gap-1 text-xs ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                                <span>Already have an account?</span>
                                <a href='/login' className='text-amber-500 hover:text-amber-400 transition-colors'>
                                    Log in
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;