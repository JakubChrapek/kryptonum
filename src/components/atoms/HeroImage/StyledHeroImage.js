import styled from "styled-components"

export const HeroImageWrapper = styled.div`
  width: 100%;
  height: 65vh;

  .gatsby-image-wrapper-constrained {
    width: 100%;
    height: 100%;
    img {
      object-position: bottom;
    }
  }
  @media only screen and (max-width: 1366px) {
    height: 55vh;
  }
  @media only screen and (max-width: 1024px) {
    height: 40vh;
  }
`
