import React, { useState } from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
import slideIcon from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/ICON.png'
import background from '../../TREKK TRAVEL ASSETSS/ABOUT US/MOBILE-BG.webp'
import pcBg from '../../TREKK TRAVEL ASSETSS/ABOUT US/BG.webp'
import pageTar from '../../TREKK TRAVEL ASSETSS/ABOUT US/page-tar.webp'
import { AiOutlineCaretRight, AiOutlineCaretLeft, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import 'typeface-poppins'
import { FaArrowCircleDown, FaAngleDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query'
function Navbar() {
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
        <div className=' w-[1150px] h-auto  flex justify-between mx-auto'>
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
            <h1 onClick={contactNavigation} className='text-sm hover:underline hover:text-blue-800'>contact</h1>
          </div>
        </div>
        <div className=' flex flex-col min-h-screen h-auto w-[1150px] pb-10 mx-auto my-auto'>
          <div className=' my-auto w-[1150px]'>
            <img className='mx-auto' src={pageTar} alt="" width={500} />
          </div>
          <div className=' w-[800px] h-auto px-20 py-10 text-center font-medium bg-white my-auto rounded-xl mx-auto'>
            <h1>Trekk & travel holidays is a professional team of passionate travel professionals. specializes in designing top end, budget oriented, travel products focusing on Cultural & Heritage, Adventure, Wildlife, Yoga & Ayurveda and Wellness, Beaches, Trains and Cruises, Incentive Weddings and Medical Tourism.
              We create personalised travel itineraries and offer the hassle-free holiday experience based on the guest's interests and requirements and choices. Ranging from luxury, heritage, and cultural holidays; adventure treks, cycling tours; incentive groups, events, Trekk & travel holidays is a one stop for all travel and holidaying needs.</h1>
            <ul className='  ml-5 list-disc text-left py-10  '>
              <li className=' my-2'>Highest Operating Standards</li>
              <li className=' my-2'>Friendly & well-informed Staff</li>
              <li className=' my-2'>Travel itinerary consultations</li>
              <li className=' my-2'>Tailor made holiday packages</li>
              <li className=' my-2'>Private Tours for individuals and groups</li>
              <li className=' my-2'>Competent in organising and bookings</li>
              <li className=' my-2'>Save time and effort</li>
              <li className=' my-2'>Well Recognised Tour Operator</li>
            </ul>
            <div className=' text-left flex flex-col gap-14  '>
              <div>
                <div className=' uppercase  mb-4 font-semibold text-orange-500'>medical tourism</div>
                <h1 onClick={() => navigate('/kerala')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>kerala</h1>
                <h1 onClick={() => navigate('/bangalore')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>bangalore</h1>
                <h1 onClick={() => navigate('/mumbai')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>mumbai</h1>
                <h1 onClick={() => navigate('/delhi')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>new delhi</h1>
                <h1 onClick={() => navigate('/vellore')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>vellore</h1>
                <h1 onClick={() => navigate('/jaipur')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>jaipur</h1>
              </div>
              <div className=' '>
                <div className=' uppercase  mb-4 font-semibold text-orange-500'>TREATMENTS</div>
                <h1 onClick={() => navigate('/ayurveda')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>AYURVEDA</h1>
                <h1 onClick={() => navigate('/allopathy')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>ALLOPATHIC</h1>
                <h1 onClick={() => navigate('/homeo')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>HOMEOPATHIC</h1>
                <h1 onClick={() => navigate('/unani')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>UNANI</h1>
                <h1 onClick={() => navigate('/accu')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>ACUPUNCTURE</h1>
                <h1 onClick={() => navigate('/nature')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>NATUROPATHY</h1>
                <h1 onClick={() => navigate('/fragrant')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Fragrant healing</h1>
                <h1 onClick={() => navigate('/contemplation')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Contemplation</h1>
                <h1 onClick={() => navigate('/weight')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Weight reduction</h1>
                <h1 onClick={() => navigate('/cri')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>CHIROPRACTIC TREATMEN</h1>
              </div>
              <div className=' '>
                <div className=' uppercase  mb-4 font-semibold text-orange-500'>CLINICAL SPECIALITIES</div>
                <h1 onClick={() => navigate('/maligant')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Malignant growth CARE</h1>
                <h1 onClick={() => navigate('/heart')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>HEART CARE</h1>
                <h1 onClick={() => navigate('/dental')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Dental Care</h1>
                <h1 onClick={() => navigate('/skin')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Healthy skin</h1>
                <h1 onClick={() => navigate('/joint')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>JOINT CARE</h1>
                <h1 onClick={() => navigate('/diabetes')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DIABETES CARE</h1>
                <h1 onClick={() => navigate('/liver')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>LIVER TRANSPLANT</h1>
                <h1 onClick={() => navigate('/kidney')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>KIDNEY TRANSPLANT</h1>
                <h1 onClick={() => navigate('/backpain')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>BACK PAIN</h1>
                <h1 onClick={() => navigate('/infe')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Infertility </h1>
                <h1 onClick={() => navigate('/ivf')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>IVF (In Vitro Fertilization)</h1>
                <h1 onClick={() => navigate('/speech')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Speech Therapy</h1>
              </div>
              <div className=' '>
                <div className=' uppercase  mb-4 font-semibold text-orange-500'>MICE</div>
                <h1 onClick={() => navigate('/meetings')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>MEETINGS</h1>
                <h1 onClick={() => navigate('/incentives')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>INCENTIVES</h1>
                <h1 onClick={() => navigate('/conference')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>CONFERENCES</h1>
                <h1 onClick={() => navigate('/exhibitions')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>EXHIBITIONS</h1>
              </div>
              <div className=' '>
                <div className=' uppercase  mb-4 font-semibold text-orange-500'>Adventure N’ Leisure Activities </div>
                <h1 onClick={()=>navigate('/drumming')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DRUMMING</h1>
                <h1 onClick={()=>navigate('/flyboard')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>FLYBOARDING</h1>
                <h1 onClick={()=>navigate('/dragon')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DRAGON BOATING</h1>
                <h1 onClick={()=>navigate('/group')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>GROUP CANOE </h1>
                <h1 onClick={()=>navigate('/golf')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>GOLF </h1>
                <h1 onClick={()=>navigate('/sea')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>SEA KAYAKING </h1>
                <h1 onClick={()=>navigate('/dirt')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DIRT BIKING </h1>
                <h1 onClick={()=>navigate('/off')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>OFF ROAD DRIVING </h1>
                <h1 onClick={()=>navigate('/swim')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>SWIM WITH DOLPHINS </h1>
                <h1 onClick={()=>navigate('/rally')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>RALLY CAR DRIVING </h1>
                <h1 onClick={()=>navigate('/quad')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>QUAD BIKE RIDING </h1>
                <h1 onClick={()=>navigate('/dive')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DIVE WITH SHARKS </h1>
                <h1 onClick={()=>navigate('/sea')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>SEGWAY TOURS </h1>
                <h1 onClick={()=>navigate('/sky')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>SKY DIVING </h1>
                <h1 onClick={()=>navigate('/paint')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>PAINTBALL </h1>
                <h1 onClick={()=>navigate('/bungee')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>BUNGEE JUMPING  </h1>
                <h1 onClick={()=>navigate('/flying')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>FLYING FOX </h1>
                <h1 onClick={()=>navigate('/clay')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>CLAY PIGEON SHOOTING </h1>
              </div>
              <div className=' '>
                <h1 onClick={()=>navigate('/gala')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>gala dining </h1>

              </div>

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
      <div className=' px-2'>

        <div className='  w-full mx-auto px-5 py-5 font-medium  rounded-2xl bg-[#F7F7F7] h-auto mt-10'>
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
          <div className=' text-left flex flex-col gap-14  my-10 '>
            <div>
              <div className=' uppercase  mb-4 font-semibold text-orange-500'>medical tourism</div>
              <h1 onClick={() => navigate('/kerala')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>kerala</h1>
              <h1 onClick={() => navigate('/bangalore')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>banglore</h1>
              <h1 onClick={() => navigate('/mumbai')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>mumbai</h1>
              <h1 onClick={() => navigate('/delhi')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>new delhi</h1>
              <h1 onClick={() => navigate('/vellore')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>vellore</h1>
              <h1 onClick={() => navigate('/jaipure')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>jaipur</h1>
            </div>
            <div className=' '>
              <div className=' uppercase  mb-4 font-semibold text-orange-500'>TREATMENTS</div>
              <h1 onClick={() => navigate('/ayurveda')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>AYURVEDA</h1>
              <h1 onClick={() => navigate('/allopathy')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>ALLOPATHIC</h1>
              <h1 onClick={() => navigate('/homeo')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>HOMEOPATHIC</h1>
              <h1 onClick={() => navigate('/unani')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>UNANI</h1>
              <h1 onClick={() => navigate('/accu')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>ACUPUNCTURE</h1>
              <h1 onClick={() => navigate('/nature')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>NATUROPATHY</h1>
              <h1 onClick={() => navigate('/fragrant')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Fragrant healing</h1>
              <h1 onClick={() => navigate('/contemplation')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Contemplation</h1>
              <h1 onClick={() => navigate('/weight')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Weight reduction</h1>
              <h1 onClick={() => navigate('/cri')} className=' flex gap-5 uppercase cursor-pointer hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>CHIROPRACTIC TREATMEN</h1>
            </div>
            <div className=' '>
              <div className=' uppercase  mb-4 font-semibold text-orange-500'>CLINICAL SPECIALITIES</div>
              <h1 onClick={() => navigate('/maligant')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Malignant growth CARE</h1>
              <h1 onClick={() => navigate('/heart')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>HEART CARE</h1>
              <h1 onClick={() => navigate('/dental')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Dental Care</h1>
              <h1 onClick={() => navigate('/skin')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Healthy skin</h1>
              <h1 onClick={() => navigate('/joint')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>JOINT CARE</h1>
              <h1 onClick={() => navigate('/diabetes')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DIABETES CARE</h1>
              <h1 onClick={() => navigate('/liver')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>LIVER TRANSPLANT</h1>
              <h1 onClick={() => navigate('/kidney')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>KIDNEY TRANSPLANT</h1>
              <h1 onClick={() => navigate('/backpain')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>BACK PAIN</h1>
              <h1 onClick={() => navigate('/infe')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Infertility </h1>
              <h1 onClick={() => navigate('/ivf')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>IVF (In Vitro Fertilization)</h1>
              <h1 onClick={() => navigate('/speech')} className=' flex gap-5 cursor-pointer uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>Speech Therapy</h1>
            </div>
            <div className=' '>
              <div className=' uppercase  mb-4 font-semibold text-orange-500'>MICE</div>
              <h1 onClick={() => navigate('/meetings')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>MEETINGS</h1>
              <h1 onClick={() => navigate('/incentives')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>INCENTIVES</h1>
              <h1 onClick={() => navigate('/conference')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>CONFERENCES</h1>
              <h1 onClick={() => navigate('/exhibitions')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>EXHIBITIONS</h1>
            </div>
            <div className=' '>
              <div className=' uppercase  mb-4 font-semibold text-orange-500'>Adventure N’ Leisure Activities </div>
              <h1 onClick={()=>navigate('/drumming')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DRUMMING</h1>
              <h1 onClick={()=>navigate('/flyboard')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>FLYBOARDING</h1>
              <h1 onClick={()=>navigate('/dragon')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DRAGON BOATING</h1>
              <h1 onClick={()=>navigate('/group')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>GROUP CANOE </h1>
              <h1 onClick={()=>navigate('/golf')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>GOLF </h1>
              <h1 onClick={()=>navigate('/sea')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>SEA KAYAKING </h1>
              <h1 onClick={()=>navigate('/dirt')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DIRT BIKING </h1>
              <h1 onClick={()=>navigate('/off')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>OFF ROAD DRIVING </h1>
              <h1 onClick={()=>navigate('/swim')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>SWIM WITH DOLPHINS </h1>
              <h1 onClick={()=>navigate('/rally')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>RALLY CAR DRIVING </h1>
              <h1 onClick={()=>navigate('/quad')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>QUAD BIKE RIDING </h1>
              <h1 onClick={()=>navigate('/dive')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>DIVE WITH SHARKS </h1>
              <h1 onClick={()=>navigate('/sea')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>SEGWAY TOURS </h1>
              <h1 onClick={()=>navigate('/sky')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>SKY DIVING </h1>
              <h1 onClick={()=>navigate('/paint')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>PAINTBALL </h1>
              <h1 onClick={()=>navigate('/bungee')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>BUNGEE JUMPING  </h1>
              <h1 onClick={()=>navigate('/flying')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>FLYING FOX </h1>
              <h1 onClick={()=>navigate('/clay')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>CLAY PIGEON SHOOTING </h1>
            </div>
            <div className=' '>
              <h1 onClick={()=>navigate('/gala')} className=' flex gap-5 uppercase hover:underline hover:text-blue-800 hover:font-semibold'><span className=' mt-1'><AiOutlineCaretRight /></span>gala dining </h1>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar