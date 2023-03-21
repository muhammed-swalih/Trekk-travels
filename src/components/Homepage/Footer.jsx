import React from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
import { useMediaQuery } from '@react-hook/media-query'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTelegram ,FaLocationArrow} from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
function Footer() {
    const isMediumScreen = useMediaQuery("(min-width : 640px)")
    if (isMediumScreen) {
        return (
            <div className=' w-full bg-[#D9D9D9] h-auto py-10'>
                <div className='mx-auto w-4/5 h-auto'>
                    <div className=' flex '>
                        <img src={logo} alt="" width={80}/>
                        <h1 className=' my-auto font-semibold text-xl'>Trekk & Trevel</h1>
                        <h1 className=' uppercase my-auto text-xs mt-16 ml-[-55px]'>holidays</h1>
                    </div>
                    <div className=' w-40 h-auto bg-orange-500 rounded-3xl'>
                        <h1 className=' py-1 text-white text-lg text-center'>+91 9947172630</h1>
                    </div>
                    <div className=' flex flex-col mt-5'>
                        <h1 className=' flex font-semibold text-orange-500'><span className=' text-xl text-orange-500 '><IoLocationSharp/></span>Headquarters</h1>
                        <h1 className=' text-gray-500 w-80 font-semibold'>Palam Jn, Natyamangalam, road, Kattuppara kerala 679323</h1>
                    </div>
                    <div className=' flex justify-between mt-5 w-1/4'>
                        <a className=' text-3xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://wa.me/9947172630"><FaWhatsapp/></a>
                        <a className=' text-3xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://instagram.com/trekkandtravel?igshid=YmMyMTA2M2Y="><FaInstagram/></a>
                        <a className=' text-3xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://www.facebook.com/trekkandtravel?mibextid=LQQJ4d"><FaFacebook/></a>
                        <a className=' text-3xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://maps.app.goo.gl/T6f2gNVhectRp6ix6?g_st=iwb"><IoLocationSharp/></a>

                    </div>
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
                    <h1 className=' text-md mt-2 text-white flex inline-flex gap-2 '><span className=' mt-1'><BsTelephoneFill /></span>+91 9947172630</h1>
                </div>
                <div className=''>
                    <div className=' flex inline-flex gap-2'><span className=' text-2xl'><IoLocationSharp /></span><h1 className=' text-md font-semibold text-orange-500'>Headquarters</h1></div>
                    <h1 className=' text-gray-600 font-medium'>Palam Jn, Natyamangalam, road, Kattuppara kerala 679323</h1>
                </div>
                <div className=' flex gap-2'>
                    <a href="https://wa.me/9947172630"><div className=' px-2 py-2 bg-orange-500 rounded-full'>
                        <div className=' text-white'><FaWhatsapp /></div>
                    </div></a>

                    <a href="https://instagram.com/trekkandtravel?igshid=YmMyMTA2M2Y="><div className='px-2 py-2 bg-orange-500 rounded-full '>
                        <div className=' text-white'><FaInstagram /></div>
                    </div></a>

                    <a href="https://www.facebook.com/trekkandtravel?mibextid=LQQJ4d"><div className='px-2 py-2 bg-orange-500 rounded-full'>
                        <div className=' text-white'><FaFacebook /></div>
                    </div></a>

                    <a href="https://maps.app.goo.gl/T6f2gNVhectRp6ix6?g_st=iwb"><div className='px-2 py-2 bg-orange-500 rounded-full'>
                        <div className=' text-white'><IoLocationSharp /></div>
                    </div></a>

                </div>
            </div>
        </div>
    )
}

export default Footer