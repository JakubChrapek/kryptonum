import styled from "styled-components"

export const StyledUltimateSectionStyles = styled.div`
  display: flex;
  padding: 113px 108px 83px 138px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 102px 114px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 102px 90px;
  }
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 570px) {
    padding: 46px 0;
  }
`
