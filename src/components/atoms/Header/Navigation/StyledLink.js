import { Link } from "gatsby"
import styled from "styled-components"

export const StyledLink = styled(Link)`
  font-size: 56px;
  line-height: 1.07;
  color: var(--black);
  padding: 12px 8px;
  margin-bottom: 12px;
  height: 100%;
  position: relative;
  text-decoration: none;
  @media only screen and (max-width: 540px) {
    font-size: 38px;
    margin-bottom: 2px;
    padding: 4px 8px;
  }

  &.active li,
  &:hover li {
    transform: translateX(32px);
  }

  &::after {
    content: "${({ number }) => (number ? number : "")}";
    left: 0;
    position: absolute;
    top: 18px;
    font-size: 16px;
    line-height: 1.38;
    color: var(--black);
    transform: translateX(-4px);
    opacity: 0;
    transition: opacity 0.2s 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.2s 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
  &.active::after,
  &:hover::after {
    opacity: 1;
    transform: translateX(2px);
  }
`
