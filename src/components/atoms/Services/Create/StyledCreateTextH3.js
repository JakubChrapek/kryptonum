import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledCreateTextH3 = styled(TextStyles)`
  width: 90%;
  max-width: 514px;
  @media only screen and (max-width: 767px) {
    padding-right: 0;
    margin-top: 57px;
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    max-width: 264px;
  }
`
