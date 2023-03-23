import React, { useState } from 'react'
import globe from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/globe-icon.webp'
import girl from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/Rectangle-45.webp'
import 'typeface-poppins'
import { useMediaQuery } from '@react-hook/media-query'
function Intro() {
    const isTablet = useMediaQuery('(min-width : 640px)and(max-width: 1024px)');
    const isMediumScreen = useMediaQuery("(min-width : 1024px)")
    if (isMediumScreen) {
        return (
            <div className=' bg-[#EBEBEB] w-full pt-24 h-auto '>
                <div className='w-[1150px] min-h-10 h-auto flex justify-between mx-auto  '>
                    <div className=' flex flex-col gap-1 my-auto'>
                        <div className='rounded-2xl w-56 h-auto bg-orange-100'>
                            <h1 className=' flex gap-2 py-2 px-2 text-orange-500 font-medium'>Explore the world <span><img src={globe} alt="" width={25} /></span></h1>
                        </div>
                        <div>
                            <h1 className=' text-[50px] w-96 font-semibold'>it's a Big World Out There, Go And Explore</h1>
                        </div>
                        <div>
                            <h1 className=' font-medium text-gray-600 w-96'>We always make our customer happy by providing as many choises as possible</h1>
                        </div>
                    </div>
                    <div>
                        <img src={girl} alt="" />
                    </div>
                </div>
            </div>
        )
    }
    if (isTablet) {
        return (
            <div className=' '>
                <div className=' w-full h-14 bg-[#DCDCDC] mt-[-20px] '></div>
                <div className=' w-full h-auto bg-[#EBEBEB] rounded-t-[50px] mt-[-30px] px-5 py-5 font-sans'>
                    <div className=' '>
                        <h1 className=' flex inline-flex gap-1 text-orange-500 border border-1 px-2 rounded-full bg-orange-100 text-xs'>Explore The World <span><img src={globe} alt="" width={20} /></span> </h1>
                    </div>
                    <div className=' w-56 text-3xl '>
                        <p className=' font-sans font-semibold'>it's a Big World Out There, Go And Explore</p>
                    </div>
                    <div className=' w-56 text-xs text-gray-500'>
                        We always make our customer happy by providing as many choises as possible
                    </div>
                    <div className=''>
                        <img src={girl} alt="" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=''>
            <div className=' w-full h-14 bg-[#DCDCDC] mt-[-20px] '></div>
            <div className=' w-full h-auto bg-[#EBEBEB] rounded-t-[50px] mt-[-30px] px-5 py-5 font-sans'>
                <div className=''>
                    <h1 className=' flex inline-flex gap-1 text-orange-500 border border-1 px-2 rounded-full bg-orange-100 text-xs'>Explore The World <span><img src={globe} alt="" width={20} /></span> </h1>
                </div>
                <div className=' w-56 text-3xl '>
                    <p className=' font-sans font-semibold'>it's a Big World Out There, Go And Explore</p>
                </div>
                <div className=' w-56 text-xs text-gray-500'>
                    We always make our customer happy by providing as many choises as possible
                </div>
                <div className=' '>
                    <img className=' mx-auto' src={girl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Intro