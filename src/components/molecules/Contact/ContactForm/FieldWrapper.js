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
    `}
`
