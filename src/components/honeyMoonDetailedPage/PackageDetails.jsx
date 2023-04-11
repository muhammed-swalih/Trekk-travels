import React, { useEffect, useState } from 'react'
import testImage from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/maldives.webp'
import { useMediaQuery } from '@react-hook/media-query'
import { Await, useParams } from 'react-router-dom'
import { BiRupee } from 'react-icons/bi'
import axios from 'axios'

function PackageDetails() {
    const { id } = useParams()

    const [details, setDetails] = useState([])
    const [base, setBase] = useState()
    const getDetails = () => {

        axios(`https://trekkbackend.fun/packages/gethoneymoon/${id}`)
            .then(response => {
                setDetails(response.data)
                console.log(details);
                const base64String = btoa(
                    String.fromCharCode(...new Uint32Array((response.data.image.data.data)))
                )
                setBase(base64String)
            })
            .catch(error => console.error(error));
    }


    useEffect(() => {
        getDetails();
        console.log(base);
        window.scrollTo(0, 0)
    }, [])




    const isMediumScreen = useMediaQuery('(min-width : 1024px)')
    const isTablet = useMediaQuery('(min-width : 640px)and(max-width: 1024px)');

    if (isMediumScreen) {

        return (
            <div className=' w-full min-h-screen h-auto bg-[#EBEBEB] pt-32 pb-10'>
                <div className=' w-[1150px] h-auto mx-auto flex justify-between'>
                    <div className=' w-[500px] h-[400px]  rounded-2xl'>
                       {base && <img className='rounded-2xl w-full h-full object-cover' src={`data:image/jpeg;base64,${base}`} alt="" />} 
                    </div>
                    <div className=' my-auto '>
                        <h1 className='  my-auto text-6xl font-medium'>{details ? details.place : ""}</h1>
                        <h1 className=' text-2xl'>{details ? details.days : ""}</h1>
                        <div className=' mt-3 w-40 px-3 py-1 text-2xl border border-2 rounded-xl border-orange-500 flex'><span><BiRupee/></span>{details ? details.price : ""}</div>
                        <a href="https://wa.me/9947172630">
                        <div className=' w-60 h-auto text-white rounded-xl bg-orange-500 mt-5'>
                            <h1 className=' text-center py-1 uppercase font-medium'>get a quote</h1>
                        </div>
                        </a>
                    </div>
                </div>
                <div className='mx-auto mt-10 rounded-2xl shadow-lg bg-white w-[1150px] h-auto px-4 py-4'>
                    <h1 className=' font-semibold text-lg'>Highlights</h1>
                    <ul className=' list-disc ml-10 mt-5'>
                    {details && details.highlight1 && <li>{details ? details.highlight1 : "nothing"}</li>}
                        {details && details.highlight2 && <li>{details ? details.highlight2 : "nothing"}</li>}
                        {details && details.highlight3 && <li>{details ? details.highlight3 : "nothing"}</li>}
                        {details && details.highlight4 && <li>{details ? details.highlight4 : "nothing"}</li>}
                        {details && details.highlight5 && <li>{details ? details.highlight5 : "nothing"}</li>}
                        {details && details.highlight6 && <li>{details ? details.highlight6 : "nothing"}</li>}
                    </ul>
                </div>
                <div className='px-5 py-5 mx-auto mt-5 w-[1150px] bg-white h-auto rounded-2xl shadow-lg'>
                {details ? details.description : "none"}
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full h-auto bg-[#EAE7E7] mt-[-8px]'>
            <div className=' w-full h-auto bg-[#EAE7E7]  '>
                <div className='flex flex-col'>
                    <div className=' w-full h-auto mt-5'>
                        {base && (
                            <img className=' w-full h-full object-cover' src={`data:image/jpeg;base64,${base}`} alt="" />
                        )}

                    </div>
                    <div className=' px-4 py-5'>
                        <div className=''>
                            <h1 className=' text-2xl font-medium'>{details ? details.place : "place"}</h1>
                            <h1 className=' font-medium'>{details ? details.days : "days"}</h1>
                        </div>
                        <div className=' mt-3'>
                            <button className=' border border-2  border-orange-500 px-5 py-1 rounded-lg font-semibold uppercase flex inline-flex'><span className=' text-xl'><BiRupee /></span>{details ? details.price : "price"}</button>
                        </div>
                        <div className=' mt-4 w-full rounded-lg h-auto text-center bg-orange-500'>
                            <a href="https://wa.me/9947172630"><h1 className=' uppercase text-white py-1 '>get a quote</h1></a>
                        </div>
                        <div className=' w-full h-auto mt-4 bg-[#D9D9D9] px-10 py-3 rounded-xl border border-1 border-gray-400'>
                            <h1 className=' text-lg'>highlights</h1>
                            <ul className=' list-disc text-sm'>
                                {details && details.highlight1 && <li>{details ? details.highlight1 : "nothing"}</li>}
                                {details && details.highlight2 && <li>{details ? details.highlight2 : "nothing"}</li>}
                                {details && details.highlight3 && <li>{details ? details.highlight3 : "nothing"}</li>}
                                {details && details.highlight4 && <li>{details ? details.highlight4 : "nothing"}</li>}
                                {details && details.highlight5 && <li>{details ? details.highlight5 : "nothing"}</li>}
                                {details && details.highlight6 && <li>{details ? details.highlight6 : "nothing"}</li>}
                            </ul>
                        </div>
                        <div className=' w-full px-5 py-5 bg-[#D9D9D9] mt-5 border border-1 border-gray-400 rounded-xl'>
                            <h1 className=' text-sm'>
                            {details ? details.description : "none"}

                            </h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PackageDetails