import { Link } from "gatsby"
import styled from "styled-components"

export const StyledContactStyles = styled(Link)`
  color: ${({ color }) => (color ? color : "var(--black)")};
  letter-spacing: 10.5px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.29em;
  font-weight: 500;
  padding: 6px 8px;
  font-family: "JetBrains Mono";
  position: relative;
  text-decoration: none;
  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 8px;
    width: calc(100% - 24px);
    height: 1px;
    transform-origin: center bottom;
    opacity: 0;
    transform: scaleY(0);
    transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    background-color: ${({ color }) => (color ? color : "var(--black)")};
  }

  &:focus {
    outline-offset: 1px;
    outline: 2px solid ${({ color }) => (color ? color : "var(--black)")};
  }

  &:hover:after {
    transform: scaleY(1);
    opacity: 1;
  }
`
