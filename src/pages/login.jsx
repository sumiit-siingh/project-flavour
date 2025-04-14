import React from 'react';

function Login() {
    return (
        <div className="relative w-full h-screen backdrop- bg-black flex justify-center items-center ">
            <img
                src="https://res.cloudinary.com/dq829orud/image/upload/v1744634683/top-view-delicious-meat-soup-with-potatoes-greens-dark-blue-desk_xh01bu.jpg"
                alt="Soup"
                className="w-full h-auto opacity-20"
            />
            <div className='overflow-hidden opacity-70 shadow-2xl shadow-white bg-[#0a0909] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[70%] max-h-[33rem] w-[90%] max-w-[50rem] rounded-2xl '><img alt='image'  className='opacity-100 object-fill w-full h-auto' src='https://res.cloudinary.com/dq829orud/image/upload/v1744637452/bg-removed-login_xga83m.png'></img>
            <div className='flex flex-col gap-y-5 bg-[#656969] absolute top-[60px] left-[60px] h-[60vh] max-h-[25rem] w-[80%] max-w-[16rem]  rounded-lg '>
                <div className='text-center text-lg md:text-xl font-bold  p-2 rounded-t-lg text-white'>Login</div>
                <div className=' text-white'>Email</div>
                <input  className=' outline-0 h-9 border-none bg-white ' placeholder='username@gmail.com'/>
                <div className='text-white'>Password</div>
                <input className='bg-white h-9 border-none outline-0' placeholder='Password'/>
            </div>
            </div>
        </div>

    )
}
export default Login;