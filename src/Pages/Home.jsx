import React from 'react'
import Intro from '../components/Homepage/Intro'
import Navbar from '../components/Homepage/Navbar'
import Packages from '../components/Homepage/Packages'
import Service from '../components/Homepage/Service'

function Home() {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Service/>
        <Packages/>
    </div>
  )
}

export default Home