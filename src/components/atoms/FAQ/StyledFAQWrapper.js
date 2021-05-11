import styled from "styled-components"

export const StyledFAQWrapper = styled.div`
  padding: 183px 120px;
  max-width: 1366px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media only screen and (max-width: 1280px) {
    padding: 183px 90px;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 710px) {
    padding: 143px 28px;
  }
  @media only screen and (max-width: 563px) {
    align-items: flex-start;
    padding-bottom: 43px;
  }
`
