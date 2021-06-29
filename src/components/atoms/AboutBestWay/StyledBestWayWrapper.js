import styled from "styled-components"

export const StyledBestWayWrapper = styled.div`
  width: 100%;
  padding: 130px 162px 130px 162px;
  max-width: 1220px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 130px 90px 130px 90px;
    max-width: 996px;
  }

  @media only screen and (max-width: 1160px) {
    padding: 130px 90px 130px 90px;
  }
  @media only screen and (max-width: 890px) {
    padding: 90px;
  }
  @media only screen and (max-width: 767px) {
    padding: 60px 28px 60px 28px;
  }
`
