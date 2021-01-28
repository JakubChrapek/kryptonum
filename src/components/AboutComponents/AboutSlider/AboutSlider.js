import React from "react"
import { StyledFeaturedWrapper } from "../../atoms/FeaturedWrapper/StyledFeaturedWrapper"
import {
  StyledAboutSliderWrapper,
  StyledAboutSliderHeroText,
  TextContentWrapper,
} from "./StyledAboutSlider"

const AboutSlider = () => {
  return (
    <StyledAboutSliderWrapper>
      <TextContentWrapper>
        <StyledFeaturedWrapper hasDeclaredWidth={true} aboutSlider={true}>
          <span>Multiple personalities</span>
          <span>no egos</span>
        </StyledFeaturedWrapper>
        <StyledAboutSliderHeroText>
          <p>
            We’re a unique team of insanely creative people, with years of
            experience in complex website design, and more. Kryptonum began as a
            small project created by us. Two brothers from Poland, Jakub, and
            Michał. Now, our team consists of a dozen specialists from all over
            the world!
          </p>
        </StyledAboutSliderHeroText>
      </TextContentWrapper>
      <div>slider</div>
    </StyledAboutSliderWrapper>
  )
}

export default AboutSlider
