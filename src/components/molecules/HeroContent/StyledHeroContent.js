import styled from "styled-components"

export const HeroSection = styled.section`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  max-width: 1366px;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  padding: 185px 0 129px 136px;
  @media only screen and (max-width: 992px) {
    padding: 185px 0 129px 89px;
  }
  @media only screen and (max-width: 892px) {
    padding: 185px 28px 129px 28px;
  }
  @media only screen and (max-width: 714px) {
    padding: 137px 56px 38px 28px;
  }
  @media only screen and (max-width: 446px) {
    padding-right: 28px;
  }
  h1 {
    max-width: 761px;
    font-family: Poppins;
    font-size: 76px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--black);
    @media only screen and (max-width: 992px) {
      font-size: 56px;
    }
    @media only screen and (max-width: 558px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 394px) {
      font-size: 32px;
    }
  }
`
