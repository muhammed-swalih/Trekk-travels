import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaGreaterThan, FaLessThan, FaRupeeSign  } from 'react-icons/fa'
import {AiOutlineCaretRight ,AiOutlineCaretLeft ,AiOutlineRight ,AiOutlineLeft} from 'react-icons/ai'
import flight from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/flighgt.webp'
import testImage from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/testImage.webp'
import { useMediaQuery } from '@react-hook/media-query'
import { useNavigate } from 'react-router-dom'
import '../styles/scrollbar.css'
import {BiRupee} from 'react-icons/bi'
function TopDestination() {
    const navigate = useNavigate()
    const [image, setImage] = useState([])
    const fetchHoneyMoonPackage = async () => {
        const response = await axios.get('https://trekkandtravel.onrender.com/packages/holiday');
        setImage(response.data)
        console.log(response.data);
    }
    useEffect(() => {
        fetchHoneyMoonPackage();
    }, [])

    const navigateHolidayDetails = (id)=>{
        navigate(`/holidaydetails/${id}`)
       
    }

    const handleNextImage = ()=>{
        document.getElementById('packages').scrollLeft-=1500
    }

    const handlePrevImage = ()=>{
        document.getElementById('packages').scrollLeft+=1500
    }
    const isMediumScreen = useMediaQuery("(min-width : 640px)")
    if (isMediumScreen) {
        return (
            <div className=' pt-[250px] pb-[400px] w-4/4 h-auto bg-[#EBEBEB] '>
                <div className=' w-5/6 h-auto mx-auto '>
                    <h1 className=' uppercase text-[65px] font-semibold text-orange-500'>top destination</h1>
                    <h1 className=' text-[105px] my-3 font-semibold flex gap-5'>Explore Top Destination <span><img src={flight} alt="" width={180} /></span></h1>
                </div>
                <div className=' w-5/6 h-auto  mx-auto flex justify-end gap-20'>
                    <button onClick={handleNextImage} className=' px-[50px] py-[50px] rounded-full text-[60px] bg-orange-400'><h1 className=' my-auto mx-auto'><AiOutlineLeft/></h1></button>
                    <button onClick={handlePrevImage} className=' px-[50px] py-[50px] rounded-full text-[60px] bg-orange-400'><h1 className=' my-auto mx-auto'><AiOutlineRight/></h1></button>
                </div>
                <div id='packages' className=' scroll-smooth flex gap-16 w-5/6 h-auto my-20 mt-32 mx-auto overflow-scroll hide-scrollbar rounded-3xl'>
                    {
                        image.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (
                                <div className='relative flex-shrink-0 w-[1450px] h-[900px] bg-black rounded-3xl'>
                                    <img className='opacity-50 w-full h-full object-cover rounded-3xl' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    <div className=' absolute ml-5 top-[520px] w-full'>
                                        <h1 className=' text-[100px] w-auto rounded-lg my-3 font-light text-white px-5'>{items.place}</h1>
                                        <h1 className=' text-[50px] text-gray-600 w-[600px] my-3 font-light text-white px-5'>{items.days}</h1>
                                        <h1 className=' text-[50px] w-auto my-3 font-light text-white px-5 flex inline-flex'><span className=' text-[65px]'><BiRupee/></span>{items.price}</h1>
                                    </div>
                                    <div onClick={()=>{
                                        navigateHolidayDetails(items._id)
                                    }} className=' absolute top-[720px] rounded-2xl right-5 mr-10 cursor-pointer'>
                                        <h1 className=' px-5 py-4 rounded-2xl float-right uppercase text-[55px] font-semibold text-white border border-1 font-light  '>view deal</h1>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
                    
            </div>
        )
    }
    return (
        <div className=' w-full h-auto bg-[#EBEBEB]  py-5'>
            <div className=' px-5'>
                <h1 className=' font-bold tracking-wide text-orange-500 uppercase text-sm'>Top Destination</h1>
                <h1 className=' text-xl font-bold flex inline-flex gap-1'>Explore Top Destination <span><img src={flight} alt="" width={30} /></span></h1>
                <div className='  flex overflow-scroll py-5 gap-3 relative'>
                    {image.map((items) => {
                        const base64String = btoa(
                            String.fromCharCode(...new Uint32Array((items.image.data.data)))
                        )
                        return (

                            <div className=' relative flex-shrink-0 w-3/4 h-60 shadow-xl bg-black rounded-lg'>
                                <img className='opacity-50 w-full h-full object-cover rounded-lg' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                <div className='absolute top-[152px] ml-[-15px] font-bold text-black left-5   '>
                                    <h1 className=' my-1 font-light text-white rounded-sm px-1 text-2xl w-auto h-auto pr-2'>{items.place}</h1>
                                    <h1 className=' my-1 font-light text-white rounded-sm text-gray-500 text-xs px-1 w-auto '>{items.days}</h1>
                                    <h1 className=' my-1 font-light text-white rounded-sm text-black text-xs px-1 w-auto flex inline-flex'><span className=' text-lg'><BiRupee/></span>{items.price}</h1>
                                </div>
                                <div onClick={()=>{
                                    navigateHolidayDetails(items._id)
                                }} className=' absolute top-48 mr-2 right-0'>
                                        <h1 className=' px-2 py-2 rounded-lg float-right uppercase text-sm font-semibold text-white border border-1 font-light '>view deal</h1>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TopDestination