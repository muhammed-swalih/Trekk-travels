import React from 'react'
import Intro from '../components/Homepage/Intro'
import Navbar from '../components/Homepage/Navbar'
import TopDestination from '../components/Homepage/TopDestination'
import Service from '../components/Homepage/Service'
import BestHoneymoon from '../components/Homepage/BestHoneymoon'
import BestFamily from '../components/Homepage/BestFamily'
import Experience from '../components/Homepage/Experience'
import Ads from '../components/Homepage/Ads'
import Footer from '../components/Homepage/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Service/>
        <TopDestination/>
        <BestHoneymoon/>
        <BestFamily/>
        <Experience/>
        <Ads/>
        <Footer/>
    </div>
  )
}

export default Home