import styled from "styled-components"

export const StyledWhatWeDoElementLeftBar = styled.div`
  max-height: 570px;
  height: 570px;
  flex: 1 1 50%;
  .gatsby-image-wrapper-constrained {
    width: 100%;
    height: 100%;
    img {
      object-position: center;
    }
  }
  margin: ${({ swap }) => (swap ? "0" : "0 63px 0 0")};
  order: ${({ swap }) => (swap ? 2 : 1)};

  @media only screen and (max-width: 767px) {
    width: 100%;
    max-height: 455px;
    height: 455px;
    margin: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    max-height: 395px;
    height: 395px;
    margin: 0;
  }
`
