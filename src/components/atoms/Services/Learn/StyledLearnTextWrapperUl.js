import styled from "styled-components"

export const StyledLearnTextWrapperUl = styled.ul`
  margin-left: 2px;
  @media (max-width: 767px) {
    text-align: center;
  }
  li {
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.16em;
    color: var(--black);
    margin-top: 18px;
    &:first-child {
      padding-top: 12px;
    }
  }
`
