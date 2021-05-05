import styled from "styled-components"

export const StyledWhatWeDoElementImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 140px;
  @media only screen and (max-width: 1168px) {
    padding: 0 90px;
  }
  @media only screen and (max-width: 847px) {
    padding: 0 60px;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 526px) {
    padding: 0 28px;
  }
`
