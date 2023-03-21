import React, { useEffect, useState } from 'react'
import mobileMaladives from '../../TREKK TRAVEL ASSETSS/ALL PACKAGE/Group-126.webp'
import testImage from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/testImage.webp'
import axios from 'axios'
import { useMediaQuery } from '@react-hook/media-query'
import holidayPaper from '../../TREKK TRAVEL ASSETSS/ALL PACKAGE/holiday.webp'
import { useNavigate } from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
import FamilyDetails from '../../Pages/FamilyDetails'
function PackageList() {
    const navigate = useNavigate();
    const isMediumScreen = useMediaQuery('(min-width : 640px)')
    const [image, setImage] = useState([])
    const fetchHoneyMoonPackage = async () => {
        const response = await axios.get('https://trekkandtravel.onrender.com/packages/holiday');
        setImage(response.data)
        console.log(response.data);
    }
    useEffect(() => {
        fetchHoneyMoonPackage();
    }, [])

    const navigateHolidayDetails = (id) =>{
        navigate(`/holidaydetails/${id}`)
    }

    if (isMediumScreen) {
        return (
            <div className=' w-full min-h-screen h-auto bg-[#EBEBEB] pt-28 '>
            <div className=' w-3/5 h-auto mx-auto'>
                <img src={holidayPaper} alt="" />
            </div>
            <div className=' w-[1100px] mx-auto h-auto flex flex-wrap justify-around gap-14 rounded-3xl py-10'>
                {image.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (

                        <div className='mx-auto w-[500px] h-80 bg-black rounded-3xl relative'>
                            <img className='w-full h-full object-cover rounded-3xl opacity-50' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                            <h1 className=' absolute text-white top-56 text-3xl left-4 font-light'>{items ? items.place : "place"}</h1>
                            <h1 className=' absolute text-white font-light top-[260px]  ml-4'>{items ? items.days : ""}</h1>
                            <h1 className=' absolute text-white font-light text-xs top-[285px]  ml-4 flex'><span className=''><BiRupee/></span>{items ? items.price : ""}</h1>
                            <button onClick={()=>{
                                navigateHolidayDetails(items._id)
                            }} className=' px-1 py-1 rounded-lg  uppercase absolute top-0 border border-1 border-white text-white right-4 top-[270px]'>view deal</button>
                        </div>
                    )
                })}


            </div>
          
        </div>
        )
    }
    return (
        <div className=' w-full min-h-screen h-auto bg-[#EBEBEB] mb-5 mt-[-31px]'>

        <div className=' w-full h-auto my-6 text-center mx-auto'>
            <img src={holidayPaper} alt="" />
        </div>
        {image.map((items) => {
            const base64String = btoa(
                String.fromCharCode(...new Uint32Array((items.image.data.data)))
            )
            return (
                <div className=' w-[350px] mx-auto h-52  rounded-lg my-3 shadow-md relative bg-black'>
                    <img className='opacity-50 w-full h-full object-cover rounded-lg' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                    <div className='absolute top-[120px] ml-[-15px] font-bold text-black left-5   '>
                        <h1 className=' my-1 font-light text-white rounded-sm px-1 text-2xl w-auto h-auto pr-2'>{items.place}</h1>
                        <h1 className=' my-1 font-light text-white rounded-sm text-gray-500 text-xs px-1 w-auto '>{items.days}</h1>
                        <h1 className=' my-1 font-light text-white rounded-sm text-black text-xs px-1 w-auto flex inline-flex'><span className=' text-lg'><BiRupee/></span>{items.price}</h1>
                    </div>
                    <div onClick={()=>{
                        navigateHolidayDetails(items._id)
                    }} className=' absolute top-40 mr-2 right-0'>
                        <h1 className=' px-2 py-2 rounded-xl float-right uppercase text-sm font-semibold text-white border border-1 font-light '>view deal</h1>
                    </div>
                </div>


            )
        })}

    </div >
    )
}

export default PackageList