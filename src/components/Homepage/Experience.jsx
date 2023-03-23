import React from 'react'
import bag from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/bag.webp'
import rainbow from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/rainbow-icon.webp'
import help from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/24-help-icon.webp'
import safeTravel from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/safe-travel-icon.webp'
import value from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/value-for-money-icon.webp'
import save from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/save-money-icon.webp'
import { useMediaQuery } from '@react-hook/media-query'
function Experience() {
    const isMediumScreen = useMediaQuery("(min-width : 1024px)")
    const isTablet = useMediaQuery('(min-width : 640px)and(max-width: 1024px)');

    if (isMediumScreen) {
        return (
            <div className='h-auto w-full bg-[#EBEBEB] py-5'>
                <div className=' w-[1200px] font-semibold h-auto flex justify-between mx-auto'>
                    <div >
                        <img className=' mx-auto' src={bag} alt="" width={1500} />
                    </div>
                    <div className=' flex flex-col my-auto mx-auto'>
                        <h1 className=' text-orange-500 text-lg  uppercase'>our expireince</h1>
                        <h1 className=' uppercase w-[520px] text-[40px]'>package benifits to our customer.</h1>
                        <h1 className=' w-[520px] text-gray-500'>Since we first opened we have always prioritized the convenience of our users by providing low prices and with a easy process.</h1>
                        <div className=' flex justify-between mt-5'>
                            <div className=' flex flex-col'>
                                <h1 className=' text-orange-500 text-5xl'>6</h1>
                                <h1 className=' w-28 text-gray-500'>Years Experience</h1>

                            </div>
                            <div className='flex flex-col'>
                                <h1 className=' text-orange-500 text-5xl'>200+</h1>
                                <h1 className=' w-32 text-gray-500'>Destination Collaboration</h1>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className=' text-orange-500 text-5xl'>50k</h1>
                                <h1 className=' w-32 text-gray-500'>Happy Customer</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mx-auto mt-5 w-[800px] flex justify-between'>
                    <div className=' flex flex-col relative bg-white w-40 h-[150px] rounded-3xl border border-1 shadow-lg '>
                        <img className=' bg-white rounded-3xl mx-auto my-auto' src={value} alt="" width={100} />
                        <h1 className=' absolute px-3 py-3 font-semibold text-xs top-[110px] left-2 uppercase '>value for money</h1>
                    </div>
                    <div className=' flex flex-col relative bg-white w-40 h-[150px] rounded-3xl border border-1 shadow-lg '>
                        <img className=' bg-white rounded-3xl mx-auto my-auto' src={save} alt="" width={100} />
                        <h1 className=' absolute px-3 py-3 font-semibold text-xs top-[110px] left-8 uppercase '>save time</h1>
                    </div>
                    <div className=' flex flex-col relative bg-white w-40 h-[150px] rounded-3xl border border-1 shadow-lg '>
                        <img className=' bg-white rounded-3xl mx-auto my-auto' src={safeTravel} alt="" width={100} />
                        <h1 className=' absolute px-3 py-3 font-semibold text-xs top-[110px] left-7 uppercase '>safe travel</h1>
                    </div>
                    <div className=' flex flex-col relative bg-white w-40 h-[150px] rounded-3xl border border-1 shadow-lg '>
                        <img className=' bg-white rounded-3xl mx-auto my-auto' src={help} alt="" width={100} />
                        <h1 className=' absolute px-3 py-3 font-semibold text-xs top-[110px] left-9 uppercase '>24/7 help</h1>
                    </div>
                    
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full h-auto bg-[#EBEBEB] py-2'>
            <div className=' w-auto h-auto mx-auto'>
                <img  className=' mx-auto' src={bag} alt="" />
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
                        <h1 className='font-bold text-orange-500 text-4xl'>6</h1>
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