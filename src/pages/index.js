import React from "react"
import Layout from "../layouts/Layout"
import SEO from "../components/SEO/SEO"
import website from "../../config/website"
import heroBg from "../images/home-bg.jpg"
import HomeHero from "../components/organisms/HomeHero/HomeHero"
import MainServices from "../components/molecules/MainServices/MainServices"
import WhatIsKryptonum from "../components/molecules/WhatIsKryptonum/WhatIsKryptonum"
import FeaturedSection from "../components/molecules/FeaturedSection/FeaturedSection"
import ProjectsSection from "../components/organisms/ProjectsSection/ProjectsSection"
import HowWeWorkSection from "../components/molecules/HoweWeWorkSection/HowWeWorkSection"
import CtaSection from "../components/molecules/CtaSection/CtaSection"
import BlogSection from "../components/organisms/BlogSection/BlogSection"
import TheUltimateSection from "../components/organisms/TheUltimateSection/TheUltimateSection"
import Footer from "../components/organisms/Footer/Footer"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Kryptonum" />
    <HomeHero bg={data.datoCmsPageHome.heroSectionBgImage.gatsbyImageData} />
    <MainServices />
    <WhatIsKryptonum />
    <FeaturedSection />
    <ProjectsSection />
    <HowWeWorkSection />
    <CtaSection />
    <BlogSection />
    <TheUltimateSection />
  </>
)

export const homeQuery = graphql`
  query homeBg {
    datoCmsPageHome {
      heroSectionBgImage {
        gatsbyImageData(width: 1920, placeholder: BLURRED)
      }
    }
  }
`

export default IndexPage
