import styled from "styled-components"

export const HeroImageWrapper = styled.div`
  width: 100%;
  height: clamp(381px, 50vh, 680px);

  .gatsby-image-wrapper-constrained {
    width: 100%;
    height: 100%;
    img {
      object-position: bottom;
    }
  }
  @media only screen and (max-width: 1024px) {
    height: 40vh;
  }
`
