import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Benefits from '@/sections/Benefits'
import Comparison from '@/sections/Comparison'
import ContactUs from '@/sections/CotactUs'
import CTA from '@/sections/CTA'
import { FAQ } from '@/sections/FAQ'
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
      <Benefits/>
      <Integration/>
      <Portfolio/>
      <Comparison/>
      <Testimonial/>
      <CTA/>
      <FAQ/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default home
