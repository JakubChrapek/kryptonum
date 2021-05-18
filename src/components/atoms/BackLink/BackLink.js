import { Link } from "gatsby"
import styled from "styled-components"

export const BackLink = styled(Link)`
  align-self: flex-start;
  font-family: "JetBrains Mono";
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 2px;
  text-decoration: none;
  font-weight: 600;
  color: var(--black);
  position: relative;
  padding: 6px 8px;
  margin-left: -8px;

  @media (max-width: 767px) {
    letter-spacing: 1.71px;
    font-size: 12px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 8px;
    width: calc(100% - 16px);
    height: 1px;
    transform-origin: center bottom;
    opacity: 0;
    transform: scaleY(0);
    transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    background-color: ${({ color }) => (color ? color : "var(--black)")};
  }

  &:focus-visible {
    outline-offset: 1px;
    outline: 2px solid ${({ color }) => (color ? color : "var(--black)")};
  }

  &:hover:after {
    transform: scaleY(1);
    opacity: 1;
  }
`
