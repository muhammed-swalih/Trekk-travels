import React from 'react'
import logo from '../../TREKK TRAVEL ASSETSS/HOME PAGE/ICONS/LOGO.png'
function Footer() {
    return (
        <div className=' w-full bg-[#D9D9D9] h-auto py-5'>
            <div className=' flex inline-flex items-center pl-2'>
                <img src={logo} alt="" width={50} />
                <h1 className=' font-bold'>Trekk & Travels</h1>
            </div>
            <div className=' w-3/4 flex inline-flex justify-center gap-5 mx-auto'>
                    <div>
                        <ul>
                            <li className=' font-semibold'>About us</li>
                            <li className=' text-gray-500'>About us</li>
                            <li className=' text-gray-500'>Features</li>
                            <li className=' text-gray-500'>News</li>
                            <li className=' text-gray-500'>Menu</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className=' font-semibold'>About us</li>
                            <li className=' text-gray-500'>About us</li>
                            <li className=' text-gray-500'>Features</li>
                            <li className=' text-gray-500'>News</li>
                            <li className=' text-gray-500'>Menu</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className=' font-semibold'>About us</li>
                            <li className=' text-gray-500'>About us</li>
                            <li className=' text-gray-500'>Features</li>
                            <li className=' text-gray-500'>News</li>
                            <li className=' text-gray-500'>Menu</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Footer