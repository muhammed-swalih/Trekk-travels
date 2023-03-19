import React from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
import { useMediaQuery } from '@react-hook/media-query'
import {FaWhatsapp , FaInstagram ,FaFacebook , FaTelegram} from 'react-icons/fa'
import {BsTelephoneFill} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'
function Footer() {
    const isMediumScreen = useMediaQuery("(min-width : 640px)")
    if (isMediumScreen) {
        return (
            <div className=' w-full bg-[#D9D9D9] h-auto py-[100px]'>
                <div className=' w-3/4 flex justify-between mx-auto my-auto'>
                    <div className=' flex flex-col gap-[80px]'>
                        <div className=' flex gap-5'>
                            <img src={logo} alt="" width={250} />
                            <h1 className=' my-auto text-[70px] font-semibold'>Trekk & Travel</h1>
                            <h1 className=' my-auto text-[35px] mb-[95px] ml-[-190px]'>HOLIDAYS</h1>
                        </div>
                        <div className='bg-orange-500 w-auto h-auto py-[15px] px-[5px] rounded-[80px]'>
                            <h1 className='flex justify-center gap-5 text-[65px] mt-[5px] text-white text-center'><span className=' text-[85px]'><BsTelephoneFill/></span>+91 9947172630</h1>
                        </div>
                        <div className=' flex flex-col gap-[50px]'>
                            <div className=' text-orange-500 flex inline-flex text-[60px] font-semibold '><span className=' text-[85px]'><IoLocationSharp/></span>Headquarters</div>
                        </div>
                        <div className=''>
                            <h1 className=' text-[65px] w-[850px] text-gray-600 font-semibold'>lorem ipsun is a writing 1st build chelakkadu</h1>
                        </div>
                        <div className='pb-10 flex justify-between w-4/5  gap-5'>
                            <FaWhatsapp className='  w-28 bg-gray-800 text-white px-5 py-5 rounded-full  h-28'/>
                            <FaInstagram className=' w-28 bg-gray-800 text-white px-5 py-5 rounded-full  h-28'/>
                            <FaFacebook className='  w-28 bg-gray-800 text-white px-5 py-5 rounded-full h-28'/>
                            <FaTelegram className='  w-28 bg-gray-800 text-white px-5 py-5 rounded-full h-28'/>
                        </div>
                    </div>

                </div>
                <div>

                </div>
            </div>
        )
    }
    return (
        <div className=' w-full bg-[#D9D9D9] h-auto py-5'>
            <div className=' flex inline-flex items-center pl-7'>
                <img src={logo} alt="" width={50} />
                <h1 className=' font-bold'>Trekk & Travels</h1>
            </div>
            <div className=' flex flex-col items-start ml-10 gap-5'>
                <div className=' w-auto px-2 rounded-xl bg-orange-500'>
                    <h1 className=' text-md mt-2 text-white flex inline-flex gap-2 '><span className=' mt-1'><BsTelephoneFill/></span>+91 9947172630</h1>
                </div>
                <div className=''>
                    <div className=' flex inline-flex gap-2'><span className=' text-2xl'><IoLocationSharp/></span><h1 className=' text-md font-semibold text-orange-500'>Headquarters</h1></div>
                    <h1 className=' text-gray-600 font-medium'>lorem ispun  palla swalih 1st build chelakkadu</h1>
                </div>
                <div className=' flex gap-2'>
                    <div className=' px-2 py-2 bg-orange-500 rounded-full'>
                        <div className=' text-white'><FaWhatsapp/></div>
                    </div>
                    <div className='px-2 py-2 bg-orange-500 rounded-full '>
                        <div className=' text-white'><FaInstagram/></div>
                    </div>
                    <div className='px-2 py-2 bg-orange-500 rounded-full'>
                        <div className=' text-white'><FaFacebook/></div>
                    </div>
                    <div className=' px-2 py-2 bg-orange-500 rounded-full'>
                        <div className=' text-white'><FaTelegram/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer