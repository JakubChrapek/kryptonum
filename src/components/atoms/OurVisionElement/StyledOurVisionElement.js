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
  @media only screen and (max-width: 730px) {
    align-items: flex-start;
  }
  @media only screen and (max-width: 660px) {
    padding-bottom: 80px;
  }

  > div {
    @media only screen and (max-width: 849px) {
      align-self: flex-start;
      padding-left: 120px;
    }
    @media only screen and (max-width: 730px) {
      padding-left: 0;
    }
  }
`
