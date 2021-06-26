import styled from "styled-components"

export const StyledProjectsStyles = styled.div`
  display: flex;
  padding: 76px 112px 220px 112px;
  max-width: 1366px;
  margin: 0 auto;
  @media only screen and (max-width: 1200px) {
    padding: 76px 0px 110px 76px;
    justify-content: space-between;
  }
  @media only screen and (max-width: 971px) {
    padding: 76px 0px 110px 20px;
  }
  @media only screen and (max-width: 767px) {
    padding: 76px 0 110px 0;
  }
  @media only screen and (max-width: 500px) {
    padding: 20px 0 0 0;
  }
  a {
    text-decoration: none;
  }
`
