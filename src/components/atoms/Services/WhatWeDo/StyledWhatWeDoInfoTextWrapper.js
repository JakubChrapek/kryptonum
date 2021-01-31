import styled from "styled-components"

export const StyledWhatWeDoInfoTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 110px 140px;
  @media only screen and (max-width: 1064px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 892px) {
    padding: 51px 28px;
  }
`
