import styled from "styled-components"

export const StyledLearnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    margin-bottom: 203px;
  }
  @media only screen and (max-width: 588px) {
    justify-content: center;
    flex-direction: column;
  }
`
