import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiRupee } from 'react-icons/bi'
import { useMediaQuery } from '@react-hook/media-query'
import Navbar from '../Homepage/Navbar'
import Footer from '../Homepage/Footer'
function MunnarDetails() {


  const { id } = useParams()

  const [details, setDetails] = useState([])
  const [base, setBase] = useState()
  const getDetails = () => {

    axios(`https://trekkandtravel.onrender.com/packages/getmunnar/${id}`)
      .then(response => {
        setDetails(response.data)
        const base64String = btoa(
          String.fromCharCode(...new Uint32Array((response.data.image.data.data)))
        )
        setBase(base64String)
        console.log(response.data);
      })
      .catch(error => console.error(error));
  }


  useEffect(() => {
    getDetails();
    console.log(details);
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const isMediumScreen = useMediaQuery('(min-width : 640px)')
  if (isMediumScreen) {
    return (
      <div className=' w-full min-h-screen h-auto'>
        <Navbar />
        <div className=' w-full h-auto bg-[#EBEBEB] pt-[420px] pb-[150px]'>
          <div className=' w-4/6 h-auto  mx-auto mt-[100px] flex justify-between py-[20px]'>
            <div className=' w-[2300px] h-[1300px] bg-white rounded-3xl'>
              {base && <img className=' w-full h-full object-cover rounded-3xl' src={`data:image/jpeg;base64,${base}`} alt="" />}
            </div>
            <div className=' flex flex-col px-10 my-auto items-start gap-[50px]'>
              <h1 className=' text-[150px] '>{details ? details.place : "place name"}</h1>

              <div className=' text-[80px] w-full h-auto bg-orange-500 text-center  text-white uppercase rounded-3xl py-4'>

                <a href="https://wa.me/9947172630"><h1>get a quote</h1></a>
              </div>
            </div>
          </div>
          <div className='mx-auto w-4/6 h-auto bg-[#D9D9D9] px-[150px] py-[150px] border border-1 border-gray-400 rounded-3xl mt-[100px]'>
            <h1 className=' text-[60px]'>
              {details ? details.description : "desc"}

            </h1>
          </div>
        </div>
        <Footer />
      </div>

    )
  }
  return (
    <div className=' w-full h-auto bg-[#EAE7E7] mt-[-8px]'>
      <Navbar />
      <div className=' w-full h-auto bg-[#EAE7E7]  '>
        <div className='flex flex-col'>
          <div className=' w-full h-auto mt-5'>
            {base && <img src={`data:image/jpeg;base64,${base}`} alt="" />}
          </div>
          <div className=' px-4 py-5 bg-white'>
            <div className=''>
              <h1 className=' text-2xl font-medium '>{details ? details.place : "place name"}</h1>
            </div>
            <div className=' mt-4 w-full rounded-lg h-auto text-center bg-orange-500'>
            <a href="https://wa.me/9947172630"><h1 className=' uppercase text-white py-1 '>get a quote</h1></a>
            </div>
            <div className=' w-full px-5 py-5 bg-[#D9D9D9] mt-5 border border-1 border-gray-400 rounded-xl'>
              <h1 className=' text-sm'>
                {details ? details.description : "desc"}

              </h1>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MunnarDetails