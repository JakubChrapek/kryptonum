import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  padding: 0px 8px;
  &:focus-visible {
    outline-offset: 1px;
    outline: 2px solid ${({ color }) => (color ? color : "var(--black)")};
  }
`
