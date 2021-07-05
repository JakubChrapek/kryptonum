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
    width: 357px;
    padding-left: 14px;
  }
  @media only screen and (max-width: 389px) {
    width: 280px;
    padding-left: 0;
  }
`
