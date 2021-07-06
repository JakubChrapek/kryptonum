import styled from "styled-components"

export const StyledImageColumnSmallWidthPost = styled.div`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 767px) {
    text-align: center;
    p {
      display: inline-block;
      text-align: left;
    }
    &:last-of-type {
      ul {
        padding-bottom: 47px;
      }
    }
  }
  @media only screen and (max-width: 530px) {
    max-width: 100%;
  }
`
