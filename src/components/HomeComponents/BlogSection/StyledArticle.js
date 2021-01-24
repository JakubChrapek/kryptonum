import { Link } from "gatsby"
import styled from "styled-components"

export const ArticleStyles = styled(Link)`
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

  div {
    display: flex;
    padding: 0;
    flex-direction: column;
    border-bottom: 2px solid var(--black);
    align-items: flex-start;
  }

  p {
    color: var(--dark-bg);
    font-size: 10px;
    line-height: 1.3em;
    letter-spacing: 0.8px;
    font-family: "Poppins";
    margin-top: 26px;
    padding-bottom: 13px;
    width: 100%;
  }
`
