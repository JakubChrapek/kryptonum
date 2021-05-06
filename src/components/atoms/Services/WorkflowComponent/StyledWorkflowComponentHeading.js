import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledWorkflowComponentHeading = styled(TextStyles)`
  margin-top: 12px;
  @media only screen and (max-width: 816px) {
    font-size: ${({ hasMediaQueryFont }) =>
      hasMediaQueryFont ? "44px" : "70px"};
  }
`
