import styled from "styled-components"

export const StyledOurWorkflowWrapperH2 = styled.h2`
  font-family: Poppins;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: normal;
  color: var(--black);
  position: relative;
  margin-bottom: 124px;
  @media only screen and (max-width: 710px) {
    margin-bottom: 55px;
    font-size: 30px;
  }
  &:after {
    content: "";
    height: 2.8px;
    width: 110%;
    background-color: var(--black);
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
