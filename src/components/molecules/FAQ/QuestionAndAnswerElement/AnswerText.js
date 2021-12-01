import styled, { css } from "styled-components"
import { TextStyles } from "../../../atoms/Text/Text"

export const AnswerText = styled(TextStyles)`
  @media (max-width: 767px) {
    padding-left: 0;
  }
  display: inline-block;
  p {
    display: inline-block;
    a {
      display: inline;
      color: inherit;
      pointer-events: all;
    }
    + p {
      margin-top: 8px;
    }
  }

  ${({ variant }) =>
    variant === "offer" &&
    css`
      padding: 0 0 28px 0;
      @media only screen and (max-width: 767px) {
        padding: 0 0 28px 0;
      }
      @media only screen and (max-width: 640px) {
        padding: 0 0 28px 0;
      }
    `}
`
