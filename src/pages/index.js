import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import website from "../../config/website"
import heroBg from "../images/home-bg.jpg"
import Hero from "../components/HomeComponents/Hero/Hero"
import MainServices from "../components/HomeComponents/MainServices/MainServices"
import WhatIsKryptonum from "../components/HomeComponents/WhatIsKryptonum/WhatIsKryptonum"
import FeaturedSection from "../components/HomeComponents/FeaturedSection/FeaturedSection"

const IndexPage = () => (
  <>
    <SEO title="Kryptonum" />
    <Hero bg={heroBg} />
    <MainServices />
    <WhatIsKryptonum />
    <FeaturedSection />
  </>
)

export default IndexPage
