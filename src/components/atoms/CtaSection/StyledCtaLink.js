import { Link } from "gatsby"
import styled from "styled-components"

export const StyledCtaLink = styled(Link)`
  margin: 48px 0 0;
  display: inline-block;
  line-height: 1.78;
  @media only screen and (max-width: 399px) {
    width: 100%;
  }
  @media only screen and (max-width: 360px) {
    font-size: 12px;
  }
  width: 100%;
  max-width: 337px;
`
