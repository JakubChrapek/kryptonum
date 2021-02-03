import styled from "styled-components"
import { TextStyles } from "../Text/Text"

export const StyledContactTextWrapperH1 = styled(TextStyles)`
    margin: 0 auto;
    max-width: 1200px;
    @media only screen and (max-width: 1037px) {
      font-size: 66px;
    }
    @media only screen and (max-width: 925px) {
      font-size: 60px;
    }
    @media only screen and (max-width: 692px) {
      font-size: 40px;
    }
  }
`
