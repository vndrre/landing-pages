import React from 'react'
import NavBar from '../components/NavBar'
import LandingPage from '../components/LandingPage'
import Section2 from '../components/Section2'
import GrowSection from '../components/GrowSection'
import PartnerSection from '../components/PartnerSection'
import ServiceSection from '../components/ServiceSection'
import LastSection from '../components/LastSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='bg-white text-black'>

        <NavBar />
        <LandingPage />
        <Section2 />
        <GrowSection />
        <PartnerSection />
        <ServiceSection />
        <LastSection />
        <Footer /> 

    </div>
  )
}

export default HomePage