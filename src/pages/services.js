import React from "react"

import HeroContent from "../components/molecules/HeroContent/HeroContent"
import HeroImage from "../components/molecules/HeroImage/HeroImage"
import WhatWeDo from "../components/molecules/Services/WhatWeDo"

const Services = () => {
  return (
    <div>
      <HeroContent content="Good design<br/>makes life better" />
      <HeroImage />
      <WhatWeDo />
    </div>
  )
}

export default Services
