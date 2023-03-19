import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ad from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/ad.webp'
import customers from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/customers.webp'
import staring from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/star.webp'
import star from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/star-eye-emoji-icons.webp'
import { useMediaQuery } from '@react-hook/media-query';
function Ads() {
    const isMediumScreen = useMediaQuery("(min-width : 640px)")
    const [image, setImage] = useState([])
    const fetchAds = async () => {
        const response = await axios.get('/packages/getAd');
        setImage(response.data)
    }
    useEffect(() => {
        fetchAds();
    }, [])
    if (isMediumScreen) {
        return (
            <div className=' w-full h-auto py-10 bg-[#EBEBEB]'>
                {image.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (

                        <div className=' w-2/4 mx-auto rounded-3xl h-[700px] bg-black'>
                            <img className='rounded-3xl w-full h-full  object-cover mx-auto' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                        </div>
                    )
                })}
                <div className=' my-[500px] w-5/6 flex justify-between mx-auto'>
                    <div className=''>
                        <h1 className=' my-10 text-orange-500 text-[65px] font-semibold uppercase'>what they say </h1>
                        <h1 className='  text-[150px] font-semibold'>What Our Customer </h1>
                        <h1 className=' text-[150px] font-semibold flex gap-2'>Say About Us <span><img className=' mt-3' src={star} alt="" width={160} /></span></h1>
                        <h1 className=' my-10 text-[65px] text-gray-500 w-3/4'>“I am a traveler and trekk&travel helps me a lot in finding interesting tourist destinations and of course the price offered is very worth it.”</h1>
                        <h1 className=' text-[65px] font-semibold'>Muhammed Swalih</h1>
                        <div className=' flex justify-between w-1/5 '>
                            <img src={staring} alt="" width={80} />
                            <img src={staring} alt="" width={80} />
                            <img src={staring} alt="" width={80} />
                            <img src={staring} alt="" width={80} />
                            <img src={staring} alt="" width={80} />
                        </div>
                    </div>
                    <div className=' my-auto '>
                        <img className=' ' src={customers} alt="" width={3000} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' py-5 bg-[#EBEBEB] px-5'>
            {image.map((items) => {
                const base64String = btoa(
                    String.fromCharCode(...new Uint32Array((items.image.data.data)))
                )
                return (
                    <div className=' w-full h-36 rounded-lg bg-slate-600'>
                        <img className='rounded-lg w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                    </div>
                )
            })}
            <div className=' py-5 mx-auto w-full h-auto text-center pt-10'>
                <h1 className=' uppercase text-orange-500 font-bold text-sm'>what they say</h1>
                <h1 className=' text-2xl font-bold w-4/5 mx-auto'>What Our Customer Say About Us</h1>
                <img className=' mx-auto' src={customers} alt="" />
                <div className=' py-5 w-full h-auto p-5 rounded-lg text-center bg-orange-200'>
                    <h1 className=' text-gray-500 '>“I am a traveler and trekk&travel helps me a lot in finding interesting tourist destinations and of course the price offered is very worth it.”</h1>
                    <h1 className=' py-2 font-semibold'>Muhammed Swalih</h1>
                    <div className=' flex inline-flex w-2/4 h-auto justify-around'>
                        <img src={staring} alt="" width={20} />
                        <img src={staring} alt="" width={20} />
                        <img src={staring} alt="" width={20} />
                        <img src={staring} alt="" width={20} />
                        <img src={staring} alt="" width={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads