import styled from "styled-components"

export const StyledPrivacyPolicyWrapper = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 139px 120px 49px 120px;
  margin: 0 auto;

  @media only screen and (max-width: 977px) {
    padding: 139px 40px 49px 40px;
  }
`
export const StyledPrivacyMain = styled.main`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 897px) {
    flex-direction: column;
  }
`
export const StyledMainTextWrapper = styled.div`
  &:first-child {
    padding-right: 51px;
    @media only screen and (max-width: 897px) {
      padding-right: 0;
    }
  }

  p {
    padding-bottom: 20px;
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
export const PrivacyHeaderTextWrapper = styled.div`
  max-width: 837px;
  padding-bottom: 33px;
  h1 {
    font-family: Poppins;
    font-size: 76px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    color: var(--black);
    @media only screen and (max-width: 1060px) {
      font-size: 68px;
    }
    @media only screen and (max-width: 977px) {
      font-size: 58px;
    }
    @media only screen and (max-width: 877px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 781px) {
      font-size: 42px;
    }
    @media only screen and (max-width: 501px) {
      font-size: 32px;
    }
    @media only screen and (max-width: 693px) {
      text-align: center;
    }
  }
`
