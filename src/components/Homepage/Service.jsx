import React from 'react'
import fire from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/Fire.png'
import globe from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/globe-icon.webp'
import bag from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/luggage.webp'
import pass from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/bording-pass.webp'
function Service() {
  return (
    <div className=' w-full h-auto pt-5 bg-[#DCDCDC]'>
        <div className='text-center'>
            <h1 className=' text-orange-500 uppercase text-[13px] font-bold'>what we serve</h1>
        </div>
        <div className='text-center w-full '>
            <h1 className=' text-center mx-auto font-bold  text-2xl'>Top Values</h1> 
            <h1 className=' text-center mx-auto font-bold flex inline-flex text-2xl'>For You <span><img className=' mt-1' src={fire} alt="" width={25}/></span></h1> 
            <h1 className='text-xs text-gray-700'>Try a verity of benefits  when using our services.</h1> 
        </div>
        <div className=' w-full py-5 px-5 '>
             <div className=' w-80 my-2 mx-auto h-auto bg-white py-2 px-2 rounded-lg'>
                <img src={globe} alt="" width={25} />
                <h1 className=' font-bold text-xs'>Lot of Choices</h1>
                <h1 className=' w-full text-xs text-gray-500'>Total 200 destinations that we work with.</h1>
             </div>
             <div className=' w-80 my-2 mx-auto h-auto bg-white py-2 px-2 rounded-lg'>
                <img src={bag} alt="" width={25} />
                <h1 className=' font-bold text-xs'>Best Tour Guide</h1>
                <h1 className=' w-full text-xs text-gray-500'>Our tour guide with 15+ years of experience.</h1>
             </div>
             
            <div className=' w-80 mx-auto my-2 h-auto bg-white py-2 px-2 rounded-lg'>
                <img src={pass} alt="" width={35} />
                <h1 className=' font-bold text-xs'>Lot of Choices</h1>
                <h1 className=' w-full text-xs text-gray-500'>With an easy and fast ticket purchase process.</h1>
             </div>
        
        </div>
    
    </div>
  )
}

export default Service