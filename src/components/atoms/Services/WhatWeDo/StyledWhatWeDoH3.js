import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledWhatWeDoH3 = styled(TextStyles)`
  position: relative;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  &::after {
    content: "";
    width: 110%;
    height: 2.8px;
    background-color: var(--black);
    position: absolute;
    bottom: 0;
    left: 0;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
`
