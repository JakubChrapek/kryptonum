import styled from "styled-components"

export const StyledErrorWrapper = styled.div`
  padding: 177px 120px 80px 120px;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    padding: 150px 60px 60px 60px;
  }
  @media only screen and (max-width: 911px) {
    min-height: unset;
    padding: 120px 70px 112px 70px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  @media only screen and (max-width: 640px) {
    padding: 120px 28px 112px 28px;
  }
`
