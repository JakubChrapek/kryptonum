import styled from "styled-components"

export const FeaturedSectionUl = styled.ul`
  margin-top: 12px;
  li {
    font-size: 13px;
    line-height: 3.62;
    letter-spacing: 19.5px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "JetBrains Mono";
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`
