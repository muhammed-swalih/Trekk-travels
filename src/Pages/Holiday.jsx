import React from 'react'
import PackageList from '../components/HolidayPage/PackageList'
import Footer from '../components/Homepage/Footer'
import Navbar from '../components/Homepage/Navbar'

function Holiday() {
  return (
    <div>
        <Navbar/>
        <PackageList/>
        <Footer/>
    </div>
  )
}

export default Holiday