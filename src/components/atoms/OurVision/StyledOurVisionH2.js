import styled from "styled-components"

export const StyledOurVisionH2 = styled.h2`
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
`
