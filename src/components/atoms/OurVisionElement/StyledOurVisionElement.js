import styled from "styled-components"

export const StyledOurVisionElement = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 122px;
  @media only screen and (max-width: 849px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 660px) {
    padding-bottom: 80px;
  }
  @media only screen and (max-width: 533px) {
    align-items: flex-start;
  }
`
