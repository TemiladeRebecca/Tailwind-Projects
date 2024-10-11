//

export default function LoginModal() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-rose-50'>
            <div className='relative flex flex-col m-6 md:flex-row md:space-x-0 md:m-0 shadow-2xl'>
                <div className="flex flex-col p-10 bg-white rounded-2xl md:flex-row md:rounded-l-2xl">
                    <div className='space-y-10'>
                        <h1 className='font-semibold font-serif text-4xl -mt-6 md:mt-8'>Log In</h1>
                        <div className='text-zinc-700 mb-12 max-w-sm'>Log in to your account to upload or download pictures, videos or music.</div>
                        <input type='text' placeholder='Enter your email address' className='w-full h-16 pl-4 placeholder:text-zinc-500 font-thin border border-zinc-400 rounded-md'/>
                        <div className='flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0'>
                            <div className='text-cyan-700'>Forgot password?</div>
                            <button className='flex items-center justify-center w-full px-12 py-6 bg-cyan-700 text-white rounded-md md:w-auto font-semibold hover:bg-opacity-90 shadow-sm shadow-cyan-100 transition hover:-translate-y-0.5 duration-150'>
                                <span>Next</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-7"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#ffffff"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <line x1="13" y1="18" x2="19" y2="12" />
                                    <line x1="13" y1="6" x2="19" y2="12" />
                                </svg>
                            </button>
                        </div>
                        <div className='mb-6 border-t border-zinc-300'></div>
                        <p className='font-thin text-zinc-400 text-sm text-center'>or log in with</p>
                        <div className='flex flex-col text-zinc-500 space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
                            <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
                                <img src='/images/facebook.png' alt='' className='w-9'/>
                                <span>Facebook</span>
                            </button>

                            <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
                                <img src='/images/google.png' alt='' className='w-9'/>
                                <span>Google</span>
                            </button>
                        </div>
                    </div> 
                </div>
                <div className='rounded-r-2xl w-[450px]'>
                    <img className='hidden md:block' src='/images/image.jpg' alt=''/>
                </div>
                <div className="group absolute top-4 right-10 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black group-hover:text-gray-600"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
          >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
            </div>
        </div>
    );

}