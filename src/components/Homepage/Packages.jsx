import React from 'react'
import {FaGreaterThan,FaLessThan} from 'react-icons/fa'
import flight from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/flighgt.webp'
import testImage from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/testImage.webp'
function Packages() {
  return (
    <div className=' w-full h-auto bg-[#EBEBEB]  py-5'>
        <div className=' px-5'>
            <h1 className=' font-extrabold tracking-wide text-orange-500 uppercase text-sm'>Top Destination</h1>
            <h1 className=' text-2xl font-bold flex inline-flex gap-1'>Explore Top Destination <span><img src={flight} alt="" width={30}/></span></h1>
            {/* <div className=' flex inline-flex justify-center gap-5 py-5 w-full '>
                <div className=' w-72 h-60'>
                   <img className='  w-full h-full object-cover rounded-lg'  src={testImage} alt="" />
                </div>
                <div className=' w-72 h-60'>
                   <img className='  w-full h-full object-cover rounded-lg'  src={testImage} alt="" />
                </div>
            </div> */}
           
        </div>
        <div className=' flex inline-flex gap-1 overflow-scroll  px-5 py-5 snap-none'>
            <img className='  w-full h-full object-cover rounded-lg' src={testImage} alt="" />
            <img className='  w-full h-full object-cover rounded-lg' src={testImage} alt="" />
        </div>
    </div>
  )
}

export default Packages