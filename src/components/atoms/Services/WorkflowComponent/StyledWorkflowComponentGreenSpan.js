import styled from "styled-components"

import { TextStyles } from "../../Text/Text"

export const StyledWorkflowComponentGreenSpan = styled(TextStyles)`
  @media only screen and (max-width: 816px) {
    display: ${({ implementation }) => (implementation ? "block" : "inline")};
    text-align: ${({ implementation }) => (implementation ? "center" : "left")};
  }
`
