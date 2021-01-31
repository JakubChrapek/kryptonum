import styled from "styled-components"

export const StyledWhatWeDoElementRightBarH3 = styled.h3`
  font-family: Poppins;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  padding-left: 63px;
  padding: ${({ swap }) => (swap ? "0 63px 0 0" : "0 0 0 63px")};
  max-width: 506px;
  @media only screen and (max-width: 1064px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 772px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 674px) {
    padding: 35px 0 0 0;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    max-width: none;
  }
`
