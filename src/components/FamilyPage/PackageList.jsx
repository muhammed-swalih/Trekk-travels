import React, { useEffect, useState } from 'react'
import mobileMaladives from '../../TREKK TRAVEL ASSETSS/ALL PACKAGE/Group-126.webp'
import testImage from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/testImage.webp'
import familyPaper from '../../TREKK TRAVEL ASSETSS/ALL PACKAGE/family.webp'
import axios from 'axios'
import { useMediaQuery } from '@react-hook/media-query'
import { useNavigate } from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
function PackageList() {
    const navigate = useNavigate();
    const isMediumScreen = useMediaQuery('(min-width : 640px)')
    const [image, setImage] = useState([])
    const fetchHoneyMoonPackage = async () => {
        const response = await axios.get('/packages/family');
        setImage(response.data)
        console.log(response.data);
    }
    useEffect(() => {
        fetchHoneyMoonPackage();
    }, [])
    const navigateFamilyDetails = (id)=>{
        navigate(`/familydetails/${id}`)
    }
    if (isMediumScreen) {
        return (
            <div className=' w-full h-auto bg-[#EBEBEB] pt-[450px] pb-[50px] '>

                <div className=' w-full h-auto text-center'>
                    <img className=' mx-auto' src={familyPaper} alt="" width={3200} />
                </div>

                <div className=' flex flex-wrap w-[4300px] rounded-3xl mx-auto h-auto px-[50px] py-[50px]'>
                    {image.map((items) => {
                        const base64String = btoa(
                            String.fromCharCode(...new Uint32Array((items.image.data.data)))
                        )
                        return (
                            <div className=' w-[1900px] h-[1280px] rounded-3xl bg-black relative mx-auto my-[90px]'>
                                <img className=' opacity-50 w-full h-full object-cover rounded-3xl  ' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                <div className=' absolute ml-5 top-[900px] w-full'>
                                    <h1 className=' text-[100px] w-[1050px] rounded-lg my-3 font-light text-white px-5'>{items.place}</h1>
                                    <h1 className=' text-[50px] text-gray-600 w-[600px] my-3 font-light text-white px-5'>{items.days}</h1>
                                    <h1 className=' text-[50px] w-[350px] my-3 font-light text-white px-5 flex inline-flex'><span className=' text-[65px]'><BiRupee/></span>{items.price}</h1>
                                </div>
                                <div onClick={()=>{
                                    navigateFamilyDetails(items._id)
                                }} className=' absolute top-[1100px] mr-10 rounded-2xl right-5 cursor-pointer'>
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
        <div className=' w-full min-h-screen h-auto bg-[#EBEBEB] mb-5 mt-[-31px]'>

        <div className=' w-full h-auto my-6 text-center mx-auto'>
            <img src={familyPaper} alt="" />
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
                        navigateFamilyDetails(items._id)
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