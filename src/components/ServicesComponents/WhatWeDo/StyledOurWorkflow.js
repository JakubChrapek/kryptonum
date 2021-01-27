import styled from "styled-components"

export const OurWorkflowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 140px;
  margin: 0 auto;
  max-width: 1366px;
  @media only screen and (max-width: 892px) {
    padding: 0 28px;
  }
  h2 {
    font-family: Poppins;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    color: var(--black);
    position: relative;
    margin-bottom: 124px;
    @media only screen and (max-width: 710px) {
      margin-bottom: 55px;
      font-size: 30px;
    }
    &:after {
      content: "";
      height: 2.8px;
      width: 110%;
      background-color: var(--black);
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  > div {
    width: 100%;
  }
`
