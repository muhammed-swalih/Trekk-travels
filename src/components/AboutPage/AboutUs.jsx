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
  const resortNavigation = () => {
    navigate('/resorts')
  }
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  if (isMediumScreen) {
    return (
      <div className=' w-full min-h-screen h-auto bg-contain' style={{ backgroundImage: `url(${pcBg})` }}>
        <div className=' w-3/4 h-80 flex justify-between pl-[350px]'>
          <div className=' font-semibold text-[60px] my-auto'>Trekk & Travel</div>
          <div className=' flex justify-evenly text-[50px] my-auto w-3/4'>
            <h1 onClick={homeNavigation} className=' flex gap-5 hover:underline hover:text-blue-800'>Home </h1>
            <h1 onClick={honeymoonNavigation} className=' flex gap-5 hover:underline hover:text-blue-800'>Honeymoon Package </h1>
            <h1 onClick={familyNavigation} className=' flex gap-5 hover:underline hover:text-blue-800'>Family Package </h1>
            <h1 onClick={holidayNavigation} className=' flex gap-5 hover:underline hover:text-blue-800'>Holiday Package </h1>
            <h1 onClick={resortNavigation} className=' flex gap-5 hover:underline hover:text-blue-800'>Resort </h1>
          </div>
        </div>
        <div className=' px-20 my-auto w-full h-screen flex justify-between'>
          <div className=' my-auto h-auto w-2/5 '>
            <img className=' w-full h-full object-cover' src={pageTar} alt="" />
          </div>
          <div className='w-2/5 h-auto  my-auto bg-[#F7F7F7] font-medium py-24 px-24 rounded-[80px] mr-[900px]'>
            <h1 className=' text-[55px] w-4/4'>
              Trekk & travel holidays is a professional team of passionate travel professionals. specializes in designing top end, budget oriented, travel products focusing on Cultural & Heritage, Adventure, Wildlife, Yoga & Ayurveda and Wellness, Beaches, Trains and Cruises, Incentive Weddings and Medical Tourism.
              We create personalised travel itineraries and offer the hassle-free holiday experience based on the guest's interests and requirements and choices. Ranging from luxury, heritage, and cultural holidays; adventure treks, cycling tours; incentive groups, events, Trekk & travel holidays is a one stop for all travel and holidaying needs.
            </h1>
            <div className=' text-[55px] mt-[50px] ml-[50px] '>
              <ul className=' list-disc'>
                <li>Highest Operating Standards</li>
                <li>Friendly & well-informed Staff</li>
                <li>Travel itinerary consultations</li>
                <li>Tailor made holiday packages</li>
                <li>Private Tours for individuals and groups</li>
                <li>Competent in organising and bookings</li>
                <li>Save time and effort</li>
                <li>Well Recognised Tour Operator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className=' w-full min-h-screen h-auto bg-cover pb-10' style={{ backgroundImage: `url(${background})` }}>
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
              <li onClick={resortNavigation} className=' my-5'>Resort</li>
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

        <div className=' text-md w-full mx-auto px-5 py-5 font-medium  rounded-2xl bg-[#F7F7F7] h-auto mt-10'>
          <h1 className='   '>
            Trekk & travel holidays is a professional team of passionate travel professionals. specializes in designing top end, budget oriented, travel products focusing on Cultural & Heritage, Adventure, Wildlife, Yoga & Ayurveda and Wellness, Beaches, Trains and Cruises, Incentive Weddings and Medical Tourism.
            We create personalised travel itineraries and offer the hassle-free holiday experience based on the guest's interests and requirements and choices. Ranging from luxury, heritage, and cultural holidays; adventure treks, cycling tours; incentive groups, events, Trekk & travel holidays is a one stop for all travel and holidaying needs.
          </h1>
          <div className=' mt-5 ml-5'>
            <ul className=' list-disc '>
              <li className=' my-3'>Highest Operating Standards</li>
              <li className=' my-3'>Friendly & well-informed Staff</li>
              <li className=' my-3'>Travel itinerary consultations</li>
              <li className=' my-3'>Tailor made holiday packages</li>
              <li className=' my-3'>Private Tours for individuals and groups</li>
              <li className=' my-3'>Competent in organising and bookings</li>
              <li className=' my-3'>Save time and effort</li>
              <li className=' my-3'>Well Recognised Tour Operator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar