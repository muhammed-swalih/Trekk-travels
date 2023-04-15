import React, { useEffect } from 'react'
import Footer from '../components/Homepage/Footer'
import Navbar from '../components/Homepage/Navbar'
import Alleppey from '../components/ResortPage/Alleppey'
import Calicut from '../components/ResortPage/Calicut'
import Coorg from '../components/ResortPage/Coorg'
import Kannur from '../components/ResortPage/Kannur'
import Kasargod from '../components/ResortPage/Kasargod'
import Kochi from '../components/ResortPage/Kochi'
import Kodaikkanal from '../components/ResortPage/Kodaikkanal'
import Kumarakom from '../components/ResortPage/Kumarakom'
import Malappuram from '../components/ResortPage/Malappuram'
import Munnar from '../components/ResortPage/Munnar'
import Ooty from '../components/ResortPage/Ooty'
import Thekkady from '../components/ResortPage/Thekkady'
import Thrissur from '../components/ResortPage/Thrissur'
import TrivandrumResorts from '../components/ResortPage/TrivandrumResorts'
import Vagamon from '../components/ResortPage/Vagamon'
import Wayanad from '../components/ResortPage/Wayanad'
import DataProvider from '../DataProvider'
function Resorts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Navbar />
     <DataProvider><TrivandrumResorts /></DataProvider>
      <DataProvider><Kumarakom /></DataProvider>
      <DataProvider><Alleppey /></DataProvider>
      <Munnar />
      <Vagamon />
      <Thekkady />
      <Kochi />
      <Wayanad />
      <Calicut />
      <Thrissur />
      <Malappuram />
      <Kannur />
      <Kasargod />
      <Coorg />
      <Kodaikkanal />
      <Ooty />
      <Footer />
    </div>
  )
}

export default Resorts