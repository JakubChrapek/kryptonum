import styled from "styled-components"

export const StyledAddIconSpan = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: var(--black);
    transition: background-color 200ms var(--out-quart),
      opacity 200ms var(--out-quart);
  }
  &:before {
    width: 2px;
    height: 100%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    opacity: ${({ open }) => (open ? "0" : "1")};
  }
  &:after {
    width: 100%;
    transform: translateY(-50%);
    height: 2px;
    top: 50%;
    left: 0;
  }
`
