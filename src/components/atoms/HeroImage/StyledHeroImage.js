import styled from "styled-components"

export const HeroImageWrapper = styled.div`
  width: 100%;
  height: clamp(421px, 50vh, 680px);

  .gatsby-image-wrapper-constrained {
    width: 100%;
    height: 100%;
    img {
      object-position: bottom;
    }
  }
  @media only screen and (max-width: 1024px) {
    height: clamp(321px, 50vh, 680px);
  }
  @media only screen and (max-width: 767px) {
    height: clamp(142px, 25vh, 320px);
  }
`
