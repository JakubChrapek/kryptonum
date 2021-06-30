import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledOurWorkflowWrapperH2 = styled(TextStyles)`
  position: relative;

  @media only screen and (max-width: 710px) {
    margin-bottom: 55px;
    font-size: 30px;
  }
  mark {
    color: var(--accent);
    position: relative;
    background-color: transparent;
    &:after {
      content: "";
      height: 2.8px;
      width: 125%;
      background-color: var(--accent);
      position: absolute;
      left: 0;
      bottom: -6px;
    }
  }
`
