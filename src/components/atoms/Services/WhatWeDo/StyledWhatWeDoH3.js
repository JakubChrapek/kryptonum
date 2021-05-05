import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledWhatWeDoH3 = styled(TextStyles)`
  position: relative;
  min-width: 243px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (max-width: 494px) {
    font-size: 30px;
  }
  &::after {
    content: "";
    width: 113%;
    height: 3px;
    background-color: var(--black);
    position: absolute;
    bottom: -4px;
    left: 0;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
`
