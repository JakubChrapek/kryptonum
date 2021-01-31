import styled from "styled-components"

export const StyledQuestion = styled.h4`
  font-family: JetBrainsMono;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  color: var(--black);
  padding-left: 8px;
  padding-right: 2px;
  @media only screen and (max-width: 400px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 330px) {
    padding-right: 0;
  }
`
