import styled from "styled-components"

export const StyledContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-right: 40px;
  @media only screen and (max-width: 860px) {
    margin-right: 20px;
  }
  @media only screen and (max-width: 760px) {
    align-items: center;
    margin-right: 0;
  }
  p {
    width: 75%;
    margin-top: 28px;
    font-family: "Poppins";
    font-size: 18px;
    font-weight: normal;
    line-height: 1.44;
    color: var(--white);
    @media only screen and (max-width: 960px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 760px) {
      max-width: 374px;
      width: 100%;
    }
    @media only screen and (max-width: 570px) {
      padding: 0 20px;
    }
  }
`
