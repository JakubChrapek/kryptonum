import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledOurWorkflowWrapperH2 = styled(TextStyles)`
  position: relative;

  @media only screen and (max-width: 710px) {
    margin-bottom: 55px;
    font-size: 30px;
  }
  &:after {
    content: "";
    height: 2.8px;
    width: 104%;
    background-color: var(--black);
    position: absolute;
    left: 0;
    bottom: -10px;
  }
`
