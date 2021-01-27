import React from "react"

import HeroContent from "../components/molecules/HeroContent/HeroContent"
import HeroImage from "../components/molecules/HeroImage/HeroImage"
import WhatWeDo from "../components/ServicesComponents/WhatWeDo/WhatWeDo"

const Services = () => {
  return (
    <div>
      <HeroContent content="Good design makes life better" />
      <HeroImage />
      <WhatWeDo />
    </div>
  )
}

export default Services
