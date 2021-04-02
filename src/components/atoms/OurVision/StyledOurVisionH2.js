import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledOurVisionH2 = styled(TextStyles)`
  max-width: 300px;
  position: relative;
  padding-bottom: 2px;
  @media only screen and (max-width: 660px) {
    font-size: 30px;
    line-height: 1.33;
  }
  &::after {
    content: "";
    height: 3px;
    width: 110%;
    background-color: var(--white);
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
