import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledWorkflowComponentHeading = styled(TextStyles)`
  margin-top: 6px;
  @media only screen and (max-width: 767px) {
    font-size: ${({ hasMediaQueryFont }) =>
      hasMediaQueryFont ? "55px" : "86px"};
  }
  @media (max-width: 414px) {
    font-size: ${({ hasMediaQueryFont }) => hasMediaQueryFont && "13.5vw"};
  }
`
