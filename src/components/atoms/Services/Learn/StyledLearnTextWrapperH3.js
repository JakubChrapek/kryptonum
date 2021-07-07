import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledLearnTextWrapperH3 = styled(TextStyles)`
  @media only screen and (max-width: 767px) {
    padding-top: 40px;
    text-align: center;
  }
  @media only screen and (max-width: 528px) {
  }
  span {
    display: block;
    color: var(--accent);
  }
`
