import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledCreateTextH3 = styled(TextStyles)`
  width: 90%;
  max-width: 514px;
  @media only screen and (max-width: 1083px) {
    width: 100%;
  }
  @media only screen and (max-width: 981px) {
    width: 90%;
  }
  @media only screen and (max-width: 767px) {
    padding-right: 0;
    margin-top: 45px;
    max-width: 353px;
    text-align: center;
    width: 100%;
  }
  @media only screen and (max-width: 330px) {
    font-size: 13vw;
  }
`
