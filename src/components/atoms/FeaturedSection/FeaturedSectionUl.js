import styled from "styled-components"

export const FeaturedSectionUl = styled.ul`
  margin-top: 12px;
  padding-left: 255px;
  li {
    font-size: 20px;
    line-height: 3.62;
    letter-spacing: 1.5em;
    text-transform: uppercase;
    font-weight: 400;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
