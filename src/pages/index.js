import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import website from "../../config/website"
import heroBg from "../images/home-bg.jpg"
import Hero from "../components/HomeComponents/Hero/Hero"
import MainServices from "../components/HomeComponents/MainServices/MainServices"
import WhatIsKryptonum from "../components/HomeComponents/WhatIsKryptonum/WhatIsKryptonum"
import FeaturedSection from "../components/HomeComponents/FeaturedSection/FeaturedSection"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection"
import HowWeWorkSection from "../components/HomeComponents/HowWeWorkSection/HowWeWorkSection"
import CtaSection from "../components/HomeComponents/CtaSection/CtaSection"
import BlogSection from "../components/HomeComponents/BlogSection/BlogSection"
import TheUltimateSection from "../components/HomeComponents/TheUltimateSection/TheUltimateSection"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <>
    <SEO title="Kryptonum" />
    {/* <Hero bg={heroBg} /> */}
    {/* <MainServices />
    <WhatIsKryptonum />
    <FeaturedSection /> */}
    {/* <ProjectsSection /> */}
    {/* <HowWeWorkSection /> */}
    {/* <CtaSection /> */}
    <BlogSection />
    {/* <TheUltimateSection /> */}
  </>
)

export default IndexPage
