import styled from "styled-components"

export const StyledAboutSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1366px;
  padding: 109px 82px 94px;
  align-items: flex-start;
  margin: 0 auto;
  @media only screen and (max-width: 890px) {
    padding: 30px 28px 20px 28px;
  }
`
export const TextContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 1063px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 759px) {
    align-items: flex-start;
  }
`
export const StyledAboutSliderHeroText = styled.div`
  max-width: 506px;
  p {
    font-family: JetBrainsMono;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: 2.57px;
    text-align: left;
    color: var(--dark-bg);
    @media only screen and (max-width: 1183px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1063px) {
      padding-top: 37px;
    }
    @media only screen and (max-width: 759px) {
      font-size: 15px;
      padding-bottom: 89px;
    }
  }
`
