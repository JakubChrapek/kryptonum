import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledCreateTextH3 = styled(TextStyles)`
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
  > p {
    display: inline;
    > span {
      padding-bottom: 2px;
    }
  }
`
