import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import flight from '../../TREKK TRAVEL ASSETSS/HOME PAGE/EMOJIS/flighgt.webp'
import testImage from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/testImage.webp'
function TopDestination() {
    const [image, setImage] = useState([])
    const fetchHoneyMoonPackage = async () => {
        const response = await axios.get('/packages/holiday');
        setImage(response.data)
        console.log(response.data);
    }
    useEffect(() => {
        fetchHoneyMoonPackage();
    }, [])
    return (
        <div className=' w-full h-auto bg-[#EBEBEB]  py-5'>
            <div className=' px-5'>
                <h1 className=' font-bold tracking-wide text-orange-500 uppercase text-sm'>Top Destination</h1>
                <h1 className=' text-2xl font-bold flex inline-flex gap-1'>Explore Top Destination <span><img src={flight} alt="" width={30} /></span></h1>
                <div className='  flex overflow-scroll py-5 gap-3 relative'>
                    {image.map((items) => {
                        const base64String = btoa(
                            String.fromCharCode(...new Uint32Array((items.image.data.data)))
                        )
                        return (

                            <div className=' relative flex-shrink-0 w-3/4 h-60 shadow-xl '>
                                <img className=' w-full h-full object-cover rounded-lg' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                               <div className='absolute top-[152px] ml-[-15px] font-bold text-black left-5   '>
                                    <h1 className=' my-1 border border-1 bg-[#EBEBEB] rounded-sm px-1 text-2xl w-auto h-auto pr-2'>{items.place}</h1>
                                    <h1 className=' my-1 border border-1 bg-[#EBEBEB] rounded-sm text-gray-500 text-xs px-1 w-32 '>{items.days}</h1>
                                    <h1 className=' my-1 border border-1 bg-[#EBEBEB] rounded-sm text-black text-xs px-1 w-20'>{items.price}</h1>
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