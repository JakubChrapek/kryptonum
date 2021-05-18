import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledFullPageResponsieImage = styled(GatsbyImage)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`
