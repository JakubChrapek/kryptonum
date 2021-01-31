import styled from "styled-components"

export const StyledLearnTextWrapperUl = styled.ul`
  @media only screen and (max-width: 510px) {
    text-align: center;
  }
  li {
    max-width: 198px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 2px;
    color: var(--black);
    &:first-child {
      padding-top: 38px;
    }
  }
`
