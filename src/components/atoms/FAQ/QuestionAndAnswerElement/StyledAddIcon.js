import styled from "styled-components"

export const StyledAddIcon = styled.div`
  width: 20px;
  height: 20px;
  transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0)")};
  transition: transform 100ms ease-in-out;
  cursor: pointer;
  @media only screen and (max-width: 563px) {
    margin-right: 43px;
  }
`
