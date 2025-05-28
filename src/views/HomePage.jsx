import React from 'react'
import NavBar from '../components/NavBar'
import LandingPage from '../components/LandingPage'
import TryAppSection from '../components/TryAppSection'
import JoinSection from '../components/JoinSection'
import ExploreSection from '../components/ExploreSection'
import TestimonialSection from '../components/TestimonialSection'
import StorySection from '../components/StorySection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ChatButton from '../components/ChatButton'

const HomePage = () => {
  return (
    <div className='bg-white text-black'>

        <NavBar />
        <LandingPage /> 
        <TryAppSection />
        <JoinSection />
        <ExploreSection />
        <TestimonialSection />
        <StorySection />
        <FAQ />
        <Footer />   

        <ChatButton />

    </div>
  )
}

export default HomePage