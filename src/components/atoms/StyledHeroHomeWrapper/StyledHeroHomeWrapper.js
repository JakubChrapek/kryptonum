import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 90%;
  max-width: 1010px;
  margin-top: 12%;
  @media only screen and (min-width: 1920px) {
    max-width: 1310px;
  }
  @media (max-width: 683px) {
    width: unset;
    margin-top: 0;
  }
`
