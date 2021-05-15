import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  transform: translateX(-30%);
  padding: 0px 8px;
  @media only screen and (max-width: 800px) {
    transform: translateX(0);
  }
  &:focus-visible {
    outline-offset: 1px;
    outline: 2px solid ${({ color }) => (color ? color : "var(--black)")};
  }
`
