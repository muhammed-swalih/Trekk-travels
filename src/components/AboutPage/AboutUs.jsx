import React, { useState } from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
import slideIcon from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/ICON.png'
import background from '../../TREKK TRAVEL ASSETSS/ABOUT US/MOBILE-BG.webp'
import pcBg from '../../TREKK TRAVEL ASSETSS/ABOUT US/BG.webp'
import pageTar from '../../TREKK TRAVEL ASSETSS/ABOUT US/page-tar.webp'
import 'typeface-poppins'
import { FaArrowCircleDown, FaAngleDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query'
function Navbar() {
  const isMediumScreen = useMediaQuery("(min-width : 640px)")
  const navigate = useNavigate()
  const honeymoonNavigation = () => {
    navigate('/honeymoonpackage')
  }
  const familyNavigation = () => {
    navigate('/familypackage')
  }
  const holidayNavigation = () => {
    navigate('/holidaypackage')
  }
  const aboutUsNavigation = () => {
    navigate('/about')
  }
  const contactNavigation = () => {
    navigate('/contact')
  }
  const homeNavigation = () => {
    navigate('/')
  }
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  if (isMediumScreen) {
    return (
      <div className=' w-full h-auto bg-contain' style={{ backgroundImage: `url(${pcBg})` }}>
        <div className=' w-3/4 h-80 flex justify-between pl-[350px]'>
          <div className=' font-semibold text-[60px] my-auto'>Trekk & Travel</div>
          <div className=' flex justify-evenly text-[45px] my-auto w-3/4'>
            <h1 className=' flex gap-5'>Honeymoon Package <span><FaAngleDown className=' h-16 text-orange-500' /></span></h1>
            <h1 className=' flex gap-5'>Family Package <span><FaAngleDown className=' h-16 text-orange-500' /></span></h1>
            <h1 className=' flex gap-5'>Holiday Package <span><FaAngleDown className=' h-16 text-orange-500' /></span></h1>
            <h1 className=' flex gap-5'>Resort <span><FaAngleDown className=' h-16 text-orange-500' /></span></h1>
          </div>
        </div>
        <div className=' px-20 my-auto w-full h-screen flex justify-between'>
          <div className=' my-auto h-auto w-2/5 '>
            <img className=' w-full h-full object-cover' src={pageTar} alt="" />
          </div>
          <div className='w-2/5 h-auto  my-auto bg-[#F7F7F7] py-24 px-24 rounded-[80px] mr-[900px]'>
            <h1 className=' text-[55px] w-4/4'>
              About Tripadvisor
              Tripadvisor, the world's largest travel platform*, helps 463 million travelers each month** make every trip their best trip. Travelers across the globe use the Tripadvisor site and app to browse more than 859 million reviews and opinions of 8.6 million accommodations, restaurants, experiences, airlines and cruises. Whether planning or on a trip, travelers turn to Tripadvisor to compare low prices on hotels, flights and cruises, book popular tours and attractions, as well as reserve tables at great restaurants. Tripadvisor, the ultimate travel companion, is available in 49 markets and 28 languages.
              The subsidiaries and affiliates of Tripadvisor, Inc. (NASDAQ:TRIP) own and operate a portfolio of websites and businesses, including the following travel media brands:
            </h1>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className=' w-full h-screen bg-cover' style={{ backgroundImage: `url(${background})` }}>
      <div className=' w-full  h-28 flex inline-flex justify-between pr-5 md:h-96 font-sans'>

        <div className=' flex inline-flex  '>
          <img className=' md:w-[280px]  ' src={logo} alt="" width={80} />
          <h1 className=' my-auto font-bold text-xl md:text-6xl font-sans'>Trekk & Travels</h1>
          <div className='flex inline-flex justify-center mt-8 ml-[-50px]'>
            <h1 className=' text-[10px] mx-auto text-center my-auto md:hidden'>HOLIDAYS</h1>
          </div>
          <nav className={`w-60 bg-gray-800 ${menu ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 bottom-0 z-50 transition-transform duration-300 ease-in-out`}>
            <ul className=' text-gray-300 py-5  px-5 my-2 '>
              <li><img src={logo} alt="" width={50} /></li>

              <li className=' my-5' onClick={homeNavigation}>Home</li>
              <hr />
              <li className=' my-5' onClick={honeymoonNavigation}>Honeymoon Package</li>
              <hr />
              <li className=' my-5' onClick={familyNavigation}>Family Package</li>
              <hr />
              <li className=' my-5' onClick={holidayNavigation}>Holiday Package</li>
              <hr />
              <li className=' my-5'>Resort</li>
              <hr />
              <li className=' my-5' onClick={aboutUsNavigation}>About us</li>
              <hr />
              <li className=' my-5' onClick={contactNavigation}>Contact Us</li>
              <hr />
            </ul>
          </nav>
        </div>
        <div className=' flex inline-flex md:hidden'>
          <img onClick={toggle} className='  my-auto' src={slideIcon} alt="" width={50} />
        </div>

      </div>
      <div className=''>
        <img src={pageTar} alt="" />
      </div>
      <div className=' px-5'>

        <div className=' w-full mx-auto px-5 py-5 rounded-2xl bg-[#F7F7F7] h-auto mt-10'>
          <h1 className=' text-xs font-semibold '>
            About Tripadvisor
            Tripadvisor, the world's largest travel platform*, helps 463 million travelers each month** make every trip their best trip. Travelers across the globe use the Tripadvisor site and app to browse more than 859 million reviews and opinions of 8.6 million accommodations, restaurants, experiences, airlines and cruises. Whether planning or on a trip, travelers turn to Tripadvisor to compare low prices on hotels, flights and cruises, book popular tours and attractions, as well as reserve tables at great restaurants. Tripadvisor, the ultimate travel companion, is available in 49 markets and 28 languages.
            The subsidiaries and affiliates of Tripadvisor, Inc. (NASDAQ:TRIP) own and operate a portfolio of websites and businesses, including the following travel media brands:
          </h1>
        </div>
      </div>
    </div>
  )
}


export default Navbar