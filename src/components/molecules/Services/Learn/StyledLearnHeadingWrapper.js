import styled from "styled-components"
import { StyledHeadingWrapper } from "../../../atoms/Services/Learn/StyledHeadingWrapper"

export const StyledLearnHeadingWrapper = styled(StyledHeadingWrapper)`
  align-self: flex-start;
  flex: unset;
  @media (max-width: 767px) {
    align-self: center;
    flex: 1 1 40%;
    margin-right: 40px;
  }
  @media (max-width: 588px) {
    align-self: flex-start;
  }
`
