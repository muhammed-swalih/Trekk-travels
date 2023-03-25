import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ad from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/ad.webp'
import { FaWhatsapp } from 'react-icons/fa';
import customers from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/customers.webp'
import staring from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/star.webp'
import star from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/star-eye-emoji-icons.webp'
import { useMediaQuery } from '@react-hook/media-query';
function Ads() {
    const isMediumScreen = useMediaQuery("(min-width : 1024px)")
    const isTablet = useMediaQuery('(min-width : 640px)and(max-width: 1024px)');

    const [image, setImage] = useState([])
    const fetchAds = async () => {
        const response = await axios.get('https://trekkandtravel.onrender.com/packages/getAd');
        setImage(response.data)
    }
    useEffect(() => {
        fetchAds();
    }, [])
    if (isMediumScreen) {
        return (
            <div className=' w-full h-auto  bg-[#EBEBEB] py-10 '>
                <div className=' fixed bottom-32 w-16 h-16 right-10 rounded-full bg-green-500  '>
                    <a href="https://wa.me/9947172630" target="_blank">
                        <FaWhatsapp className="text-4xl  mx-auto mt-3   text-white hover:text-green-600" />
                    </a>
                </div>
                {image.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (

                        <div className='  w-[800px] h-60 rounded-3xl  mx-auto py-2'>
                            <img className=' w-full h-full object-cover rounded-3xl' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                        </div>
                    )
                })}
                <div className=' mt-40 flex justify-between w-[1150px] mx-auto'>
                    <div className=' flex flex-col gap-2'>
                        <h1 className=' text-lg uppercase text-orange-500 font-semibold'>what they say</h1>
                        <h1 className=' text-5xl font-semibold w-[500px]'>What Our Customer </h1>
                        <h1 className=' text-5xl font-semibold w-[500px] flex'>Say About Us <span><img src={star} alt="" width={50} /></span> </h1>
                        <h1 className=' w-96 text-gray-500 font-semibold'>“I am a traveler and trekk&travel helps me a lot in finding interesting tourist destinations and of course the price offered is very worth it.”</h1>
                        <h1 className=' font-semibold text-xl'>Muhammed Swalih</h1>
                        <div className=' mt-2 flex justify-between w-2/5'>
                            <img src={staring} alt="" />
                            <img src={staring} alt="" />
                            <img src={staring} alt="" />
                            <img src={staring} alt="" />
                            <img src={staring} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={customers} alt="" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' py-5 bg-[#EBEBEB] px-5'>
            <div className="fixed bottom-10 right-5 bg-green-500 w-[60px] h-[60px] rounded-full  ">
                <a href="https://wa.me/9947172630" target="_blank">
                    <FaWhatsapp className="text-4xl text-white mx-auto mt-3 hover:text-green-600" />
                </a>
            </div>
            {image.map((items) => {
                const base64String = btoa(
                    String.fromCharCode(...new Uint32Array((items.image.data.data)))
                )
                return (
                    <div className=' w-full h-36 rounded-lg bg-slate-600 my-2'>
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