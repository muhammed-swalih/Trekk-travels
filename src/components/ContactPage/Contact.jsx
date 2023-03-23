import React, { useState } from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
import slideIcon from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/ICON.png'
import papperTar from '../../TREKK TRAVEL ASSETSS/CONTACT/papertar.webp'
import whatsapp from '../../TREKK TRAVEL ASSETSS/CONTACT/whatsapp-btn.webp'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query'
import { FaAngleDown, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import bag from '../../TREKK TRAVEL ASSETSS/CONTACT/bag.webp'
import { IoLocationSharp } from 'react-icons/io5'
function Contact() {
  const isTablet = useMediaQuery('(min-width : 640px)and(max-width: 1024px)');

  const isMediumScreen = useMediaQuery("(min-width : 1024px)")
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
      <div className=' w-full min-h-screen h-auto bg-[#E7E7E7]'>
         <div className=' w-[1150px] h-auto  flex justify-between mx-auto'>
            <div className=' flex gap-2'>
              <img className=' ' src={logo} alt="" width={60} />
              <h1 className=' my-auto font-semibold text-lg'>trekk & travel</h1>
              <h1 className='uppercase text-xs mt-12 ml-[-65px]'>holidays</h1>
            </div>
            <div className=' my-auto flex gap-10 font-medium'>
              <h1 onClick={homeNavigation} className='text-sm hover:underline hover:text-blue-800'>Home</h1>
              <h1 onClick={honeymoonNavigation} className='text-sm hover:underline hover:text-blue-800'>Honeymoon package</h1>
              <h1 onClick={familyNavigation} className='text-sm hover:underline hover:text-blue-800'>Family package</h1>
              <h1 onClick={holidayNavigation} className='text-sm hover:underline hover:text-blue-800'>Holiday package</h1>
              <h1 onClick={resortNavigation} className='text-sm hover:underline hover:text-blue-800'>Resort</h1>
              <h1 onClick={aboutUsNavigation} className='text-sm hover:underline hover:text-blue-800'>About us</h1>
            </div>
          </div>
          <div className=' w-[1150px] flex justify-between mx-auto pb-16'>
              <div className=' flex flex-col gap-3 mt-3'>
                  <div className='w-[700px]'>
                        <img src={papperTar} alt="" />
                  </div>
                  <div className='w-2/5 ml-10'>
                        <img src={whatsapp} alt="" />
                  </div>
                  <div className=' mt-5 ml-10'>
                    <h1 className=' font-semibold text-green-500 uppercase'>get in touch</h1>
                    <h1 className=' w-80 font-semibold text-gray-500'>Founded in 2019, Trekk and travel holidays  is India’s leading online & offline  travel marketplace bringing both the traveler and expert Travel-Agents on a common platform.</h1>
                  </div>
                  <div className=' mt-5 ml-10'>
                    <h1 className=' font-semibold text-green-500 uppercase'>email</h1>
                    <h1 className=' w-80 font-semibold'>Holidays@trekkandtravel.com</h1>
                  </div>
                  <div className=' mt-5 ml-10'>
                    <h1 className=' font-semibold text-green-500 uppercase'>phone</h1>
                    <h1 className=' w-80 font-semibold'>+91 483 268087</h1>
                    <h1 className=' w-80 font-semibold'>+91 9947172630</h1>
                    <h1 className=' w-80 font-semibold'>+91 8714332630</h1>
                    
                  </div>
                  <div className=' mt-5 ml-10'>
                    <h1 className=' font-semibold text-green-500 uppercase'>office</h1>
                    <h1 className=' w-80 font-semibold'>Palam Jn, Natyamangalam, road, Kattuppara, Kerala , India</h1>
                   
                  </div>
              </div>
              <div className=''>
                  <img src={bag} alt="" width={1000} />
              </div>
          </div>
          <div className=' w-full bg-[#232323] h-auto py-10'>
                <div className='mx-auto w-[1150px] h-auto flex justify-between'>
                    <div>
                        <div className=' flex flex-col'>
                            <div className=' flex '>
                            <img src={logo} alt="" width={80} />
                            <h1 className=' my-auto font-semibold text-xl text-white'>Trekk & Trevel</h1>
                            <h1 className=' uppercase my-auto text-xs mt-16 ml-[-55px] text-white'>holidays</h1>
                            </div>
                            <div className=' flex justify-between w-1/4 gap-4'>
                                <a className=' text-xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://wa.me/9947172630"><FaWhatsapp /></a>
                                <a className=' text-xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://instagram.com/trekkandtravel?igshid=YmMyMTA2M2Y="><FaInstagram /></a>
                                <a className=' text-xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://www.facebook.com/trekkandtravel?mibextid=LQQJ4d"><FaFacebook /></a>
                                <a className=' text-xl text-white bg-orange-500 px-2 py-2 rounded-full ' href="https://maps.app.goo.gl/T6f2gNVhectRp6ix6?g_st=iwb"><IoLocationSharp /></a>
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-col my-auto text-white font-medium '>
                        <div className=' flex flex-col'>
                            <h1 className=' flex gap-2'><span className=' mt-1'><IoLocationSharp/></span><span className=' text-lg font-medium upppercase'>OFFICE</span></h1>
                            <hr className=' border border-1 border-white w-60' />
                        </div>
                        <div className=' '>
                            <h1 className=' py-1 w-80'>Palam Jn, Natyamangalam, road, Kattuppara, Kerala 679323</h1>
                            <hr className='  border border-1 border-white w-60' />
                        </div>
                        <div className=' '>
                            <h1 className=' py-1 w-80'>Holidays@trekkandtravel.com</h1>
                            <h1 className=' mt-2'>+91 9947172630</h1>
                            <hr className='  border border-1 border-white w-60' />
                        </div>
                    </div>

                </div>

            </div>
        
      </div>
    )
  }
  return (
    <div className=' w-full min-h-screen h-auto bg-[#E7E7E7]'>

      <div className=' w-full  h-28 flex inline-flex justify-between pr-5  font-sans'>

        <div className=' flex inline-flex  '>
          <img className='   ' src={logo} alt="" width={80} />
          <h1 className=' my-auto font-bold text-xl '>Trekk & Travels</h1>
          <div className='flex inline-flex justify-center mt-8 ml-[-50px]'>
            <h1 className=' text-[10px] mx-auto text-center my-auto'>HOLIDAYS</h1>
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
        <div className=' flex inline-flex'>
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
        <h1 className=' my-2 text-sm font-semibold'>Holidays@trekkandtravel.com</h1>
        <h1 className='  uppercase font-semibold text-[#53BC5E]'>phone no</h1>
        <h1 className=' mt-2 text-sm font-semibold'>+91 9947172630</h1>
        <h1 className=' my-2 uppercase font-semibold text-[#53BC5E]'>office</h1>
        <h1 className='  text-sm w-3/4 mx-auto mb-5 font-semibold'>Palam Jn, Natyamangalam, road,
          Kattuppara, Kerala 679323</h1>
      </div>
      <div className=' w-full bg-[#232323] h-auto py-5 text-white'>
            <div className=' flex inline-flex items-center pl-7'>
                <img src={logo} alt="" width={50} />
                <h1 className=' font-bold'>Trekk & Travels</h1>
            </div>
            <div className=' flex flex-col items-start ml-10 gap-5'>
                <div className=' flex gap-2'>
                    <a href="https://wa.me/9947172630"><div className=' px-2 py-2 bg-orange-500 rounded-full'>
                        <div className=' text-white'><FaWhatsapp /></div>
                    </div></a>

                    <a href="https://instagram.com/trekkandtravel?igshid=YmMyMTA2M2Y="><div className='px-2 py-2 bg-orange-500 rounded-full '>
                        <div className=' text-white'><FaInstagram /></div>
                    </div></a>

                    <a href="https://www.facebook.com/trekkandtravel?mibextid=LQQJ4d"><div className='px-2 py-2 bg-orange-500 rounded-full'>
                        <div className=' text-white'><FaFacebook /></div>
                    </div></a>

                    <a href="https://maps.app.goo.gl/T6f2gNVhectRp6ix6?g_st=iwb"><div className='px-2 py-2 bg-orange-500 rounded-full'>
                        <div className=' text-white'><IoLocationSharp /></div>
                    </div></a>

                </div>
                <div className=' flex flex-col py-5 pb-10 '>
                    <div className=' flex flex-col my-2'>
                        <h1 className=' w-60 flex  gap-1'><span className=' flex text-lg'><IoLocationSharp/><span className=' uppercase font-medium'>office</span></span></h1>
                        <hr className=' my-1 w-24 border border-1 border-white' />
                    </div>
                    <div className=' my-1 w-60 '>
                        <h1>Palam Jn, Natyamangalam, road, Kattuppara, Kerala 679323</h1>
                        <hr  className=' my-2 border border-1 border-white'/>
                    </div>
                    <div className=' mt-1'>
                        <h1>Holidays@trekkandtravel.com</h1>
                        <h1 className=' text-lg mb-2'>+91 9947172630</h1>
                        <hr className=' border border-1 border-white' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact