import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ContactUs from '@/sections/CotactUs'
import CTA from '@/sections/CTA'
import Features from '@/sections/Features'
import HeroSection from '@/sections/HeroSection'
import Industries from '@/sections/Industries'
import Integration from '@/sections/Integration'
import Onboarding from '@/sections/Onboarding'
import Portfolio from '@/sections/Portfolio'
import Testimonial from '@/sections/Testimonial'

import React from 'react'

const home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Industries/>
      <Onboarding/>
      <Features/>
      <Integration/>
      <Portfolio/>
      <Testimonial/>
      <CTA/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default home
