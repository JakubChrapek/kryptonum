import styled from "styled-components"

export const StyledWhatWeDoInfoTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 110px 140px;
  @media only screen and (max-width: 1168px) {
    padding: 110px 90px;
  }
  @media only screen and (max-width: 847px) {
    padding: 100px 60px;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    padding: 80px 60px;
  }
  @media only screen and (max-width: 526px) {
    flex-direction: column;
    padding: 51px 28px;
  }
`
