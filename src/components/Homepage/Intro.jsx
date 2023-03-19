import React, { useState } from 'react'
import globe from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/globe-icon.webp'
import girl from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/Rectangle-45.webp'
import 'typeface-poppins'
import { useMediaQuery } from '@react-hook/media-query'
function Intro() {
    const isMediumScreen = useMediaQuery("(min-width : 640px)")
    if (isMediumScreen) {
        return (
            <div className=' bg-[#EBEBEB] w-full pt-[400px]'>
                <div className=' w-3/4 mx-auto h-auto bg-[#EBEBEB] py-40 flex  justify-between '>
                    <div className='  h-auto my-auto'>
                        <div>
                            <h1 className=' flex inline-flex text-orange-500 border border-1 bg-orange-100 rounded-full text-[60px] px-10 py-5 gap-2'>Explore the world <span><img src={globe} alt="" /></span></h1>
                        </div>
                        <div className=' w-[1600px]'>
                            <h1 className=' text-[180px] font-semibold'>It's a Big World Out There, Go And Explore</h1>
                        </div>
                        <div className=' w-[1400px]'>
                            <h1 className=' text-[65px] text-gray-500'>We always make our customer happy by providing as many choises as possible</h1>
                        </div>
                    </div>
                    <div className=' h-auto my-auto  '>
                        <div className=''>
                            <img src={girl} alt="" width={2500} />
                        </div>
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
                <div className=''>
                    <img src={girl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Intro