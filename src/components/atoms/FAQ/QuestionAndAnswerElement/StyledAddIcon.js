import styled, { css } from "styled-components"

export const StyledAddIcon = styled.div`
  width: 20px;
  height: 20px;
  transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0)")};
  transition: transform 200ms var(--out-quart);
  cursor: pointer;
  margin-bottom: 18px;
  @media only screen and (max-width: 563px) {
    margin-right: 23px;
  }
  @media only screen and (max-width: 400px) {
    margin-right: 0;
  }

  ${({ variant }) =>
    variant === "offer" &&
    css`
      margin-bottom: 0;
      margin-right: 52px;
      @media only screen and (max-width: 563px) {
        margin-right: 0;
      }
      @media only screen and (max-width: 400px) {
        margin-right: 0;
      }
    `}

  :hover {
    transform: ${({ open }) =>
      open ? "scale(1.3) rotate(-180deg)" : "scale(1.3) rotate(0)"};
    > span:before,
    > span:after {
      background-color: var(--accent);
    }
  }
`
