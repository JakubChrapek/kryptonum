import styled from "styled-components"

export const StyledWhatWeDoElementLeftBar = styled.div`
  height: 570px;
  flex: 1 1 50%;
  background-color: #707070;
  margin: ${({ swap }) => (swap ? "0" : "0 63px 0 0")};
  order: ${({ swap }) => (swap ? 2 : 1)};
  @media only screen and (max-width: 1064px) {
    height: 470px;
  }
  @media only screen and (max-width: 936px) {
    height: 420px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 370px;
  }
  @media (max-width: 767px) {
    margin: 0;
  }
  @media only screen and (max-width: 674px) {
    height: 359px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 395px;
  }
`
