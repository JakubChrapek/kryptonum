import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
  margin-top: 137px;
  justify-content: flex-end;
  padding-right: 30px;
  @media only screen and (min-width: 1920px) {
    max-width: 1310px;
  }
  @media (max-width: 683px) {
    width: unset;
    margin-top: 0;
  }
`
