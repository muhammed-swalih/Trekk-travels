import React from 'react'
import Footer from '../components/Homepage/Footer'
import Navbar from '../components/Homepage/Navbar'
import PackageList from '../components/HoneymoonPage/PackageList'

function Honeymoon() {
  return (
    <div>
        <Navbar/>
        <PackageList/>
        <Footer/>
    </div>
  )
}

export default Honeymoon