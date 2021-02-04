import styled from "styled-components"
import { StyledImageColumn } from "../../molecules/ProjectSection/StyledImageColumn"

export const StyledImageColumnSmallWidth = styled(StyledImageColumn)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background-color: var(--white);

  a {
    @media only screen and (max-width: 430px) {
      width: 320px;
    }
    @media only screen and (max-width: 320px) {
      width: 300px;
      padding: 22px;
    }
  }
`
