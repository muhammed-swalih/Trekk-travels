import axios from 'axios';
import React, { useEffect, useState } from 'react'
import heart from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/heart-icon.webp'
import { useMediaQuery } from '@react-hook/media-query';
import {AiOutlineCaretRight ,AiOutlineCaretLeft ,AiOutlineRight ,AiOutlineLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {BiRupee} from 'react-icons/bi'
function BestHoneymoon() {
    const navigate = useNavigate()
    const [image, setImage] = useState([])
    const fetchHoneyMoonPackage = async () => {
        const response = await axios.get('https://trekkandtravel.onrender.com/packages/honeymoon');
        setImage(response.data)
        console.log(response.data);
    }
    const naviageHoneymoonDetails = (id)=>{
        navigate(`/honeymoondetails/${id}`)
    }

    const handleNextImage = ()=>{
        document.getElementById('honeymoonPackage').scrollLeft-=1500
    }

    const handlePrevImage = ()=>{
        document.getElementById('honeymoonPackage').scrollLeft+=1500
    }
    useEffect(() => {
        fetchHoneyMoonPackage();
    }, [])
    const isMediumScreen = useMediaQuery("(min-width : 640px)")
    if (isMediumScreen) {
        return (
            <div className='  w-full  h-auto bg-[#EBEBEB] py-10 '>
                <div className=' flex w-4/5 mx-auto  flex-col gap-3'>
                    <h1 className=' uppercase font-semibold text-orange-500'>top destinations</h1>
                    <div className='flex justify-between'>
                        <h1 className=' font-semibold text-4xl flex gap-2'>Best Honeymoon package <span><img src={heart} alt="" width={40} /></span></h1>
                        <div className=' flex gap-2'>
                            <button onClick={handleNextImage} className=' bg-orange-500 px-3 rounded-full py-3'><AiOutlineCaretLeft /></button>
                            <button onClick={handlePrevImage} className=' bg-orange-500 px-3 rounded-full py-3'><AiOutlineCaretRight /></button>
                        </div>
                    </div>
                    <div id='honeymoonPackage' className='relative scroll-smooth flex gap-3 overflow-scroll hide-scrollbar rounded-2xl mt-5'>
                        {image.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (

                                <div className='relative flex-shrink-0 rounded-2xl w-[350px] h-60 bg-black'>
                                    <img className='opacity-50 w-full h-full object-cover rounded-2xl' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    <h1 className=' absolute top-36 text-white text-3xl font-light left-3 '>{items ? items.place : "nothing"}</h1>
                                    <h1 className=' absolute top-[185px] text-white text-sm  font-light left-3 '>{items ? items.days : "nothing"}</h1>
                                    <h1 className=' absolute top-[210px] text-white text-xs  font-light left-3 flex'><span className=' '><BiRupee/></span>{items ? items.price : "nothing"}</h1>
                                    <button onClick={()=>naviageHoneymoonDetails(items._id)} className='absolute top-[190px] text-white border  py-1 border-1 border-white px-2 rounded right-3'>View Deal</button>
                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>
        )
    }
    return (
        <div className=' w-full h-auto bg-[#EBEBEB]  py-5'>
            <div className=' px-5'>
                <h1 className=' font-bold tracking-wide text-orange-500 uppercase text-sm'>Top Destination</h1>
                <h1 className=' text-xl font-bold flex inline-flex gap-1 '>Best Honeymoon Package <span><img className='' src={heart} alt="" width={30} /></span></h1>
                <div className='  flex overflow-scroll py-5 gap-3 relative hide-scrollbar'>
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
                                    naviageHoneymoonDetails(items._id)
                                }} className=' absolute top-48 mr-2 right-0  '>
                                    <h1 className=' px-2 py-2 rounded-xl  float-right uppercase text-sm font-semibold text-white border border-1 font-light '>view deal</h1>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default BestHoneymoon