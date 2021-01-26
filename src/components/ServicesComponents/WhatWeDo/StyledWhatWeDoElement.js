import styled from "styled-components"

export const StyledWhatWeDoElementWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  margin-bottom: 135px;
  h2 {
    text-align: center;
    font-family: Poppins;
    font-size: 76px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.51;
    letter-spacing: normal;
    margin: 0 0 114px 0;
    @media only screen and (max-width: 1064px) {
      font-size: 56px;
      margin-bottom: 74px; //51
    }
    @media only screen and (max-width: 600px) {
      text-align: left;
      padding-left: 29px;
      font-size: 28px;
      line-height: 1.43;
      margin-bottom: 51px;
    }
  }
  @media only screen and (max-width: 674px) {
    margin: 0 0 51px 0;
  }
`
export const TextAndImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 140px;
  @media only screen and (max-width: 892px) {
    padding: 0 29px;
  }
  @media only screen and (max-width: 674px) {
    flex-direction: column;
  }
`

export const LeftBar = styled.div`
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

export const RightBar = styled.div`
  order: ${({ swap }) => (swap ? 1 : 2)};
  @media only screen and (max-width: 674px) {
    order: ${({ swap }) => (swap ? 2 : 1)};
  }
  h3 {
    font-family: Poppins;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    padding-left: 63px;
    padding: ${({ swap }) => (swap ? "0 63px 0 0" : "0 0 0 63px")};
    max-width: 506px;
    @media only screen and (max-width: 1064px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 772px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 674px) {
      padding: 35px 0 0 0;
    }
    @media only screen and (max-width: 600px) {
      font-size: 16px;
      max-width: none;
    }
  }
`
