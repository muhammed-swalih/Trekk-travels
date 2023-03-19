import React from 'react'
import PackageDetails from '../components/HolidayDetailsPage/PackageDetails'
import Footer from '../components/Homepage/Footer'
import Navbar from '../components/Homepage/Navbar'

function HolidayDetails() {
  return (
    <div>
        <Navbar/>
        <PackageDetails/>
        <Footer/>
    </div>
  )
}

export default HolidayDetails