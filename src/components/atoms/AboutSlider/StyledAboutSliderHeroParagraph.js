import styled from "styled-components"
import { TextStyles } from "../../atoms/Text/Text"

export const StyledAboutSliderHeroParagraph = styled(TextStyles)`
  @media only screen and (max-width: 1183px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 1063px) {
    /* padding-top: 37px; */
  }
  @media only screen and (max-width: 767px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 767px) {
    line-height: 1.33;
    font-size: 18px;
  }
  @media only screen and (max-width: 574px) {
    line-height: 1.33;
    font-size: 15px;
  }
`
