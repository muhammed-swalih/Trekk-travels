import React from 'react'
import PackageDetails from '../components/FamilyDetailedPage/PackageDetails'
import Footer from '../components/Homepage/Footer'
import Navbar from '../components/Homepage/Navbar'

function FamilyDetails() {
  return (
    <div>
        <Navbar/>
        <PackageDetails/>
        <Footer/>
    </div>
  )
}

export default FamilyDetails