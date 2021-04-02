import React from "react"

import AboutContent from "../components/molecules/AboutContent/AboutContent"
import AboutSlider from "../components/organisms/AboutSlider/AboutSlider"
import AboutBestWay from "../components/molecules/AboutBestWay/AboutBestWay"
import FeedbackFrom from "../components/molecules/FeedbackFrom/FeedbackFrom"
import OurVision from "../components/molecules/OurVision/OurVision"

const About = () => {
  return (
    <div>
      <AboutContent />
      <AboutBestWay
        textContent="W&nbsp;Kryptonum polecimy na księżyc i&nbsp;z&nbsp;powrotem, żeby znaleźć najlepszy projekt strony internetowej. A&nbsp;jak starczy czasu, to przyniesiemy Ci w&nbsp;gratisie kamień księżycowy 😉 
Wierzymy, że każdy jest specjalistą w&nbsp;swojej dziedzinie i&nbsp;razem możemy osiągnąć więcej niż osobno. Właśnie dlatego współpracujemy z&nbsp;zespołem ekspertów w&nbsp;projektowaniu, tworzeniu stron internetowych, marketingu, SEO i&nbsp;nie tylko.
Zbyt piękne, żeby mogło być prawdziwe? Dopiero się rozgrzewamy!"
      />
      <AboutSlider />
      <OurVision />
      <FeedbackFrom />
    </div>
  )
}

export default About
