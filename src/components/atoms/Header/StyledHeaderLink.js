import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0px 8px;
  @media only screen and (max-width: 640px) {
    top: 27px;
  }
  @media (max-width: 500px) {
    top: 27px;
    left: 28px;
    transform: none;
  }
  &:focus-visible {
    outline-offset: 1px;
    outline: 2px solid ${({ color }) => (color ? color : "var(--black)")};
  }
`
