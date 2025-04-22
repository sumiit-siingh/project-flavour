import React from 'react';
import { LuEyeClosed, LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';
function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false); // State to manage visibility

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); // Toggle password visibility
    }
    return (
        <div className="relative w-full h-screen backdrop- bg-black flex justify-center items-center ">
            <img
                src="https://res.cloudinary.com/dq829orud/image/upload/v1744634683/top-view-delicious-meat-soup-with-potatoes-greens-dark-blue-desk_xh01bu.jpg"
                alt="Soup"
                className="w-full h-screen opacity-20 blur-[2px]"
            />
            <div className='overflow-hidden opacity-70 shadow-2xl border-amber-400 bg-[#0a0909] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[70%] max-h-[33rem] w-[90%] max-w-[50rem] rounded-2xl border-1'><img alt='image' className='opacity-100 object-fill w-full h-auto sm:h-120 ' src='https://res.cloudinary.com/dq829orud/image/upload/v1744637452/bg-removed-login_xga83m.png'></img>
                <div className='flex flex-col gap-y-2 bg-[#151515] absolute top-[60px] left-[60px] h-[80%] max-h-[30rem] w-[80%] max-w-[16rem] border-1 rounded-lg '>
                    <div className='text-center text-lg md:text-xl font-bold  translate-y-2 text-amber-500 '>Create Account</div>
                    <div className=' text-amber-400
                     translate-y-1 text-xs translate-x-3'>Name</div>
                    <input className='mr-3 ml-3 h-9 p-2 border-none bg-white rounded-lg text-xs text-shadow-xs outline-amber-300 ' placeholder='Full name' />
                    <div className=' text-amber-400 translate-y-1 text-xs translate-x-3'>Email</div>
                    <input className=' h-9 p-2 border-none bg-white rounded-lg text-xs text-shadow-xs outline-amber-300 mr-3 ml-3' placeholder='username@gmail.com' />

                    <div>
                        <div className='text-amber-400 translate-y-2 translate-x-3 text-xs'>Password</div>
                        <div className="relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                className='bg-white h-9  w-58 rounded-lg pr-18 outline-amber-300 text-xs text-shadow-xs rounded-l-lg mt-3 ml-3 p-3'
                                placeholder='Password'
                            />

                            <div
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 mt-1 rounded-r-lg transform -translate-y-10 h-9 bg-white cursor-pointer -pl-3"
                            >
                                {passwordVisible ? (
                                    <LuEye className="mr-3 h-9 w-5 text-gray-600" />
                                ) : (
                                    <LuEyeClosed className="mr-3 h-9 w-4 text-gray-600" />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='text-white text-right  -translate-y-1 -translate-x-4 text-xs cursor-pointer'>Forgot Password ?</div>
                    <div className='bg-amber-500 text-white flex items-center justify-center text-xs font-bold rounded-lg h-8 cursor-pointer -translate-y-2 ml-3 mr-3'>Sign up</div>
                    <div className='text-white text-xs text-center -translate-y-1'>or Continue with</div>
                    <div className='flex justify-around  translate-y-1 h-7'>
                        <div className='bg-white h-[110%] w-[20%] rounded-2xl flex items-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '><div><FcGoogle className='bg-white  rounded-3xl text-lg cursor-pointer' /></div></div>
                        <div className='bg-white h-[110%] w-[20%] rounded-2xl flex items-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '><div><FaGithub className='bg-white  rounded-3xl cursor-pointer' /></div></div>
                        <div className='bg-white h-[110%] w-[20%] rounded-2xl flex items-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '> <div ><FaFacebook className='bg-white    rounded-3xl cursor-pointer' /></div></div>

                    </div>
                    <div className='flex justify-around translate-y-3'>
                        <div className='text-white text-xs'>Already have an account?</div>
                        <div className='text-white text-xs'><a className='text-amber-600' href='/login'>Log in </a> here</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Signup;