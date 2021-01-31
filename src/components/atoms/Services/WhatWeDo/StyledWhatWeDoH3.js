import styled from "styled-components"

export const StyledWhatWeDoH3 = styled.h3`
  font-family: Poppins;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: normal;
  text-align: left;
  color: var(--black);
  position: relative;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  &::after {
    content: "";
    width: 110%;
    height: 2.8px;
    background-color: var(--black);
    position: absolute;
    bottom: 0;
    left: 0;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
`
