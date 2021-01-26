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
  }
`
export const TextAndImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 140px;
`

export const LeftBar = styled.div`
  width: 518px;
  height: 570px;
  background-color: #707070;
  order: ${({ swap }) => (swap ? 2 : 1)};
`

export const RightBar = styled.div`
  order: ${({ swap }) => (swap ? 1 : 2)};
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
  }
`
