import styled from "styled-components"

export const FirstRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 70%;
  padding-left: 9%;
  @media (max-width: 1142px) {
    padding-left: 6%;
  }
  @media only screen and (max-width: 767px) {
    margin: 0 auto;
    justify-content: flex-start;
    padding-left: 0;
    width: 100%;
    max-width: 37.6rem;
    padding-left: 2rem;
  }
  @media only screen and (max-width: 389px) {
    padding-left: 0;
  }
`
