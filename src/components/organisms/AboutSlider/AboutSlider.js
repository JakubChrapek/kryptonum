import React from "react"

import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import { StyledAboutSliderWrapper } from "../../atoms/AboutSlider/StyledAboutSliderWrapper"
import { StyledTextContentWrapper } from "../../atoms/AboutSlider/StyledTextContentWrapper"
import { StyledAboutSliderHeroP } from "../../atoms/AboutSlider/StyledAboutSliderHeroP"
import { StyledAboutSliderHeroText } from "../../atoms/AboutSlider/StyledAboutSliderHeroText"

const AboutSlider = () => {
  return (
    <StyledAboutSliderWrapper>
      <StyledTextContentWrapper>
        <StyledFeaturedWrapper
          firstSpanLength="100%"
          secondSpanLength="55%"
          hasMarginLeft={false}
        >
          <span>Multiple personalities</span>
          <span>no egos</span>
        </StyledFeaturedWrapper>
        <StyledAboutSliderHeroText>
          <StyledAboutSliderHeroP>
            We’re a unique team of insanely creative people, with years of
            experience in complex website design, and more. Kryptonum began as a
            small project created by us. Two brothers from Poland, Jakub, and
            Michał. Now, our team consists of a dozen specialists from all over
            the world!
          </StyledAboutSliderHeroP>
        </StyledAboutSliderHeroText>
      </StyledTextContentWrapper>
      <div>slider</div>
    </StyledAboutSliderWrapper>
  )
}

export default AboutSlider
