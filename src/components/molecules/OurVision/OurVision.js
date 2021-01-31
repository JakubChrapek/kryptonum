import React from "react"

import OurVisionElement from "../OurVisionElement/OurVisionElement"

import { StyledOurVisionH2 } from "../../atoms/OurVision/StyledOurVisionH2"
import { StyledOurVisionHeroTextP } from "../../atoms/OurVision/StyledOurVisionHeroTextP"
import { StyledOurVisionHeroTextWrapper } from "../../atoms/OurVision/StyledOurVisionHeroTextWrapper"
import { StyledOurVisionSection } from "../../atoms/OurVision/StyledOurVisionSection"
import { StyledOurVisionWrapper } from "../../atoms/OurVision/StyledOurVisionWrapper"

const OurVision = () => {
  return (
    <StyledOurVisionSection>
      <StyledOurVisionWrapper>
        <StyledOurVisionH2>Our Vision</StyledOurVisionH2>
        <StyledOurVisionHeroTextWrapper>
          <StyledOurVisionHeroTextP>
            Smaller multidisciplinary dedicated teams for bigger impact
          </StyledOurVisionHeroTextP>
        </StyledOurVisionHeroTextWrapper>
        <div>
          <OurVisionElement
            leftBoxText="From start
             to finish"
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
      </StyledOurVisionWrapper>
    </StyledOurVisionSection>
  )
}

export default OurVision
