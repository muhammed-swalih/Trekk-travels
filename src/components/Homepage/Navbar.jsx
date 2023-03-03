import React from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
import slideIcon from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/ICON.png'
function Navbar() {
  return (
    <div className=' w-full bg-[#DCDCDC] h-28 flex inline-flex justify-between pr-5 rounded-b-'>
     
      <div className=' flex inline-flex '>
        <img src={logo} alt="" width={80}/>
        <h1 className=' my-auto font-bold text-xl'>Trekk & Travels</h1>
      </div>
      <div className=' flex inline-flex '>
        <img className='  my-auto' src={slideIcon} alt="" width={50} />
      </div>
     
    </div>
  )
}

export default Navbar