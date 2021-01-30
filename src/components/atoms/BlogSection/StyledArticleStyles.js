import { Link } from "gatsby"
import styled from "styled-components"

export const StyledArticleStyles = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media only screen and (max-width: 740px) {
    width: 100%;
  }
  :nth-child(2) {
    padding-left: 26px;
    @media only screen and (max-width: 740px) {
      padding-left: 0;
    }
  }
`
