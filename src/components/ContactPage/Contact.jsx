import React, { useState } from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
import slideIcon from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/ICON.png'
import papperTar from '../../TREKK TRAVEL ASSETSS/CONTACT/papertar.webp'
import whatsapp from '../../TREKK TRAVEL ASSETSS/CONTACT/whatsapp-btn.webp'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query'
import { FaAngleDown } from 'react-icons/fa'
import bag from '../../TREKK TRAVEL ASSETSS/CONTACT/bag.webp'
function Contact() {
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
  const resortNavigation = () => {
    navigate('/resorts')
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
      <div className=' w-full h-auto bg-[#E7E7E7]'>
        <div className=' flex justify-between pl-[150px] w-3/4 h-auto '>
          <div className=' flex gap-5'>
            <img src={logo} alt="" width={250} />
            <h1 className=' text-[70px] font-semibold my-auto'>Trekk & travel</h1>
          </div>
          <div className=' flex justify-between w-4/6 my-auto '>
            <h1 onClick={homeNavigation} className=' text-[55px] flex gap-5 '>Home</h1>
            <h1 onClick={honeymoonNavigation} className=' text-[55px] flex gap-5 '>Honeymoon Package</h1>
            <h1 onClick={familyNavigation} className=' text-[55px] flex gap-5 '>Family Package </h1>
            <h1 onClick={holidayNavigation} className=' text-[55px] flex gap-5 '>Holiday Package</h1>
            <h1 onClick={resortNavigation} className=' text-[55px] flex gap-5 '>Resort </h1>
          </div>
        </div>
        <div className=' w-4/5 h-auto my-auto flex justify-between mx-auto py-36'>
          <div className=' w-4/5 h-auto mx-auto my-auto '>
            <div className=' w-3/4'>
              <img className=' ml-[-140px] w-[1500px]' src={papperTar} alt=""  />
              <img className=' my-36' src={whatsapp} alt="" width={1000} />
              <h1 className=' uppercase text-[80px] font-semibold text-[#53BC5E]'>get in touch</h1>
              <h1 className=' text-gray-500 text-[60px] w-3/4'>Founded in 2011, TravelTriangle is India’s leading online travel marketplace bringing both the traveler and expert Travel-Agents on a common platform.</h1>
              <h1 className=' uppercase text-[80px] font-semibold text-[#53BC5E] mt-36'>Email</h1>
              <h1 className=' font-semibold text-[60px] w-2/4'>shafeeq123@gmail.com</h1>
              <h1 className=' uppercase text-[55px] font-semibold text-[#53BC5E] mt-36'>phone No</h1>
              <h1 className=' font-semibold text-[60px] w-2/4'>12123455566666</h1>
              <h1 className=' font-semibold text-[60px] w-2/4'>12123455566666</h1>
              <h1 className=' uppercase text-[85px] font-semibold text-[#53BC5E] mt-36'>office</h1>
              <h1 className=' text-[60px] font-semibold w-2/4'>Palam Jn, Natyamangalam, road, Kattuppara, Kerala 679323</h1>

            </div>
          </div>
          <div>
              <img src={bag} alt="" width={2000} />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className=' w-full h-auto bg-[#E7E7E7]'>

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
              <li className=' my-5' onClick={resortNavigation}>Resort</li>
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
      <div className=' w-full'>
        <img src={papperTar} alt="" />
      </div>
      <div className=' my-5 mx-auto w-full px-5'>
        <img className=' mx-auto' src={whatsapp} alt="" width={200} />
      </div>
      <div className=' my-5 mx-auto w-full text-center px-5'>
        <h1 className=' uppercase font-semibold text-[#53BC5E]'>get in touch</h1>
        <h1 className=' my-3 text-sm font-semibold'>Founded in 2011, Trekk&Tavel is India’s leading online travel marketplace bringing both the traveler and expert Travel-Agents on a common platform.</h1>
        <h1 className='  uppercase font-semibold text-[#53BC5E]'>Email</h1>
        <h1 className=' my-2 text-sm font-semibold'>Shafeeq123@gmail.com</h1>
        <h1 className='  uppercase font-semibold text-[#53BC5E]'>phone no</h1>
        <h1 className=' mt-2 text-sm font-semibold'>12123455566666</h1>
        <h1 className='  text-sm font-semibold'>12123455566666</h1>
        <h1 className=' my-2 uppercase font-semibold text-[#53BC5E]'>office</h1>
        <h1 className='  text-sm w-3/4 mx-auto mb-5 font-semibold'>Palam Jn, Natyamangalam, road,
          Kattuppara, Kerala 679323</h1>
      </div>
    </div>
  )
}

export default Contact