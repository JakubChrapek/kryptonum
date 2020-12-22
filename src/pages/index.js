import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import website from "../../config/website"
import heroBg from "../images/home-bg.jpg"
import Hero from "../components/Hero/Hero"
import MainServices from "../components/MainServices/MainServices"
import WhatIsKryptonum from "../components/WhatIsKryptonum/WhatIsKryptonum"
const IndexPage = () => (
  <>
    <SEO title="Kryptonum" />
    <Hero bg={heroBg} />
    <MainServices />
    <WhatIsKryptonum />
  </>
)

export default IndexPage
