import React from 'react'
import HeroSection from './hero-section/HeroSection'
import OurDomain from './our-domain/OurDomain'
import AnimationBubble from './animationBubbles/AnimationBubble'
import WhyOurCompany from './WhyUs/WhyOurCompany'


const MainPage = () => {
  return (
    <div>
        <HeroSection />
        <OurDomain />
        <AnimationBubble />
        <WhyOurCompany />
    </div>
  )
}

export default MainPage