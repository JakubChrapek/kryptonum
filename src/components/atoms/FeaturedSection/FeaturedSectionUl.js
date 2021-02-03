import styled from "styled-components"

export const FeaturedSectionUl = styled.ul`
  margin-top: 12px;
  padding-right: 260px;
  li {
    font-size: 13px;
    line-height: 3.62;
    letter-spacing: 19.5px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "JetBrains Mono";
  }
  @media only screen and (max-width: 1053px) {
    padding-right: 130px;
  }
  @media only screen and (max-width: 831px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 738px) {
    padding-top: 40px;
    margin-left: 0;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`
