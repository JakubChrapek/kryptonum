import styled from "styled-components"

export const StyledLearnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    margin: 40px 0 160px;
    flex-direction: column;
  }
  @media only screen and (max-width: 588px) {
    justify-content: center;
  }
`
