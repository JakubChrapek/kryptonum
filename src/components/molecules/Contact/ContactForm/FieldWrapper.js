import styled, { css } from "styled-components"
import { StyledErrorMessage } from "./StyledErrorMessage"

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  ${({ variant }) =>
    variant === "checkbox" &&
    css`
      margin: 32px 0;
      ${StyledErrorMessage} {
        bottom: -16px;
      }
      label {
        display: flex;
        align-items: center;
        cursor: pointer;
        p {
          flex: 1 1 100%;
          font-size: 12px;
          font-family: "Poppins";
          letter-spacing: normal;
        }
      }
      input {
        margin: 0 16px 0 0;
        width: auto;
      }
      @media (max-width: 767px) {
        input {
          width: auto;
        }
        ${StyledErrorMessage} {
          bottom: -40px;
        }
      }
    `}
  a {
    color: var(--black);
    text-decoration: none;
    position: relative;
    display: inline-block;
    font-weight: 500;
    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      transform-origin: center bottom;
      transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
        transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      background-color: var(--black);
    }
    &:hover:after {
      transform: scaleY(2);
      opacity: 1;
    }

    &:focus-visible {
      outline: 1px solid var(--black);
    }
  }
`
