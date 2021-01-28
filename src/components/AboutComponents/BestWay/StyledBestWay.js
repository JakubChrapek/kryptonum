import styled from "styled-components"

export const StyledBestWayWrapper = styled.div`
  width: 100%;
  padding: 129px 297px 20px 297px;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1160px) {
    padding: 129px 120px 20px 120px;
  }
  @media only screen and (max-width: 890px) {
    padding: 59px 28px 20px 28px;
  }
  @media only screen and (max-width: 759px) {
    padding: 59px 28px 20px 28px;
  }
  h2 {
    font-family: Poppins;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: center;
    color: var(--black-font);
    @media only screen and (max-width: 890px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 759px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`
