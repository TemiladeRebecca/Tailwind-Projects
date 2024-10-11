'use client';


import { toggleDiv } from "@/utils/menuToggle";
import ButtonToggle from "@/utils/menuToggle";

export default function Alx() {

return(
    <>
        <div id='outer-div' className='flex bg-purple-600 mx-4 mt-4 py-6 cursor-pointer' onClick={toggleDiv}>
            <ButtonToggle />
        </div>

        <div className='flex items-center justify-center'>
            <div id='inner-div' className='hidden max-w-6xl m-4'>
            <p>Boost your brand recognition with each click. Generic links don't
                mean a thing. Branded links help instil confidence in your content. Boost your brand recognition with each click. Generic links don't
                mean a thing. Branded links help instil confidence in your content. Boost your brand recognition with each click. Generic links don't
                mean a thing. Branded links help instil confidence in your content. Boost your brand recognition with each click. Generic links don't
                mean a thing. Branded links help instil confidence in your content.</p>
            </div>
        </div>

    </>
)}
