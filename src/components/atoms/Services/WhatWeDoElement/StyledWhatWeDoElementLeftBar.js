import styled from "styled-components"

export const StyledWhatWeDoElementLeftBar = styled.div`
  width: 518px;
  height: 570px;
  background-color: #707070;
  order: ${({ swap }) => (swap ? 2 : 1)};
  @media only screen and (max-width: 1064px) {
    height: 470px;
  }
  @media only screen and (max-width: 936px) {
    height: 420px;
  }
  @media only screen and (max-width: 772px) {
    height: 370px;
  }
  @media only screen and (max-width: 674px) {
    height: 359px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 395px;
  }
`
