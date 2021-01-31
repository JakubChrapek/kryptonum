import styled from "styled-components"

export const StyledAddIconSpan = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: "";
    width: 2px;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    background-color: var(--black);
    opacity: ${({ open }) => (open ? "0" : "1")};
    transition: opacity 100ms ease-in-out;
  }
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: var(--black);
  }
`
