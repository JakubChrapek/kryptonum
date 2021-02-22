import styled from "styled-components"
import { StyledImageColumn } from "../../molecules/ProjectSection/StyledImageColumn"

export const StyledImageColumnSmallWidth = styled(StyledImageColumn)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background-color: var(--white);
  align-items: center;
  a {
    @media only screen and (max-width: 430px) {
      width: 320px;
      padding: 18px 9px;
      font-size: 14px;
    }
    @media only screen and (max-width: 371px) {
      width: 260px;
      padding: 22px;
    }
  }
`
