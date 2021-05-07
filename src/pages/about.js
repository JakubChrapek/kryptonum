import React from "react"

import AboutContent from "../components/molecules/AboutContent/AboutContent"
import AboutSlider from "../components/organisms/AboutSlider/AboutSlider"
import AboutBestWay from "../components/molecules/AboutBestWay/AboutBestWay"
import FeedbackFrom from "../components/molecules/FeedbackFrom/FeedbackFrom"
import OurVision from "../components/molecules/OurVision/OurVision"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const { heroImage } = data.datoCmsPageAbout
  return (
    <div style={{ backgroundColor: "var(--white)" }}>
      <AboutContent heroImage={heroImage} />
      <AboutBestWay
        textContent="W&nbsp;Kryptonum polecimy na księżyc i&nbsp;z&nbsp;powrotem, żeby znaleźć najlepszy projekt strony internetowej. A&nbsp;jak starczy czasu, to przyniesiemy Ci w&nbsp;gratisie kamień księżycowy 😉 
Ale do tego trzeba specjalistów. Właśnie dlatego współpracujemy z&nbsp;zespołem ekspertów w&nbsp;projektowaniu, tworzeniu stron internetowych, marketingu, SEO i&nbsp;nie tylko.
Zbyt piękne, żeby mogło być prawdziwe? Dopiero się rozgrzewamy!"
      />
      <AboutSlider />
      <OurVision />
      <FeedbackFrom />
    </div>
  )
}

export const query = graphql`
  query aboutQuery {
    datoCmsPageAbout {
      heroImage {
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
`

export default About
