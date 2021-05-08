import styled from "styled-components"

import { TextStyles } from "../../Text/Text"

export const StyledWorkflowComponentGreenSpan = styled(TextStyles)`
  font-weight: 600;
  @media only screen and (max-width: 767px) {
    display: ${({ implementation }) => (implementation ? "block" : "inline")};
    text-align: ${({ implementation }) => (implementation ? "center" : "left")};
  }
`
