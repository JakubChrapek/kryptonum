import { Link } from "gatsby"
import styled from "styled-components"

export const StyledArticleStyles = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: ${({ full }) => (full ? "100%" : "50%")};
  @media only screen and (max-width: 740px) {
    width: 100%;
  }
  &:nth-child(2) {
    padding-left: ${({ full }) => (full ? "0" : "26px")};
    @media only screen and (max-width: 740px) {
      padding-left: 0;
    }
  }
  margin-top: ${({ full }) => full && "66px"};
  &:nth-child(1) {
    margin-top: ${({ full }) => full && "0"};
  }
`