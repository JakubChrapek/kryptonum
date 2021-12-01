import styled, { css } from "styled-components"
import { StyledAddIcon } from "./StyledAddIcon"

export const StyledQuestion = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  color: var(--black);
  text-align: left;
  background-color: transparent;
  border: none;
  flex: 1 1 100%;
  padding: 28px 16px 46px 14px;
  @media only screen and (max-width: 767px) {
    padding: 28px 16px 40px 14px;
  }
  @media only screen and (max-width: 400px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 330px) {
    padding-right: 0;
  }
  ${({ variant }) =>
    variant === "offer" &&
    css`
      padding: 28px 16px 28px 0;
      @media only screen and (max-width: 767px) {
        padding: 28px 16px 28px 0;
      }
      @media only screen and (max-width: 640px) {
        padding: 28px 16px 28px 0;
      }
    `}

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    + ${StyledAddIcon} {
      > span:before,
      > span:after {
        background-color: var(--accent);
      }
    }
  }
  &:hover + ${StyledAddIcon} {
    > span:before,
    > span:after {
      background-color: var(--accent);
    }
  }
`
