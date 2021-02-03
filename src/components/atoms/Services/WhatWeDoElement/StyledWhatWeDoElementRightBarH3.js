import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledWhatWeDoElementRightBarH3 = styled(TextStyles)`
  padding: ${({ swap }) => (swap ? "0 63px 0 0" : "0 0 0 63px")};
  max-width: 506px;
  @media only screen and (max-width: 1064px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 772px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 674px) {
    padding: 35px 0 0 0;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    max-width: none;
  }
`
