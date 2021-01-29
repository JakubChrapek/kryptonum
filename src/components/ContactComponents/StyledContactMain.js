import styled from "styled-components"

export const ContactSection = styled.section`
  width: 100%;
`
export const ContactTextWrapper = styled.div`
  padding: 158px 120px 51px 120px;
  @media only screen and (max-width: 870px) {
    padding: 158px 26px 51px 26px;
  }
  @media only screen and (max-width: 692px) {
    padding-top: 132px;
  }
  > h1 {
    margin: 0 auto;
    max-width: 1200px;
    font-family: Poppins;
    font-size: 76px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    color: var(--black);
    @media only screen and (max-width: 1037px) {
      font-size: 66px;
    }
    @media only screen and (max-width: 925px) {
      font-size: 60px;
    }
    @media only screen and (max-width: 692px) {
      font-size: 40px;
    }
  }
`
export const ContactFormWrapper = styled.div`
  width: 100%;
  background-color: var(--light-gray);
  padding: 97px 120px 51px 120px;
  @media only screen and (max-width: 870px) {
    padding: 97px 26px 51px 26px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1066px;
    margin: 0 auto;
    @media only screen and (max-width: 692px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`
export const StyledContactInfo = styled.div`
  padding: 0 13px;
  max-width: 364px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 692px) {
    width: 320px;
    margin-bottom: 80px;
    padding: 32px 13px;
  }
  p {
    padding-bottom: 24px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: var(--dark-bg);
  }
`
export const StyledContactInfoList = styled.ul`
  li {
    font-family: JetBrainsMono;
    color: #727272;
    padding-bottom: 8px;

    &:last-child {
      padding-bottom: 24px;
    }
  }
`
