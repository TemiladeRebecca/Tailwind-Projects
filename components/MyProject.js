//
import Link from 'next/link';

export default function Shortly() {
    return (
        <>
            <section>
                <nav className='flex mx-auto p-6 justify-between text-slate-500'>
                    <div className='flex space-x-20'>
                        <div>
                            <img src='/image/logo.svg' alt=''/>
                        </div>
                        <div className='hidden space-x-8 font-bold lg:flex'>
                            <div>Features</div>
                            <div>Pricing</div>
                            <div>Resources</div>
                        </div>
                    </div>
                    <div className='space-x-8'>
                        <Link href='#' className='text-lg font-bold'>Login</Link>
                        <Link href='#' className='bg-green-400 px-6 py-3 rounded-3xl text-white hover:bg-green-800'>Sign Up</Link>
                    </div>
                </nav>
            </section>
            <section id='features'>
                <div className='flex flex-col-reverse mx-auto p-6 lg:flex-row'>
                    <div className='flex flex-col space-y-8 mb-36 lg:mt-16 lg:w-1/2'>
                        <h1 className='text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left'>More than just shorter Links</h1>
                        <p className='text-2xl text-center text-gray-400 lg:max-w-md lg:text-left'>Build your brands recognition and get detailed insights on how your links are performing.</p>
                    </div>
                    <div className='mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2'>
                        <img src='/image/illustration-working.svg' alt=''/>
                    </div>
                </div>
            </section>
            <section id='link'>
                <div className='w-full mx-auto p-6 space-y-6 md:w-3/4'>
                    <form
                        id="link-form"
                        className="relative flex flex-col p-10 -mt-20 space-y-4 bg-purple-600 rounded-lg md:flex-row md:space-y-0 md:space-x-3">
                        <input
                            type="text"
                            className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
                            placeholder="Shorten a link here"
                            id="link-input"/>

                        <button className='bg-cyan-500 px-8 py-3 rounded-lg shadow-md text-white hover:bg-cyan-700'>Shorten It!</button>
                    </form>
                </div>

                <div className='my-6 w-full mx-auto p-6 space-y-6 md:w-3/4'>
                    <div className='flex flex-col md:flex-row items-center justify-between p-10 bg-white rounded-lg shadow-2xl'>
                        <p className='font-bold text-center text-slate-600 md:text-left'>https://frontendmentor.io</p>
                        <div className='flex flex-col items-center space-x-4 space-y-2 md:flex-row md:space-y-0'>
                            <div className='font-bold text-cyan'>https://rel.ink/k4IKyk</div>
                            <button className='p-2 px-8 text-white bg-cyan-500 rounded-lg hover:opacity-70 focus:outline-none'>
                                Copy
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-between p-10 bg-white rounded-lg shadow-2xl md:flex-row'>
                        <p className='font-bold text-center text-slate-600 md:text-left'>https://frontendmentor.io</p>
                        <div className='flex flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0'>
                            <div className='font-bold text-cyan'>https://rel.ink/k4IKyk</div>
                            <button className='p-2 px-8 text-white bg-purple-700 rounded-lg hover:opacity-70 focus:outline-none'>
                                Copy
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-between p-10 bg-white rounded-lg shadow-2xl md:flex-row'>
                        <p className='font-bold text-center text-slate-600 md:text-left'>https://frontendmentor.io</p>
                        <div className='flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
                            <div className='font-bold text-cyan'>https://rel.ink/k4IKyk</div>
                            <button className='p-2 px-8 text-white bg-cyan-500 rounded-lg hover:opacity-70 focus:outline-none'>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col items-center text-center my-20'>
                    <h1 className='text-4xl font-bold'>Advanced Statistics</h1>
                    <p className='text-slate-500 max-w-md py-4'>Track how your links are performing across the web with our advanced statistics dashboard</p>
                </div>

                <div className='pb-32 px-12'>
                    <div className='relative flex flex-col mx-auto md:flex-row md:space-x-7'>
                        {/*Horizontal Line*/}
                        <div className="hidden absolute top-24 w-10/12 left-24 h-3 bg-cyan-600 md:block"></div>
                        {/*Vertical Line*/}
                        <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
                        
                        <div className='relative flex flex-col bg-white shadow-lg p-6 space-y-6 rounded-lg md:w-1/3'>
                            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                                <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-purple-700">
                                    <img src="/image/icon-brand-recognition.svg" alt="" />
                                </div>
                            </div>
                            <h5 className="pt-6 text-xl font-bold text-gray-400 text-center capitalize md:text-left">Brand Recognition</h5>
                            <p className="text-center text-gray-400 md:text-left">
                                Boost your brand recognition with each click. Generic links don't
                                mean a thing. Branded links help instil confidence in your content.
                            </p>
                        </div>
                        <div className='relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:-mt-8 md:w-1/3'>
                            <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
                                <div className='flex items-center justify-center w-20 h-20 rounded-full bg-purple-700 p-4'>
                                    <img src="/image/icon-detailed-records.svg" alt="" />
                                </div>
                            </div>
                            <h5 className="pt-6 text-xl font-bold text-gray-400 text-center capitalize md:text-left">Fully Customizable</h5>
                            <p className="text-center text-gray-400 md:text-left">
                                Improve brand awareness and content discoverability through
                                customizable links, supercharging audience engagement.
                            </p>
                        </div>
                        <div className='relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:-mt-16 md:w-1/3'>
                            <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
                                <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-purple-700'>
                                    <img src="/image/icon-fully-customizable.svg" alt="" /> 
                                </div>
                            </div>
                            <h5 className="pt-6 text-xl font-bold text-gray-400 text-center capitalize md:text-left">Detailed records</h5>
                            <p className="text-center text-gray-400 md:text-left">
                                Gain insights into who is clicking your links. Knowing when and
                                where people engage with your content helps inform better decisions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-16 bg-blue-900 w-full'>
                  <div className='flex flex-col mx-auto py-20 space-y-6'>
                    <div className='text-center text-white text-4xl font-semibold md:3xl'>Boost Your Links Today</div>
                    <div className='mx-auto text-white py-3 px-8 rounded-full text-2xl bg-cyan-500 hover:bg-cyan-700 hover:scale-105 md:text-base'>Get Started</div>
                  </div>
                </div>
            </section>
            <section id='shortly-footer'>
              <div className='bg-black py-12 text-white'>
                <div className='flex flex-col items-center justify-between mx-auto space-y-16 md:px-6 md:flex-row md:space-y-0 md:items-start'>
                    <div>
                        <img src='/image/logo.svg' alt='' />
                    </div>
                    <div className='flex flex-col space-y-12 md:flex-row md:space-x-18 md:space-y-0'>
                        <div className='flex flex-col items-center md:items-start'>
                            <h6 className='text-base font-bold mb-4'>Features</h6>
                            <div className='flex flex-col items-center space-y-3 md:items-start'>
                                <p>Link Shortening</p>
                                <p>Branded Links</p>
                                <p>Analytics</p>
                            </div>
                            
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <h6 className='text-base font-bold mb-4'>Resources</h6>
                            <div className='flex flex-col items-center space-y-3 md:items-start'>
                                <p>Blog</p>
                                <p>Developers</p>
                                <p>Support</p>
                            </div>
                            
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <h6 className='text-base font-bold mb-4'>Company</h6>
                            <div className='flex flex-col items-center space-y-3 md:items-start'>
                                <p>About</p>
                                <p>Our Team</p>
                                <p>Career</p>
                                <p>Contact</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex flex-row space-x-3'>
                        <img src='/image/icon-facebook.svg' alt='' className='h-8'/>
                        <img src='/image/icon-instagram.svg' alt='' className='h-8'/>
                        <img src='/image/icon-pinterest.svg' alt='' className='h-8'/>
                        <img src='/image/icon-twitter.svg' alt='' className='h-8'/>
                    </div>
                </div>
              </div>
            </section>
        </>
    );
}