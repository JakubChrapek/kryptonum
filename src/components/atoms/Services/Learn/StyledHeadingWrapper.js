import styled from "styled-components"

export const StyledHeadingWrapper = styled.div`
  align-self: center;
  flex: 1 1 47.5%;

  @media (max-width: 767px) {
    align-self: flex-start;
  }
  @media (max-width: 588px) {
    flex: 1 1 100%;
  }
`
