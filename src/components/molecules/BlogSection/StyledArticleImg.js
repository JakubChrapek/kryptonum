import styled from "styled-components"
import Img from "gatsby-image"

export const StyledArticleImg = styled(Img)`
  width: 100%;
  margin: 0;
  height: 100%;
  height: 300px;
  @media only screen and (max-width: 560px) {
    height: 236px;
  }
  @media only screen and (max-width: 500px) {
    width: ${({ variant }) => variant === "blog" && "calc(100% - 14px)"};
  }

  picture,
  img {
    width: 100%;
    object-fit: cover;
  }
`
