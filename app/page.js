//
// import { useState } from "react";
import Link from 'next/link';

export default function LoginPage() {
    // const [setLogin, createSetLogin] = useState({name: '', email:'', password:''});

    // const loginDetailsHandler = (event) => {
    //     const {name, value} = event.target;
    //     createSetLogin((prevValue) => ({...prevValue, [name]: value}))
    // }
    return (
        <>
            <div className="flex min-h-screen justify-center items-center bg-blue-400">
                <div className="flex flex-col w-full max-w-md px-4">
                    <div className="flex flex-col bg-white rounded-lg px-10 py-14 w-full shadow-xl">
                        <div className="flex flex-col space-y-6 w-full">
                            <input
                            name='name'
                            // value={setLogin.name}
                            // onChange={loginDetailsHandler} 
                            className='block w-full h-14 pl-4 outline-none border-2 rounded-lg placeholder:text-sm'
                            placeholder="Enter your name"/>
                            <input
                            name='email'
                            // value={setLogin.email}
                            // onChange={loginDetailsHandler}
                            className='block w-full h-14 pl-4 outline-none border-2 rounded-lg placeholder:text-sm'
                            placeholder="Enter your email"/>
                            <input
                            // value={setLogin.password}
                            name='password' 
                            // onChange={loginDetailsHandler}
                            className='block w-full h-14 pl-4 outline-none border-2 rounded-lg placeholder:text-sm'
                            placeholder="Enter your password"/>
                            <Link className='text-cyan-700' href='#'>Forgot password?</Link>
                            <button className="flex items-center justify-center w-full px-12 py-6 bg-cyan-700 text-white text-lg rounded-md md:w-auto font-semibold hover:bg-opacity-90 shadow-sm shadow-cyan-100 transition hover:-translate-y-0.5 duration-150">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
