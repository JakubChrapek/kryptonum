import styled from "styled-components"
import { Link } from "gatsby"

export const StyledContactLink = styled(Link)`
  color: #606060;
  text-decoration: none;
  margin-left: 3px;

  &:focus,
  &:active,
  &:hover {
    outline: none;
  }
  &:focus-visible {
    color: var(--black);
    outline-offset: 2px;
    outline: 2px solid var(--black);
  }
`
