import styled from "styled-components"
import { TextStyles } from "../../Text/Text"

export const StyledIdeaBoxP = styled(TextStyles)`
  width: 183px;
  height: 183px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--accent);
  @media only screen and (max-width: 892px) {
    width: 269px;
    height: 269px;
  }
  @media only screen and (max-width: 767px) {
    margin: 35px 0 57px 0;
  }
  @media only screen and (max-width: 400px) {
    width: 239px;
    height: 239px;
  }
`
