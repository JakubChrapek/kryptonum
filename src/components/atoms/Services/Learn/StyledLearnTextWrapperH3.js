import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledLearnTextWrapperH3 = styled(TextStyles)`
  @media only screen and (max-width: 767px) {
    padding-top: 73px;
  }
  @media only screen and (max-width: 528px) {
    text-align: center;
  }
  span {
    display: block;
    color: var(--accent);
  }
`
