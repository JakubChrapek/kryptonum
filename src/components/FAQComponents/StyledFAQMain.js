import styled from "styled-components"

export const StyledFAQMain = styled.main`
  width: 100%;
`

export const StyledFAQWrapper = styled.div`
  padding: 183px 120px;
  max-width: 1366px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media only screen and (max-width: 975px) {
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

export const StytledFAQH1 = styled.h1`
  max-width: 600px;
  padding-right: 81px;
  font-family: Poppins;
  font-size: 76px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  color: var(--black);

  @media only screen and (max-width: 1085px) {
    font-size: 70px;
  }
  @media only screen and (max-width: 1085px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 975px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 563px) {
    max-width: 210px;
    font-size: 40px;
  }
`
