import React from "react"

import OurVisionElement from "../OurVisionElement/OurVisionElement"

import {
  StyledOurVisionSection,
  OurVisionWrapper,
  OurVisionHeroText,
} from "./StyledOurVision"

const OurVision = () => {
  return (
    <StyledOurVisionSection>
      <OurVisionWrapper>
        <h2>Our Vision</h2>
        <OurVisionHeroText>
          <p>Smaller multidisciplinary dedicated teams for bigger impact</p>
        </OurVisionHeroText>
        <div>
          <OurVisionElement
            leftBoxText="From start to finish"
            rightBoxText="We provide value to our clients through 
            design thinking and customized tech stacks. Our designers, 
            full-stack developers, project managers and strategists 
            are working in closely-knit teams throughout the project."
            elementNumber={1}
          />
          <OurVisionElement
            leftBoxText="Driven by Insights
            "
            rightBoxText="We truly believe that good research leads to 
            effective design, robust tech stacks and tailor-made outcomes. 
            Powerful concepts are driven by stirring insights."
            elementNumber={2}
          />
          <OurVisionElement
            leftBoxText="Powered by Creativity"
            rightBoxText="At Kryptonum, creativity is what drives the agency.
             It manifests itself through our management approach, 
             creation process and technological development.
              This is why each web project is unique, just like you."
            elementNumber={3}
          />
          <OurVisionElement
            leftBoxText="Obsessed with results"
            rightBoxText="We develop digital solutions, platforms and modules
             that have a real impact for our customers. We firmly believe that
              creating tailor-made digital projects is essential 
              to the success of tomorrow’s thriving businesses."
            elementNumber={4}
          />
        </div>
      </OurVisionWrapper>
    </StyledOurVisionSection>
  )
}

export default OurVision
