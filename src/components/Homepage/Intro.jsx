import React from 'react'
import globe from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/globe-icon.webp'
import girl from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/tourist-women.webp'
function Intro() {
  return (
    <div>
        <div className=' w-full h-14 bg-[#DCDCDC] mt-[-20px] '></div>
        <div className=' w-full h-auto bg-[#EBEBEB] rounded-t-[50px] mt-[-30px] px-5 py-5'>
            <div className=''>
                <h1 className=' flex inline-flex gap-1 text-orange-500 border border-1 px-2 rounded-full bg-orange-100 text-xs'>Explore The World <span><img src={globe} alt="" width={20}/></span> </h1> 
            </div>
            <div className=' w-56 text-3xl font-bold'>
                <p>it's a Big World Out There, Go And Explore</p>
            </div>
            <div className=' w-56 text-xs text-gray-500'>
            We always make our customer happy by providing as many choises as possible
            </div>
            <div className=''>
                <img src={girl} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Intro