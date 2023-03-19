import React, { useEffect, useState } from 'react'
import testImage from '../../TREKK TRAVEL ASSETSS/HOME PAGE/IMAGES/maldives.webp'
import { useMediaQuery } from '@react-hook/media-query'
import { Await, useParams } from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
import axios from 'axios'

function PackageDetails() {
    const { id } = useParams()

    const [details, setDetails] = useState([])
    const [base,setBase] = useState()
    const getDetails = () => {

        axios(`/packages/gethoneymoon/${id}`)
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
        window.scrollTo(0,0)
    }, [])




    const isMediumScreen = useMediaQuery('(min-width : 640px)')
    if (isMediumScreen) {

        return (
            <div className=' w-full h-auto bg-[#EBEBEB] pt-[420px] pb-[150px]'>
                <div className=' w-4/6 h-auto  mx-auto mt-[100px] flex justify-between py-[20px]'>
                    <div className=' w-[2300px] h-[1300px]  rounded-3xl'>
                       {base && (
                            <img className=' w-full h-full object-cover rounded-3xl' src={`data:image/jpeg;base64,${base}`} alt="" />
                       )} 
                    </div>
                    <div className=' flex flex-col px-10 my-auto items-start gap-[50px]'>
                        <h1 className=' text-[150px] '>{details ? details.place : "package name"}</h1>
                        <h1 className=' text-[75px] '>{details ? details.days : "no of days"}</h1>
                        <button className=' uppercase w-auto px-[50px] font-semibold rounded-3xl text-[65px] border border-[10px] border-orange-500 flex inline-flex'><span className=' text-[85px]'><BiRupee/></span>{details ? details.price : "price"}</button>
                        <div className=' text-[80px] w-full h-auto bg-orange-500 text-center  text-white uppercase rounded-3xl py-4'>
                            <h1>get a quote</h1>
                        </div>
                    </div>
                </div>


                <div className=' mt-[100px]  border border-1 border-gray-400 rounded-3xl w-4/6 h-auto px-[80px] py-[50px] mx-auto bg-[#D9D9D9]'>
                    <h1 className='  text-[65px]'>Highlights</h1>
                    <ul className=' mt-[30px]  list-disc text-[50px] ml-[50px]'>
                       {details && details.highlight1 &&  <li>{details ? details.highlight1 : "nothing"}</li>} 
                       {details && details.highlight2 &&  <li>{details ? details.highlight2 : "nothing"}</li>} 
                       {details && details.highlight3 &&  <li>{details ? details.highlight3 : "nothing"}</li>} 
                       {details && details.highlight4 &&  <li>{details ? details.highlight4 : "nothing"}</li>} 
                       {details && details.highlight5 &&  <li>{details ? details.highlight5 : "nothing"}</li>} 
                       {details && details.highlight6 &&  <li>{details ? details.highlight6 : "nothing"}</li>} 

                    </ul>
                </div>
                <div className='mx-auto w-4/6 h-auto bg-[#D9D9D9] px-[150px] py-[150px] border border-1 border-gray-400 rounded-3xl mt-[100px]'>
                    <h1 className=' text-[60px]'>
                            {details ? details.description : "none"}
                        
                    </h1>
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
                            <button className=' border border-2  border-orange-500 px-5 py-1 rounded-lg font-semibold uppercase flex inline-flex'><span className=' text-xl'><BiRupee/></span>{details ? details.price : "price"}</button>
                        </div>
                        <div className=' mt-4 w-full rounded-lg h-auto text-center bg-orange-500'>
                            <h1 className=' uppercase text-white py-1 '>get a quote</h1>
                        </div>
                        <div className=' w-full h-auto mt-4 bg-[#D9D9D9] px-10 py-3 rounded-xl border border-1 border-gray-400'>
                            <h1 className=' text-lg'>highlights</h1>
                            <ul className=' list-disc text-sm'>
                                <li>Leisure time</li>
                                <li>Relaxing holiday</li>
                            </ul>
                        </div>
                        <div className=' w-full px-5 py-5 bg-[#D9D9D9] mt-5 border border-1 border-gray-400 rounded-xl'>
                            <h1 className=' text-sm'>
                                Trip Location: Male, MaldivesStart Point: Male AirportEnd Point: Male AirportThings To Do: Enjoy diving, excursion, water sports, romantic dining
                                About Paradise Island Resort & Spa, Maldives:
                                Paradise Island Resort & Spa is nestled on the secluded island of Lankanfinolhu in Maldives. If you desire to have a perfect tropical honeymoon at a secluded island featuring impeccable beaches with lagoon awash in deep ocean and vibrant marine life then this property is an ideal place to plan your honeymoon. This is one of the luxurious resorts in Maldives and is known to be a romantic escapade to plan your honeymoon. The property offers a wide selection of accommodations with exotic setup and having direct access to the beach or private hot tubs.

                            </h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PackageDetails