import styled from "styled-components"

export const StyledThinkTextWrapper = styled.div`
  /* max-width: 300px; */
  flex: 1 1 26%;
  @media (max-width: 1168px) and (min-width: 768px) {
    flex: 1 1 52.5%;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 70px;
  }
  @media (max-width: 460px) {
    align-self: flex-start;
  }
`
