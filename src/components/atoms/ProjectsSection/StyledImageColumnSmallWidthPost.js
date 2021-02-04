import styled from "styled-components"

export const StyledImageColumnSmallWidthPost = styled.div`
  max-width: 640px;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 530px) {
    max-width: none;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
