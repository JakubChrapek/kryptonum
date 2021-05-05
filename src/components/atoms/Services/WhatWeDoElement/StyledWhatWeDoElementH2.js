import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledWhatWeDoElementH2 = styled(TextStyles)`
  @media only screen and (max-width: 1064px) {
    font-size: 40px;
    margin-bottom: 74px;
  }
  @media only screen and (max-width: 767px) {
    text-align: left;
    padding: 0 60px;
    margin-bottom: 51px;
  }
  @media only screen and (max-width: 526px) {
    padding: 0 28px;
    font-size: 36px;
    line-height: 1.43;
  }
  @media only screen and (max-width: 420px) {
    font-size: 28px;
  }
`
