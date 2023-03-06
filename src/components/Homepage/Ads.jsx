import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ad from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/ad.webp'
import customers from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/customers.webp'
import star from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/star.webp'
function Ads() {
    const [image, setImage] = useState([])
    const fetchAds = async () => {
        const response = await axios.get('/packages/getAd');
        setImage(response.data)
    }
    useEffect(() => {
        fetchAds();
    }, [])
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
                        <img src={star} alt="" width={20} />
                        <img src={star} alt="" width={20} />
                        <img src={star} alt="" width={20} />
                        <img src={star} alt="" width={20} />
                        <img src={star} alt="" width={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads