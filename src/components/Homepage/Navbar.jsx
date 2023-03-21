import React, { useEffect, useState } from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
import slideIcon from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/ICON.png'
import 'typeface-poppins'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query'
import { FaAngleDown } from 'react-icons/fa'
function Navbar() {

  const isMediumScreen = useMediaQuery("(min-width : 640px)")
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  const [nav , setNav] = useState(false)

  //navbar handling

  const navBarTransition = ()=>{
    if(window.scrollY > 100){
      setNav (true)
    }else {
      setNav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',navBarTransition)
    return ()=>window.removeEventListener('scroll',navBarTransition);
  },[])


  //packages dropdown states

  const [isHoneymoonOpen, setIsHoneymoonOpen] = useState(false)
  const [isFamilyOpen , setIsFamilyOpen] = useState(false)
  const [isHolidayOpen , setIsHolidayOpen] = useState(false)
  const [isResortOpen , setIsResortOpen] = useState(false)

  //packages drop down function on mouseEnter and mouseLeave
  const handleHoneymoonHover = () => {
    setIsHoneymoonOpen(true)
  }
  const handleHoneymoonLeave = () => {
    setIsHoneymoonOpen(false)
  }

  const handleFamilyHover = () => {
    setIsFamilyOpen(true)
  }
  const handleFamilyLeave = () => {
    setIsFamilyOpen(false)
  }

  const handleHolidayHover = () => {
    setIsHolidayOpen(true)
  }
  const handleHolidayLeave = () => {
    setIsHolidayOpen(false)
  }

  const handleResortHover = () => {
    setIsResortOpen(true)
  }
  const handleResortLeave = () => {
    setIsResortOpen(false)
  }
  
  const toggle = () => {
    setMenu(!menu)
  }
  const honeymoonNavigation = () => {
    navigate('/honeymoonpackage')
  }
  const homeNavigation = () => {
    navigate('/')
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

  if (isMediumScreen) {

    return (

      <div className={nav ? ' w-full bg-[#EBEBEB] shadow-xl fixed z-10' : ' w-full bg-[#DCDCDC] shadow-xl fixed z-10' }>
          <div className=' w-5/6 h-auto  flex justify-between mx-auto'>
            <div className=' flex gap-2'>
              <img className=' ' src={logo} alt="" width={60} />
              <h1 className=' my-auto font-semibold text-lg'>Trekk & travel</h1>
              <h1 className='uppercase text-xs mt-12 ml-[-65px]'>holidays</h1>
            </div>
            <div className=' my-auto flex gap-10 font-medium'>
              <h1 onClick={homeNavigation} className='text-sm hover:underline hover:text-blue-800'>Home</h1>
              <h1 onClick={honeymoonNavigation} className='text-sm hover:underline hover:text-blue-800'>Honeymoon package</h1>
              <h1 onClick={familyNavigation} className='text-sm hover:underline hover:text-blue-800'>Family package</h1>
              <h1 onClick={holidayNavigation} className='text-sm hover:underline hover:text-blue-800'>Holiday package</h1>
              <h1 onClick={resortNavigation} className='text-sm hover:underline hover:text-blue-800'>Resort</h1>
              <h1 onClick={aboutUsNavigation} className='text-sm hover:underline hover:text-blue-800'>About us</h1>
              <h1 onClick={contactNavigation} className='text-sm hover:underline hover:text-blue-800'>contact</h1>
            </div>
          </div>
      </div>

      //w-full h-auto bg-[#DCDCDC] fixed z-10
      // <div className={nav ? 'w-full h-auto bg-[#EBEBEB] fixed z-10' : 'w-full h-auto bg-[#DCDCDC] fixed z-10'}> 
      //   <div className={nav ? 'md:w-full mx-auto flex inline-flext gap-80 justify-evenly bg-[#EBEBEB]' : 'md:w-4/4 mx-auto flex inline-flex gap-5 justify-evenly bg-[#DCDCDC]' }>
      //     {/* <div className=' md:flex inline-flex px-20'>
      //       <img className=' md:w-[60px]' src={logo} alt="" width={50} />
      //       <h1 className=' md:my-auto font-bold text-lg flex inline-flex '>Trekk & Travel</h1>
      //       <h1 className=' uppercase my-auto text-xs'>holidays</h1>
      //     </div>
      //     <div className=' md:flex inline-flex gap-40'>
      //       <div className='  my-auto font-medium  text-xs'>
      //         <h1 onClick={homeNavigation}  className=' flex gap-5 hover:text-blue-900 hover:underline '>Home </h1>
      //       </div>
      //       <div className=' md:text-xs my-auto font-medium'>
      //         <h1 onClick={honeymoonNavigation}  className=' flex gap-5 hover:text-blue-900 hover:underline'>Honeymoon Packages </h1>
      //       </div>
      //       <div className=' md:text-xs my-auto font-medium'>
      //         <h1 onClick={familyNavigation} className=' flex gap-5 hover:text-blue-900 hover:underline'>Family Packages </h1>
      //       </div>
      //       <div className=' md:text-xs my-auto font-medium'>
      //         <h1 onClick={holidayNavigation} className=' flex gap-5 hover:text-blue-900 hover:underline'>Holiday Packages</h1>
      //       </div>
      //       <div className=' md:text-xs my-auto font-medium'>
      //         <h1 onClick={resortNavigation} className=' flex gap-5 hover:text-blue-900 hover:underline'>Resorts </h1>
      //       </div>
      //       <div className=' md:text-xs my-auto font-medium'>
      //         <h1 onClick={contactNavigation}  className='flex gap-5 hover:text-blue-900 hover:underline'>Contact</h1>
      //       </div>
      //       <div className=' md:text-xs my-auto font-medium'>
      //         <h1 onClick={aboutUsNavigation}  className='flex gap-5 hover:text-blue-900 hover:underline'>About</h1>
      //       </div>
      //     </div> */}
      //     <div className=' w-96 h-10 bg-black  flex justify-between mx-auto'>
      //         <h1>hello</h1>
      //     </div>
      //   </div>
      // </div>
    )
  }

  return (
    <div className=' w-full bg-[#DCDCDC] h-28 flex inline-flex justify-between pr-5  md:h-96 font-sans'>

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
            <li  className=' my-5' onClick={resortNavigation}>Resort</li>
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
  )
}

export default Navbar