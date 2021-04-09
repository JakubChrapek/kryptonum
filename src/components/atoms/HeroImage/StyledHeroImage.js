import styled from "styled-components"

export const HeroImageWrapper = styled.div`
  width: 100%;
  height: 580px;
  background-color: #707070;
  img {
    object-fit: cover;
  }
  @media only screen and (max-width: 1366px) {
    height: 420px;
  }
  @media only screen and (max-width: 812px) {
    height: 300px;
  }
  @media only screen and (max-width: 612px) {
    height: 220px;
  }
  @media only screen and (max-width: 534px) {
    height: 152px;
  }
`
