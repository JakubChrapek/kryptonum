import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
  margin-top: 9.5vh;
  justify-content: flex-end;
  padding-right: 30px;
  @media only screen and (min-width: 1920px) {
    max-width: 1310px;
  }
  @media (max-width: 1140px) {
    flex-direction: column;
  }
  @media (max-width: 683px) {
    width: unset;
    margin-top: 0;
    padding-right: 0px;
  }
`
