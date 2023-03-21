import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiRupee } from 'react-icons/bi'
import { useMediaQuery } from '@react-hook/media-query'
import Navbar from '../Homepage/Navbar'
import Footer from '../Homepage/Footer'
function KasargodDetails() {


  const { id } = useParams()

  const [details, setDetails] = useState([])
  const [base, setBase] = useState()
  const getDetails = () => {

    axios(`https://trekkandtravel.onrender.com/packages/getkasargod/${id}`)
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
      <Navbar/>
      <div className=' w-full min-h-screen h-auto bg-[#EBEBEB] pt-32 pb-10'>
      <div className=' w-4/6 h-auto mx-auto flex justify-between'>
          <div className=' w-[500px] h-[400px]  rounded-2xl'>
             {base && <img className='rounded-2xl w-full h-full object-cover' src={`data:image/jpeg;base64,${base}`} alt="" />} 
          </div>
          <div className=' my-auto '>
              <h1 className='  my-auto text-4xl w-60 font-medium'>{details ? details.place : ""}</h1>
              <h1 className=' text-2xl'>{details ? details.days : ""}</h1>
              <a href="https://wa.me/9947172630">
                        <div className=' w-60 h-auto text-white rounded-xl bg-orange-500 mt-5'>
                            <h1 className=' text-center py-1 uppercase font-medium'>get a quote</h1>
                        </div>
                        </a>
          </div>
      </div>
      <div className='px-5 py-5 mx-auto mt-5 w-4/6 bg-white h-auto rounded-2xl shadow-lg'>
      {details ? details.description : "none"}
      </div>
  </div>
      <Footer/>
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

export default KasargodDetails