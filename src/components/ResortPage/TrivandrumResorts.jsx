import React, { useEffect, useState } from 'react'
import testImage from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/maldives.webp'
import { useMediaQuery } from '@react-hook/media-query'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function TrivandrumResorts() {
    const navigate = useNavigate()
    const navigateTrivandrumResort = (id) => {
        navigate(`/trivandrumresort/${id}`)
    }

    const [resort, setResort] = useState([])
    const handleNextImage = () => {
        document.getElementById('trivandrum').scrollLeft -= 1500
    }

    const handlePrevImage = () => {
        document.getElementById('trivandrum').scrollLeft += 1500
    }

    const fetchHoneyMoonPackage = async () => {
        const response = await axios.get('/packages/trivandrum');
        setResort(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        fetchHoneyMoonPackage();
    }, [])
    const isMediumScreen = useMediaQuery('(min-width : 640px)')
    if (isMediumScreen) {
        return (
            <div className=' pb-[200px] w-4/4 h-auto bg-[#EBEBEB] pt-[650px] '>
                <div className=' w-5/6 h-auto mx-auto '>
                    <h1 className=' uppercase text-[65px] font-semibold text-orange-500'>top destination</h1>
                    <h1 className=' text-[105px] my-3 font-semibold flex gap-5'>Best Trivandrum Resorts <span><img src='' alt="" width={180} /></span></h1>
                </div>
                <div className=' w-5/6 h-auto  mx-auto flex justify-end gap-20'>
                    <button onClick={handleNextImage} className=' px-[50px] py-[50px] rounded-full text-[60px] bg-orange-400'><h1 className=' my-auto mx-auto'><AiOutlineLeft /></h1></button>
                    <button onClick={handlePrevImage} className=' px-[50px] py-[50px] rounded-full text-[60px] bg-orange-400'><h1 className=' my-auto mx-auto'><AiOutlineRight /></h1></button>
                </div>
                <div id='trivandrum' className=' scroll-smooth flex gap-16 w-5/6 h-auto  my-20 mt-32 mx-auto overflow-scroll hide-scrollbar rounded-3xl'>

                    {resort.map((items) => {
                        const base64String = btoa(
                            String.fromCharCode(...new Uint32Array((items.image.data.data)))
                        )
                        return (

                            <div className='relative flex-shrink-0 w-[1450px] h-[1000px] bg-black rounded-3xl'>
                                <img className=' opacity-50 w-full h-full object-cover rounded-3xl' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                <div className=' absolute ml-5 top-[650px] w-full'>
                                    <h1 className=' text-[90px] w-2/3 rounded-lg my-3 font-light text-white px-5'>{items ? items.place : "place Name"}</h1>
                                </div>
                                <div onClick={() => {
                                    navigateTrivandrumResort(items._id)
                                }} className=' absolute top-[800px] mr-10 rounded-2xl right-5 cursor-pointer'>
                                    <h1 className=' px-5 py-4 rounded-2xl float-right uppercase text-[55px] font-light text-white border border-1'>view deal</h1>
                                </div>


                            </div>
                        )
                    })}









                </div>
            </div>
        )
    }
    return (
        <div className=' w-full h-auto bg-[#EBEBEB] mt-[-8px]'>
            <div className=' w-full h-auto bg-[#EBEBEB]  py-5'>
                <div className=' px-5'>
                    <h1 className=' font-bold tracking-wide text-orange-500 uppercase text-sm'>Top Destination</h1>
                    <h1 className=' text-xl font-bold flex inline-flex gap-1'>Best Trivandrum Resorts <span><img src='' alt="" width={30} /></span></h1>
                    <div className='  flex overflow-scroll py-5 gap-3 relative'>

                        {resort.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (

                                <div className=' relative flex-shrink-0 w-3/4 h-60 shadow-xl bg-black rounded-lg'>
                                    <img className='opacity-50 w-full h-full object-cover rounded-lg' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    <div className='absolute top-[152px] overflow-x-hidden overflow-y-hidden ml-[-15px] font-bold text-black left-5   '>
                                        <h1 className=' my-1 font-light text-white w-2/3 rounded-sm px-1 text-lg  h-auto pr-2'>{items ? items.place : "place name"}</h1>
                                    </div>
                                    <div onClick={() => {
                                        navigateTrivandrumResort(items._id)
                                    }} className=' absolute top-48 mr-2 right-0'>
                                        <h1 className=' px-2 py-2 rounded-lg float-right uppercase text-sm font-semibold text-white border border-1 font-light '>view deal</h1>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrivandrumResorts