import styled from "styled-components"

export const SectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 102px 100px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1090px) {
    padding: 102px 80px;
  }
  @media only screen and (max-width: 767px) {
    padding: 114px 40px 106px;
  }
  @media only screen and (max-width: 500px) {
    padding: 114px 28px 106px;
  }
`
