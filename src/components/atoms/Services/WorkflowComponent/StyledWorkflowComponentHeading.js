import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledWorkflowComponentHeading = styled(TextStyles)`
  margin-top: 6px;
  @media (max-width: 1024px) {
    font-size: 7.4vw;
  }
  @media only screen and (max-width: 767px) {
    font-size: ${({ hasMediaQueryFont }) =>
      hasMediaQueryFont ? "clamp(36px, 10vw, 55px)" : "60px"};
  }
  @media only screen and (max-width: 360px) {
    font-size: ${({ hasMediaQueryFont }) =>
      hasMediaQueryFont ? "clamp(36px, 11.5vw, 55px)" : "42px"};
  }
`
