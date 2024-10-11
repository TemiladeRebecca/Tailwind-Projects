//
import Link from 'next/link';

export default function ImageGallery() {
    return(
        <div className='flex bg-cyan-300 items-center justify-center min-h-screen'>
            <div className='bg-white m-4 p-6 space-y-10 shadow-2xl rounded-3xl md:p-40'>
                <div className='flex flex-col items-center justify-center space-y-3 md:justify-end md:space-y-0 md:space-x-8 md:mb-24 md:flex-row'>
                    <div className="group">
                        <Link href="#">Vector</Link>
                    <div
                        className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
                    ></div>
                    </div>
                    <div className="group">
                        <Link href="#">Illustration</Link>
                    <div
                        className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
                    ></div>
                    </div>
                    <div className="group">
                        <Link href="#">Images</Link>
                    <div
                        className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
                    ></div>
                    </div>
                    <div className="group">
                        <Link href="#">Icons</Link>
                    <div
                        className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
                    ></div>
                    </div>
                </div>
                <div className='flex flex-col justify-between space-y-5 md:space-y-0 md:flex-row'>
                <div className='flex justify-between border-b'>
                    <input className='ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none' placeholder='Search' type='text'/>
                    <button>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 text-gray-300 duration-200 hover:scale-110"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <       circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                    </button>
                </div>
                
                <button className='px-14 py-3 bg-black text-white text-lg text-center border border-black shadow-2xl shadow-grey-500/50 hover:bg-white hover:text-black rounded-xl duration-200'>Upload</button>
                </div>
                
                  <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    <div className="relative group">
                        <img src="/images/image1.jpg" alt="" className="w-72" />
                        <div
                         className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                        >
                        <div className='flex justify-between w-full'>
                            <div className="font-normal">
                                <p className="text-sm">Abstract Painting</p>
                                <p className="text-xs">245 likes - 35 Shares</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/bookmark.svg" alt="bookmark" />
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative group">
                        <img src="/images/image2.jpg" alt="" className="w-72" />
                        <div
                         className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                        >
                        <div className='flex justify-between w-full'>
                            <div className="font-normal">
                                <p className="text-sm">Abstract Painting</p>
                                <p className="text-xs">245 likes - 35 Shares</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/bookmark.svg" alt="bookmark" />
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative group">
                        <img src="/images/image3.jpg" alt="" className="w-72" />
                        <div
                         className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                        >
                        <div className='flex justify-between w-full'>
                            <div className="font-normal">
                                <p className="text-sm">Abstract Painting</p>
                                <p className="text-xs">245 likes - 35 Shares</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/bookmark.svg" alt="bookmark" />
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative group">
                        <img src="/images/image4.jpg" alt="" className="w-72" />
                        <div
                         className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                        >
                        <div className='flex justify-between w-full'>
                            <div className="font-normal">
                                <p className="text-sm">Abstract Painting</p>
                                <p className="text-xs">245 likes - 35 Shares</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/bookmark.svg" alt="bookmark" />
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative group">
                        <img src="/images/image5.jpg" alt="" className="w-72" />
                        <div
                         className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                        >
                        <div className='flex justify-between w-full'>
                            <div className="font-normal">
                                <p className="text-sm">Abstract Painting</p>
                                <p className="text-xs">245 likes - 35 Shares</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/bookmark.svg" alt="bookmark" />
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative group">
                        <img src="/images/image6.jpg" alt="" className="w-72" />
                        <div
                         className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                        >
                        <div className='flex justify-between w-full'>
                            <div className="font-normal">
                                <p className="text-sm">Abstract Painting</p>
                                <p className="text-xs">245 likes - 35 Shares</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/bookmark.svg" alt="bookmark" />
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}