import styled from "styled-components"

export const StyledOurVisionSection = styled.div`
  width: 100%;
  background-color: var(--dark-bg);
  padding: 104px 139px 50px 136px;
  margin: 0 auto;
  @media only screen and (max-width: 1121px) {
    padding: 104px 28px 50px 28px;
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 0;
  }
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
    @media only screen and (max-width: 660px) {
      font-size: 30px;
      line-height: 1.33;
    }
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
  @media only screen and (max-width: 849px) {
    margin: 56px auto 104px auto;
  }
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
    @media only screen and (max-width: 660px) {
      font-size: 28px;
      line-height: 1.43;
      color: var(--white);
    }
    @media only screen and (max-width: 401px) {
      font-size: 24px;
    }
  }
`
