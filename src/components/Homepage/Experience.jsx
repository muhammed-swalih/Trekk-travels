import React from 'react'
import bag from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/bag.webp'
import rainbow from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/rainbow-icon.webp'
import help from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/24-help-icon.webp'
import safeTravel from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/safe-travel-icon.webp'
import value from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/value-for-money-icon.webp'
import save from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/save-money-icon.webp'
function Experience() {
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