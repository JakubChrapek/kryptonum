import styled from "styled-components"
import { TextStyles } from "../../../atoms/Text/Text"

export const AnswerText = styled(TextStyles)`
  @media (max-width: 767px) {
    padding-left: 0;
  }
  display: inline-block;
  p {
    display: inline;
    a {
      display: inline;
      color: inherit;
      pointer-events: all;
    }
  }
`
