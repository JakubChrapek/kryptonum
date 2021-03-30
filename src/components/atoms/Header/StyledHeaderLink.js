import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  transform: translateX(-30%);
  @media only screen and (max-width: 800px) {
    transform: translateX(0);
  }
`
