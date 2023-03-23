import React from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
import { useMediaQuery } from '@react-hook/media-query'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTelegram, FaLocationArrow } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
function Footer() {
    const navigate = useNavigate();
    const honeymoonNavigation = () => {
        navigate('/honeymoonpackage')
    }
    const homeNavigation = () => {
        navigate('/')
    }
    const familyNavigation = () => {
        navigate('/familypackage')
    }
    const holidayNavigation = () => {
        navigate('/holidaypackage')
    }
    const termsAndConditions = () => {
        navigate('/termsandconditions')
    }
    const privacyPolicy = () =>{
        navigate('/privacypolicy')
    }
    const cancellation = () => {
        navigate('/cancellation')
    }
    const resortNavigation = () => {
        navigate('/resorts')
    }
    const isMediumScreen = useMediaQuery("(min-width : 1024px)")
    const isTablet = useMediaQuery('(min-width : 640px)and(max-width: 1024px)');

    if (isMediumScreen) {
        return (
            <div className=' w-full bg-[#232323] h-auto py-10'>
                <div className='mx-auto w-[1150px] h-auto flex justify-between'>
                    <div>
                        <div className=' flex flex-col '>
                            <div className=' flex ml-[-20px]'>
                                <img src={logo} alt="" width={80} />
                                <h1 className=' my-auto font-semibold text-xl text-white'>Trekk & Travel</h1>
                                <h1 className=' uppercase my-auto text-xs mt-16 ml-[-55px] text-white'>holidays</h1>
                            </div>
                            <div className=' flex justify-between w-1/4 gap-4'>
                                <a className=' text-xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://wa.me/9947172630"><FaWhatsapp /></a>
                                <a className=' text-xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://instagram.com/trekkandtravel?igshid=YmMyMTA2M2Y="><FaInstagram /></a>
                                <a className=' text-xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://www.facebook.com/trekkandtravel?mibextid=LQQJ4d"><FaFacebook /></a>
                                <a className=' text-xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://maps.app.goo.gl/T6f2gNVhectRp6ix6?g_st=iwb"><IoLocationSharp /></a>
                            </div>

                            <div className=' flex flex-col mt-7'>
                                <div className=' text-orange-500 text-lg '>Packages</div>
                                <ul >
                                    <li onClick={holidayNavigation} className=' text-gray-400 cursor-pointer hover:underline hover:text-blue-800'>Holiday Package</li>
                                    <li onClick={honeymoonNavigation} className=' text-gray-400 cursor-pointer hover:underline hover:text-blue-800'>Honeymoon Package</li>
                                    <li onClick={familyNavigation} className=' text-gray-400 cursor-pointer hover:underline hover:text-blue-800'>Family Package</li>
                                    <li onClick={resortNavigation} className=' text-gray-400 cursor-pointer hover:underline hover:text-blue-800'>Resorts</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className=' flex flex-col my-auto text-gray-400 font-medium '>
                        <div className=' flex flex-col'>
                            <h1 className=' flex gap-2'><span className=' mt-1'><IoLocationSharp /></span><span className=' text-lg font-medium upppercase'>OFFICE</span></h1>
                            <hr className=' border border-1 border-gray-400 w-60 my-2' />
                        </div>
                        <div className=' '>
                            <h1 className=' py-1 w-80'>Palam Jn, Natyamangalam, road, Kattuppara, Kerala 679323</h1>
                            <hr className='  border border-1 border-gray-400 w-60 my-2' />
                        </div>
                        <div className=' '>
                            <h1 className=' py-1 w-80'>Holidays@trekkandtravel.com</h1>
                            <h1 className=' mt-2'>+91 9947172630</h1>
                            <hr className='  border border-1 border-gray-400 w-60 my-2' />
                        </div>
                        <div className=' flex justify-between'>
                            <h1 onClick={privacyPolicy} className=' text-[10px] uppercase hover:underline hover:text-blue-800'>privacy policy </h1>
                            <h1 onClick={termsAndConditions} className=' text-[10px] uppercase hover:underline hover:text-blue-800'>terms & conditions </h1>
                            <h1 onClick={cancellation} className=' text-[10px] uppercase hover:underline hover:text-blue-800'>cancellation </h1>
                        </div>

                    </div>

                </div>
                <div className=' mt-10 '>
                    <h1 className=' text-gray-500 text-xs uppercase text-center'>developed by hexen</h1>
                </div>

            </div>
        )
    }
    return (
        <div className=' w-full bg-[#232323] h-auto py-5 text-white'>
            <div className=' flex inline-flex items-center pl-7'>
                <img src={logo} alt="" width={50} />
                <h1 className=' font-bold'>Trekk & Travel</h1>
            </div>
            <div className=' flex flex-col items-start ml-10 gap-5'>
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
                <div className=' flex flex-col py-2  text-gray-400  text-sm'>
                    <div className=' flex flex-col  '>
                        <h1 className=' w-60 flex  gap-1'><span className=' flex text-lg'><IoLocationSharp /><span className=' uppercase font-medium'>office</span></span></h1>
                        <hr className=' my-2 w-24 border border-1 border-gray-400' />
                    </div>
                    <div className=' my-1 w-60 '>
                        <h1>Palam Jn, Natyamangalam, road, Kattuppara, Kerala 679323</h1>
                        <hr className=' my-2 border border-1 border-gray-400' />
                    </div>
                    <div className=' '>
                        <h1 className='mb-2'>Holidays@trekkandtravel.com</h1>
                        <h1 className=' text-sm mb-2'>+91 9947172630</h1>
                        <hr className=' my-2 border border-1 border-gray-400' />
                    </div>
                    <div className='text-gray-400 text-[10px] gap-5 uppercase flex justify-between'>
                        <h1 onClick={privacyPolicy}>privacy policy</h1>
                        <h1 onClick={termsAndConditions}>terms and conditions</h1>
                        <h1 onClick={cancellation}>cancellations</h1>
                    </div>
                </div>
                <div className=' mt-1'>
                    <div className=' text-orange-500 mb-2 text-lg'>Packages</div>
                    <ul className=' text-gray-400 text-sm'>
                        <li onClick={holidayNavigation} className=' cursor-pointer upper hover:underline hover:text-blue-800'>Holiday Packages</li>
                        <li onClick={honeymoonNavigation} className=' cursor-pointer upper hover:underline hover:text-blue-800'>Honeymoon Packages</li>
                        <li onClick={familyNavigation} className=' cursor-pointer upper hover:underline hover:text-blue-800'>Family Packages</li>
                        <li onClick={resortNavigation} className=' cursor-pointer upper hover:underline hover:text-blue-800'> Resorts</li>
                    </ul>
                    <hr className=' border border-1 border-gray-400 w-72 my-2'/>
                </div>
            </div>
            <div className=' text-gray-500 text-xs my-3'>
                <h1 className=' uppercase text-center'>developed by hexen</h1>
            </div>
        </div>
    )
}

export default Footer