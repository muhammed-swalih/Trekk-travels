import React from 'react'
import fire from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/Fire.png'
import globe from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/globe-icon.webp'
import bag from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/luggage.webp'
import pass from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/bording-pass.webp'
import { useMediaQuery } from '@react-hook/media-query'
function Service() {
  const isMediumScreen = useMediaQuery("(min-width : 1024px)")
  const isTablet = useMediaQuery('(min-width : 640px)and(max-width: 1024px)');


  if (isMediumScreen) {
    return (
      <div className=' w-full h-auto py-5 bg-[#EBEBEB] '>
        <div className='w-[1150px] min-h-10 h-auto  mx-auto flex justify-between py-10'>
            <div className=' flex flex-col '>
                <h1 className=' uppercase font-semibold text-orange-500'>what we serve</h1>
                <h1 className=' text-2xl font-semibold w-40 flex gap-1'>Top Values</h1>
                <h1 className=' text-2xl font-semibold w-40 flex gap-1 flex gap-1'>For You <span><img  src={fire} alt="" width={30} /></span></h1>
                <h1 className=' font-semibold text-gray-500 w-48 text-sm'>Try a verity of benefits  when using our services.</h1>
            </div>
            <div>
              <div className=' flex flex-col '>
                  <img src={globe} alt="" width={50} />
                  <h1 className=' font-semibold'>Lot of Choises</h1>
                  <h1 className=' w-52 text-sm font-semibold text-gray-500'>Total 200 destinations that we work with.</h1>
              </div>
            </div>
            <div>
              <div className=' flex flex-col my-auto '>
                  <img src={bag} alt="" width={50} />
                  <h1 className=' font-semibold'>Best Tour Guide</h1>
                  <h1 className=' w-52 text-sm font-semibold text-gray-500'>Our tour guide with 15+ years of experience.</h1>
              </div>
            </div>
            <div>
              <div className=' flex flex-col '>
                  <img src={pass} alt="" width={50} />
                  <h1 className=' font-semibold'>Easy Booking</h1>
                  <h1 className=' w-52 text-sm font-semibold text-gray-500'>With an easy and fast ticket purchase process.</h1>
              </div>
            </div>
        </div>
        {/* <div className=' w-4/4 h-auto mx-auto  py-10 '>

          
          <div className=' w-5/6 h-auto mx-auto  flex justify-between '>
            <div className=''>
            <h1 className=' text-orange-500 text-[65px] uppercase font-semibold'>what we serve</h1>
              <h1 className=' font-semibold text-[150px]'>Top Values</h1>
              <h1 className=' font-semibold text-[150px] flex'>For You <span><img src={fire} alt="" width={250} /></span></h1>
              <h1 className=' text-[65px] text-gray-500 w-3/4'>Try a verity of benefits  when using our services.</h1>
            </div>
            <div className=''>
              <img src={globe} alt="" width={200} />
              <h1 className=' text-[105px] font-semibold'>Lot of Choices</h1>
              <h1 className=' w-3/4 text-[65px] text-gray-500'>Total 200 destinations that we work with.</h1>
            </div>
            <div className=' my-auto'>
              <img src={bag} alt="" width={200} />
              <h1 className=' text-[105px] font-semibold'>Best Tour Guide</h1>
              <h1 className=' w-3/4 text-[65px] text-gray-500'>Our tour guide with 15+ years of experience.</h1>
            </div>
            <div className=' '>
              <img src={pass} alt="" width={200} />
              <h1 className=' text-[105px] font-semibold'>Easy Booking</h1>
              <h1 className=' w-3/4 text-[65px] text-gray-500'>With an easy and fast ticket purchase process.</h1>
            </div>

          </div>
        </div> */}

      </div>
    )
  }
  return (
    <div className=' w-full h-auto pt-5 bg-[#DCDCDC]'>
      <div className='text-center'>
        <h1 className=' text-orange-500 uppercase text-[13px] font-bold'>what we serve</h1>
      </div>
      <div className='text-center w-full '>
        <h1 className=' text-center mx-auto font-bold  text-2xl'>Top Values</h1>
        <h1 className=' text-center mx-auto font-bold flex inline-flex text-2xl'>For You <span><img className=' mt-1' src={fire} alt="" width={25} /></span></h1>
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