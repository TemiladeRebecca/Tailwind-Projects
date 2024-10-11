'use client';

import { useState } from 'react';
import { toggleMenu } from '../utils/menuToggle';
import Link from 'next/link';

export default function HomePage() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        toggleMenu();
    }
    return(
        <>
            <section id='hero'>
                <div className='flex flex-col max-w-6xl px-6 py-12 mx-auto'>
                    <nav className='flex items-center justify-between text-white'>
                        <img src='/images/logo.svg' alt='' />   
                        <div className='hidden text-lg font-serif font-bold md:flex md:space-x-6'>
                            <div className='group'>
                                <Link href='#'>About</Link>
                                <div className='border-b-2 border-transparent group-hover:border-white transition duration-300 mx-2 mt-2'></div>
                            </div>
                            <div className='group'>
                                <Link href='#'>Career</Link>
                                <div className='border-b-2 border-transparent group-hover:border-white transition duration-300 mx-2 mt-2'></div>
                            </div>
                            <div className='group'>
                                <Link href='#'>Events</Link>
                                <div className='border-b-2 border-transparent group-hover:border-white transition duration-300 mx-2 mt-2'></div>
                            </div>
                            <div className='group'>
                                <Link href='#'>Products</Link>
                                <div className='border-b-2 border-transparent group-hover:border-white transition duration-300 mx-2 mt-2'></div>
                            </div>
                            <div className='group'>
                                <Link href='#'>Support</Link>
                                <div className='border-b-2 border-transparent group-hover:border-white transition duration-300 mx-2 mt-2'></div>
                            </div>
                        </div>
                        {/*Hamburger button */}
                        <div className='md:hidden'>
                            <button
                                id='menu-btn'
                                type='button'
                                className='hamburger z-40 block md:hidden focus:outline-none'
                                onClick={handleMenuToggle}>
                                    <span className='hamburger-top'></span>
                                    <span className='hamburger-middle'></span>
                                    <span className='hamburger-bottom'></span>
                            </button>
                        </div>

                        <div id="menu"
                            className="absolute top-0 bottom-0 left-0 hidden flex-col w-full pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
                            <Link href="#" className="hover:text-pink-500">About</Link>
                            <Link href="#" className="hover:text-pink-500">Careers</Link>
                            <Link href="#" className="hover:text-pink-500">Events</Link>
                            <Link href="#" className="hover:text-pink-500">Products</Link>
                            <Link href="#" className="hover:text-pink-500">Support</Link>
                         </div>
                    </nav>
                    <div className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'>Impressive Experiences that Deliver</div>
                </div>
            </section>
            <section id='features'>
                <div className='relative flex flex-col max-w-6xl mx-auto my-8 px-8 md:flex-row md:px-0 md:mx-6'>
                    <img className='md:w-3/4' src='/images/desktop/image-interactive.jpg' alt=''/>
                    <div className='bg-white md:absolute md:right-0 md:bottom-0 md:py-20 md:pl-24'>
                        <h3 className='max-w-lg mt-10 mb-6 font-serif text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left'>The leader in interactive vr</h3>
                        <p className='max-w-md text-center md:text-left'>To quickly generate placeholder text, like "Lorem ipsum," without manually typing it out, you can use a few different methods</p>
                    </div>
                </div>          
            </section>
            <section id='image-features'>
                <div className='max-w-6xl my-32 mx-auto px-6 md:px-0'>
                    <div className='flex justify-center md:justify-between mb-20'>
                        <h2 className='text-4xl text-center uppercase md:text-5xl'>Our Creations</h2>
                        <button className='hidden btn md:block'>See All</button>
                    </div> 

                    <div className='flex flex-col justify-between uppercase space-y-6 text-2xl px-4 md:flex-row md:space-y-0 md:space-x-6'>
                        <div className='group item'>
                            <img className='w-full hidden md:block duration-200 group-hover:scale-110' src='/images/desktop/image-curiosity.jpg' alt='' />
                            <img className='w-full md:hidden duration-200 group-hover:scale-110' src='/images/mobile/image-curiosity.jpg' alt='' />
                            <div className='itemGradient'></div>
                            <h5>Deep Earth</h5>
                        </div>

                        <div className='group item'>
                            <img className='hidden w-full md:block duration-200 group-hover:scale-110' src='/images/desktop/image-deep-earth.jpg' alt='' />
                            <img className='w-full md:hidden duration-200 group-hover:scale-110' src='/images/mobile/image-deep-earth.jpg' alt='' />
                            <div className='itemGradient'></div>
                            <h5>Soccer Team</h5>
                        </div>

                        <div className='group item'>
                            <img className='hidden w-full md:block duration-200 group-hover:scale-110' src='/images/desktop/image-fisheye.jpg' alt='' />
                            <img className='w-full md:hidden duration-200 group-hover:scale-110' src='/images/mobile/image-fisheye.jpg' alt='' />
                            <div className='itemGradient'></div>
                            <h5>Fish Eye</h5>
                        </div>

                        <div className='group item'>
                            <img className='hidden w-full md:block duration-200 group-hover:scale-110' src='/images/desktop/image-from-above.jpg' alt='' />
                            <img className='w-full md:hidden duration-200 group-hover:scale-110' src='/images/mobile/image-from-above.jpg' alt='' />
                            <div className='itemGradient'></div>
                            <h5>From Above</h5>
                        </div>
                    </div>
                    {/* Item container2 */}
                    <div className='flex flex-col justify-between mt-6 uppercase space-y-6 text-2xl px-4 md:flex-row md:space-y-0 md:space-x-6'>
                        <div className='group item'>
                            <img className='w-full hidden md:block duration-200 group-hover:scale-110' src='/images/desktop/image-grid.jpg' alt='' />
                            <img className='w-full md:hidden duration-200 group-hover:scale-110' src='/images/mobile/image-grid.jpg' alt='' />
                            <div className='itemGradient'></div>
                            <h5>Deep Earth</h5>
                        </div>

                        <div className='group item'>
                            <img className='hidden w-full md:block duration-200 group-hover:scale-110' src='/images/desktop/image-night-arcade.jpg' alt='' />
                            <img className='w-full md:hidden duration-200 group-hover:scale-110' src='/images/mobile/image-night-arcade.jpg' alt='' />
                            <div className='itemGradient'></div>
                            <h5>Soccer Team</h5>
                        </div>

                        <div className='group item'>
                            <img className='hidden w-full md:block duration-200 group-hover:scale-110' src='/images/desktop/image-pocket-borealis.jpg' alt='' />
                            <img className='w-full md:hidden duration-200 group-hover:scale-110' src='/images/mobile/image-pocket-borealis.jpg' alt='' />
                            <div className='itemGradient'></div>
                            <h5>Fish Eye</h5>
                        </div>

                        <div className='group item'>
                            <img className='hidden w-full md:block duration-200 group-hover:scale-110' src='/images/desktop/image-soccer-team.jpg' alt='' />
                            <img className='w-full md:hidden duration-200 group-hover:scale-110' src='/images/mobile/image-soccer-team.jpg' alt='' />
                            <div className='itemGradient'></div>
                            <h5>From Above</h5>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='bg-black mt-10'>
                <div id='container' className='max-w-6xl items-center mx-auto py-6'>
                    <div className='flex flex-col mb-8 space-y-8 items-center md:flex-row md:space-y-0 md:justify-between md:items-start md:mt-4'>
                        <div className='flex flex-col space-y-8 items-center md:space-y-6 md:items-start'>
                           <div className='h-8'>
                                <img src='/images/logo.svg' alt='' className='w-44 md:ml-3'/>
                            </div> 

                            <div className='flex flex-col text-white font-bold space-y-4 items-center md:flex-row md:space-y-0 md:space-x-4 md:items-start md:ml-3'>
                                <div className='group h-10'>
                                    <a href='#'>About</a>
                                    <div className='mx-2 mt-2 group-hover:border-b-2 group-hover:border-blue-50'></div>
                                </div>
                                <div className='group h-10'>
                                    <a href='#'>Career</a>
                                    <div className='mx-2 mt-2 group-hover:border-b-2 group-hover:border-blue-50'></div>
                                </div>
                                <div className='group h-10'>
                                    <a href='#'>Events</a>
                                    <div className='mx-2 mt-2 group-hover:border-b-2 group-hover:border-blue-50'></div>
                                </div>
                                <div className='group h-10'>
                                    <a href='#'>Projects</a>
                                    <div className='mx-2 mt-2 group-hover:border-b-2 group-hover:border-blue-50'></div>
                                </div>
                                <div className='group h-10'>
                                    <a href='#'>Support</a>
                                    <div className='mx-2 mt-2 group-hover:border-b-2 group-hover:border-blue-50'></div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div id='div2' className='flex flex-col items-start space-y-4 text-gray-500'>
                           <div className='flex items-center mx-auto space-x-4 md:justify-end md:mx-0'>
                                <div className='h-10'>
                                    <a href='#'>
                                        <img src='/images/icon-facebook.svg' alt='' className='h-8'/>
                                    </a>
                                </div>
                                <div className='h-10'>
                                    <a href='#'>
                                        <img src='/images/icon-instagram.svg' alt='' className='h-8'/>
                                    </a>
                                </div>
                                <div className='h-10'>
                                    <a href='#'>
                                        <img src='/images/icon-pinterest.svg' alt='' className='h-8'/>
                                    </a>
                                </div>
                                <div className='h-10'>
                                    <a href='#'>
                                        <img src='/images/icon-twitter.svg' alt='' className='h-8'/>
                                    </a>
                                </div>
                            </div> 

                            <div className='font-bold'>&copy; 2022 Loopstudios. All Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}