import { Link } from "gatsby"
import styled from "styled-components"

export const StyledCtaLink = styled(Link)`
  margin: 48px 0 0;
  display: inline-block;
  @media only screen and (max-width: 399px) {
    width: 221px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 12px;
  }
  width: 100%;
  max-width: 337px;
`
