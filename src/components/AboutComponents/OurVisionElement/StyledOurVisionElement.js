import styled from "styled-components"

export const StyledOurVisionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 122px;
  @media only screen and (max-width: 849px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 660px) {
    padding-bottom: 80px;
  }
`
export const OurVisionLogoTextWrapper = styled.div`
  h2 {
    display: flex;
    font-family: LibreBaskerville;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: -1.3px;
    color: var(--accent);
    padding-right: 174px;
    @media only screen and (max-width: 1225px) {
      padding-right: 70px;
    }
    @media only screen and (max-width: 1121px) {
      padding-right: 20px;
    }
    span {
      font-family: JetBrainsMono;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.14;
      letter-spacing: 5px;
      color: var(--accent);
      display: block;
      padding-right: 9px;
      transform: translateY(-18px);
    }
  }
`
export const RightBoxParagraph = styled.p`
  display: block;
  max-width: 506px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 2.67px;
  color: var(--white);
  @media only screen and (max-width: 849px) {
    padding-top: 41px;
  }
`
