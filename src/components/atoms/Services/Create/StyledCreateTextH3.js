import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledCreateTextH3 = styled(TextStyles)`
  max-width: 484px;
  @media only screen and (max-width: 816px) {
    padding-right: 0;
    margin-top: 57px;
  }
  @media only screen and (max-width: 500px) {
    max-width: 264px;
  }
`
