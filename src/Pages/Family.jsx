import React from 'react'
import PackageList from '../components/FamilyPage/PackageList'
import Footer from '../components/Homepage/Footer'
import Navbar from '../components/Homepage/Navbar'

function Family() {
  return (
    <div>
        <Navbar/>
        <PackageList/>
        <Footer/>
    </div>
  )
}

export default Family