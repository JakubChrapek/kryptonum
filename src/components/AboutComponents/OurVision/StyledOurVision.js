import styled from "styled-components"

export const StyledOurVisionSection = styled.div`
  width: 100%;
  background-color: var(--dark-bg);
  padding: 104px 139px 50px 136px;
  margin: 0 auto;
`
export const OurVisionWrapper = styled.div`
  max-width: 1366px;
  > h2 {
    display: block;
    max-width: 210px;
    font-family: Poppins;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    color: var(--white);
    position: relative;
    padding-bottom: 2px;
    &::after {
      content: "";
      height: 2.8px;
      width: 110%;
      background-color: var(--white);
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`
export const OurVisionHeroText = styled.div`
  max-width: 506px;
  margin: 142px auto;
  p {
    font-family: Poppins;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.48;
    letter-spacing: normal;
    text-align: center;
    color: var(--white);
  }
`
