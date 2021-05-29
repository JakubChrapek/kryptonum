import styled from "styled-components"

export const FeaturedSectionUl = styled.ul`
  margin-top: 12px;
  padding-right: 260px;
  li {
    font-size: 13px;
    line-height: 3.62;
    letter-spacing: 19.5px;
    text-transform: uppercase;
    font-weight: 500;
    font-family: "JetBrains Mono";
  }
  @media only screen and (max-width: 1294px) {
    padding-right: 220px;
  }
  @media only screen and (max-width: 1216px) {
    padding-right: 190px;
  }
  @media only screen and (max-width: 1126px) {
    padding-right: 110px;
  }
  @media only screen and (max-width: 1028px) {
    padding-right: 40px;
  }
  @media only screen and (max-width: 914px) {
    padding-right: 20px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
