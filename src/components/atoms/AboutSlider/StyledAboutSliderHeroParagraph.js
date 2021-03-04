import styled from "styled-components"
import { TextStyles } from "../../atoms/Text/Text"

export const StyledAboutSliderHeroParagraph = styled(TextStyles)`
  @media only screen and (max-width: 1183px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 1063px) {
    padding-top: 37px;
  }
  @media only screen and (max-width: 759px) {
    font-size: 15px;
    padding-bottom: 89px;
  }
`