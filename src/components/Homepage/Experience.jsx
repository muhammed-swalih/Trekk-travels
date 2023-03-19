import React from 'react'
import bag from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/bag.webp'
import rainbow from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/rainbow-icon.webp'
import help from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/24-help-icon.webp'
import safeTravel from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/safe-travel-icon.webp'
import value from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/value-for-money-icon.webp'
import save from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/save-money-icon.webp'
import { useMediaQuery } from '@react-hook/media-query'
function Experience() {
    const isMediumScreen = useMediaQuery("(min-width : 640px)")
    if (isMediumScreen) {
        return (
            <div className='h-auto w-full bg-[#EBEBEB]'>
                <div className=' w-5/6 h-auto mx-auto '>
                    <div className=' flex justify-between'>
                        <img className=' my-auto' src={bag} alt="" width={3500} />
                        <div className=' my-auto'>
                            <h1 className=' text-orange-500 font-semibold uppercase text-[65px]'>our expireince</h1>
                            <h1 className=' uppercase text-[150px] font-semibold w-3/4'> package benfits to our custmores</h1>
                            <h1 className=' text-[65px] text-gray-500 w-3/4'>Since we first opened we have always prioritized the convenience of our users by providing low prices and with a easy process.</h1>
                            <div className=' flex justify-between w-3/4'>
                                <div className=' mt-10 '>
                                    <h1 className=' text-orange-500 text-[150px] font-bold'>10</h1>
                                    <h1 className=' w-1/4 text-gray-500 text-[65px]'>years Expireince</h1>
                                </div>
                                <div className=' mt-10'>
                                    <h1 className=' text-orange-500 text-[150px] font-bold'>200+</h1>
                                    <h1 className=' w-1/4 text-gray-500 text-[65px]'>Destination Collaboration</h1>
                                </div>
                                <div className=' mt-10'>
                                    <h1 className=' text-orange-500 text-[150px] font-bold'>50k</h1>
                                    <h1 className=' w-1/4 text-gray-500 text-[65px]'>Happy Customers</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-4/6 px-[250px] mx-auto py-32 flex justify-between'>
                        <div className=' w-[500px] h-[450px] bg-white shadow-lg rounded-[80px] py-10'>
                            <img className=' mx-auto ' src={value} alt="" width={300} />
                            <h1 className=' text-center my-5 text-[40px] uppercase font-semibold'>value for money</h1>
                        </div>
                        <div className=' w-[500px] h-[450px] bg-white shadow-lg rounded-[80px] py-10'>
                            <img className=' mx-auto ' src={save} alt="" width={300} />
                            <h1 className=' text-center my-5 text-[40px] uppercase font-semibold'>save time</h1>
                        </div>
                        <div className=' w-[500px] h-[450px] bg-white shadow-lg rounded-[80px] py-10'>
                            <img className=' mx-auto ' src={safeTravel} alt="" width={300} />
                            <h1 className=' text-center my-5 text-[40px] uppercase font-semibold'>safe travel</h1>
                        </div>
                        <div className=' w-[500px] h-[450px] bg-white shadow-lg rounded-[80px] py-10'>
                            <img className=' mx-auto ' src={help} alt="" width={300} />
                            <h1 className=' text-center my-5 text-[40px] uppercase font-semibold'>24/7 help</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full h-auto bg-[#EBEBEB] py-2'>
            <div className=' w-auto h-auto mx-auto'>
                <img className='' src={bag} alt="" />
            </div>
            <div className=' text-center mx-auto w-full h-auto'>
                <h1 className=' text-orange-500 font-bold uppercase pb-1'>our experience</h1>
                <h1 className=' text-xl w-3/5 mx-auto font-bold'>With Our Experience </h1>
                <div className=' flex inline-flex w-full'>
                    <h1 className='  text-xl w-3/5  font-bold mx-auto gap-2'>We will serve you. </h1>
                </div>
                <div className=' py-5 text-xs w-3/4 mx-auto text-gray-500'>
                    Since we first opened we have always prioritized the convenience of our users by providing low prices and with a easy process.
                </div>
                <div className=' flex inline-flex w-full justify-evenly pb-10'>
                    <div className=' '>
                        <h1 className='font-bold text-orange-500 text-4xl'>10</h1>
                        <h1 className=' text-xs w-10 mx-auto text-gray-600'>Years Experience</h1>
                    </div>
                    <div className=' '>
                        <h1 className=' font-bold text-orange-500  text-4xl'>200+</h1>
                        <h1 className=' text-xs w-4 text-gray-600'>Destination Collaboration</h1>
                    </div>

                    <div >
                        <h1 className=' font-bold text-orange-500 text-4xl'>50K</h1>
                        <h1 className=' text-xs text-gray-600 w-10 mx-auto'>happy clients</h1>
                    </div>
                </div>
                <div className=' flex inline-flex justify-evenly w-full px-3 pb-5 gap-1'>
                    <div className=' border border-1 bg-white px-5 py-5 shadow-md w-28 rounded-lg '>
                        <img className=' mx-auto pb-1' src={value} alt="" width={40} />
                        <h1 className=' text-[8px] font-semibold uppercase'>Value for money</h1>
                    </div>
                    <div className=' border border-1 bg-white px-5 py-5 shadow-md w-28 rounded-lg'>
                        <img className=' mx-auto pb-1' src={save} alt="" width={40} />
                        <h1 className=' text-[8px] font-semibold uppercase'>save time</h1>
                    </div>
                    <div className=' border border-1 bg-white px-5 py-5 shadow-md w-28 rounded-lg'>
                        <img className=' mx-auto pb-1' src={safeTravel} alt="" width={40} />
                        <h1 className=' text-[8px] font-semibold w-12 mx-auto uppercase'>safe travel</h1>
                    </div>
                    <div className=' border border-1 bg-white px-5 py-5 shadow-md w-28 rounded-lg'>
                        <img className=' mx-auto pb-1' src={help} alt="" width={40} />
                        <h1 className=' text-[8px] font-semibold uppercase'>24/7 help</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience