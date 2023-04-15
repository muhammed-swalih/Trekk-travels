import React, { useContext, useEffect, useState } from 'react'
import testImage from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/maldives.webp'
import { useMediaQuery } from '@react-hook/media-query'
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext'
function KumarakomResorts() {
    const navigate = useNavigate()
    const navigateResort = (id) => {
        navigate(`/kumarakomresort/${id}`)
    }
    const {kumr} = useContext(DataContext)
    const [resort, setResort] = useState([])
    const handleNextImage = () => {
        document.getElementById('kumarakom').scrollLeft -= 500
    }

    const handlePrevImage = () => {
        document.getElementById('kumarakom').scrollLeft += 500
    }



    const isMediumScreen = useMediaQuery('(min-width : 1024px)')
    const isTablet = useMediaQuery('(min-width : 640px)and(max-width: 1024px)');

    if (isMediumScreen) {
        return (
            <div className=' pb-14 w-full h-auto bg-[#EBEBEB]  '>
                <div className=' flex w-[1150px] mx-auto  flex-col gap-3'>
                    <h1 className=' uppercase font-semibold text-orange-500'>top destinations</h1>
                    <div className='flex justify-between'>
                        <h1 className=' font-semibold text-4xl flex gap-2'>Best Kumarakom Resort</h1>
                        <div className=' flex gap-2'>
                            <button onClick={handleNextImage} className=' bg-orange-500 px-3 rounded-full py-3'><AiOutlineCaretLeft /></button>
                            <button onClick={handlePrevImage} className=' bg-orange-500 px-3 rounded-full py-3'><AiOutlineCaretRight /></button>
                        </div>
                    </div>
                    <div id='kumarakom' className='relative scroll-smooth flex gap-3 overflow-scroll hide-scrollbar rounded-2xl mt-5'>
                        {kumr.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (

                                <div className='relative flex-shrink-0 rounded-2xl w-[350px] h-60 bg-black'>
                                    <img className='opacity-50 w-full h-full object-cover rounded-2xl' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    <h1 className=' absolute top-44 text-white text-2xl font-light left-3 '>{items ? items.place : "nothing"}</h1>
                                    <button onClick={()=>navigateResort(items._id)} className='absolute top-[190px] text-white border font-semibold py-1 border-1 border-white px-2 rounded right-3'>View Deal</button>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        )
    }
    return (
        <div className=' w-full h-auto bg-[#EBEBEB] mt-[-8px]'>
            <div className=' w-full h-auto bg-[#EBEBEB]  py-5'>
                <div className=' px-5'>
                    <h1 className=' font-bold tracking-wide text-orange-500 uppercase text-sm'>Top Destination</h1>
                    <h1 className=' text-xl font-bold flex inline-flex gap-1'>Best Kumarakom Resorts <span><img src='' alt="" width={30} /></span></h1>
                    <div className='  flex overflow-scroll py-5 gap-3 relative hide-scrollbar'>

                        {kumr.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (

                                <div className=' relative flex-shrink-0 w-3/4 h-60 shadow-xl bg-black rounded-lg'>
                                    <img className='opacity-50 w-full h-full object-cover rounded-lg' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    <div className='absolute top-[152px] ml-[-15px] font-bold text-black left-5   '>
                                        <h1 className=' my-1 w-2/3 font-light text-white rounded-sm px-1 text-lg w-auto h-auto pr-2'>{items ? items.place : "place name"}</h1>
                                    </div>
                                    <div onClick={() => {
                                        navigateResort(items._id)
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

export default KumarakomResorts