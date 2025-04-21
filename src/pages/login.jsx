import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { LuEyeClosed, LuEye } from "react-icons/lu";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';


const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false); // State to manage visibility

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); // Toggle password visibility
    };

    const navigate = useNavigate()
    function getFocused() {
        document.getElementById("email").focus()
    }
    return (
        <div className="relative w-full h-screen backdrop- bg-black flex justify-center items-center ">
            <img
                src="https://res.cloudinary.com/dq829orud/image/upload/v1744634683/top-view-delicious-meat-soup-with-potatoes-greens-dark-blue-desk_xh01bu.jpg"
                alt="Soup"
                className="w-full h-auto opacity-20 blur-[2px]"
            />
            <div className='overflow-hidden opacity-70 shadow-2xl border-amber-400 bg-[#0a0909] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[70%] max-h-[33rem] w-[90%] max-w-[50rem] rounded-2xl border-1'><img alt='image' className='opacity-100 object-fill sm:h-130 overflow-hidden ' src='https://res.cloudinary.com/dq829orud/image/upload/v1744637452/bg-removed-login_xga83m.png'></img>
                <div className='flex flex-col gap-y-3 bg-[#151515] absolute top-[60px] left-[60px] h-[75%] max-h-[25rem] w-[80%] max-w-[16rem] rounded-lg'>
                    <div className='text-center text-lg md:text-xl font-bold  translate-y-2 text-amber-500 transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>Hey, there !</div>
                    <div className=' translate-y-2 text-xs translate-x-3 text-amber-400'>Email</div>
                    <input id='email' className=' h-9 p-2 border-none bg-white  text-xs text-shadow-xs outline-amber-300 ml-3 mr-3 rounded-lg ' placeholder='username@gmail.com' />

                    <div>
                        <div className='text-amber-400 translate-y-2 translate-x-3 text-xs'>Password</div>
                        <div className="relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                className='bg-white h-9 w-58 rounded-lg pr-18 outline-amber-300 text-xs text-shadow-xs rounded-l-lg mt-3 ml-3 p-3'
                                placeholder='Password'
                            />

                            <div
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 mt-1 rounded-r-lg transform -translate-y-10 h-9 bg-white cursor-pointer -pl-3"
                            >
                                {passwordVisible ? (
                                    <LuEye className="mr-2 h-9 w-5 text-gray-600" />
                                ) : (
                                    <LuEyeClosed className="mr-2 h-9 w-5 text-gray-600" />
                                )}
                            </div>
                        </div>
                    </div>


                    <div className='text-white text-right  -translate-y-2 -translate-x-2 text-xs cursor-pointer mr-1'>Forgot Password ?</div>
                    <div className='' onCli ck={() => navigate('/')}><div className='bg-amber-500 text-white flex items-center justify-center text-xs font-bold rounded-lg h-8 cursor-pointer mr-3 ml-3 ' onClick={getFocused}>Log in</div></div>
                    <div className='text-white text-xs text-center translate-y-1'>or Continue with</div>
                    <div className='flex justify-around  translate-y-3 h-7'>
                        <div className='bg-white h-[110%] w-[20%] rounded-4xl flex cursor-pointer items-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white'><div><FcGoogle className='bg-white  ' /></div></div>
                        <div className='bg-white h-[110%] w-[20%] rounded-3xl cursor-pointer flex items-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '><div><FaGithub className='bg-white ' /></div></div>
                        <div className='bg-white h-[110%] w-[20%] rounded-2xl flex items-center justify-center cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '> <div ><FaFacebook className='bg-white   ' /></div></div>

                    </div>
                    <div className='flex justify-around translate-y-3'>
                        <div className='text-white text-xs'>Don't have an account?</div>
                        <div className='text-white text-xs'><a className='text-amber-600' href='/signup'>Register</a> for free</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login;