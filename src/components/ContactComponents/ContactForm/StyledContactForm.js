import styled from "styled-components"
import { Link } from "gatsby"
export const StyledForm = styled.form`
  width: 456px;
  @media only screen and (max-width: 1034px) {
    width: 380px;
  }
  @media only screen and (max-width: 934px) {
    width: 320px;
  }
  > label {
    display: block;
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 2.33px;
    color: var(--black);
    padding-bottom: 2px;
  }
  > input {
    margin-bottom: 32px;
    width: 100%;
    padding: 20px;
    border: solid 1px #707070;
    outline: none;
  }
  > textarea {
    resize: none;
    width: 100%;
    height: 115px;
    border: solid 1px #707070;
    padding: 15px;
    &::placeholder {
      font-family: Poppins;
      font-size: 15px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.47;
      letter-spacing: normal;
      color: var(--text-gray);
    }
  }
  > p {
    margin: 31px 0;
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: var(--black-font);
  }
  > button {
    width: 100%;
    padding: 16px 0;
    background-color: #25eb98;
    border: none;
    font-family: JetBrainsMono;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: 2.57px;
  }
`
export const StyledLink = styled(Link)`
  color: #606060;
  text-decoration: none;
  padding-left: 3px;
`
