import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledCreateTextH3 = styled(TextStyles)`
  @media (max-width: 1224px) {
    max-width: 364px;
  }
  @media (max-width: 1024px) {
    font-size: clamp(34px, 4vw, 40px);
  }
  @media only screen and (max-width: 767px) {
    padding-right: 0;
    margin-top: 45px;
    max-width: 353px;
    text-align: center;
    width: 100%;
  }
  @media only screen and (max-width: 411px) {
    font-size: 7.5vw;
  }
  @media only screen and (max-width: 347px) {
    font-size: 7vw;
  }
  @media only screen and (max-width: 330px) {
    font-size: clamp(28px, 4vw, 40px);
  }
  > p {
    display: inline;
    > span {
      padding-bottom: 2px;
    }
  }
`
