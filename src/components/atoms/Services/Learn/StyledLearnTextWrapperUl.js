import styled from "styled-components"

export const StyledLearnTextWrapperUl = styled.ul`
  margin-left: 8px;
  @media only screen and (max-width: 588px) {
    text-align: center;
  }
  li {
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 2px;
    color: var(--black);
    margin-top: 8px;
    &:first-child {
      padding-top: 32px;
    }
  }
`
