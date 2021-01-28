import React from "react"

import AboutContent from "../components/AboutComponents/AboutContent/AboutContent"
import AboutSlider from "../components/AboutComponents/AboutSlider/AboutSlider"
import BestWay from "../components/AboutComponents/BestWay/BestWay"
import FeedbackFrom from "../components/AboutComponents/FeedbackFrom/FeedbackFrom"
import OurVision from "../components/AboutComponents/OurVision/OurVision"

const About = () => {
  return (
    <div>
      <AboutContent />
      <BestWay
        textContent="Kryptonum is your best way of creating a beautiful, 
      meaningful, and most of all, successful presence on the internet. 
      We’re an international team of specialists in design, web development, 
      marketing, SEO, and more! Together, we create Kryptonum. A work of passion, 
      love, and professionalism."
      />
      <AboutSlider />
      <OurVision />
      <FeedbackFrom />
    </div>
  )
}

export default About
