import styled from "styled-components"
import { Form } from "formik"

export const StyledForm = styled(Form)`
  width: 456px;
  @media only screen and (max-width: 1034px) {
    width: 380px;
  }
  @media only screen and (max-width: 934px) {
    width: 320px;
  }
  @media only screen and (max-width: 870px) {
    width: 364px;
  }
  @media only screen and (max-width: 520px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  label {
    display: block;
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 2.33px;
    color: var(--black);
    padding-bottom: 6px;
  }
  input {
    margin-bottom: 30px;
    width: 100%;
    padding: 16px;
    border: 1px solid #707070;
    outline: none;
    font-family: "Poppins";
    font-size: 15px;
    transition: border-color 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:hover,
    &:active,
    &:focus {
      border: 1px solid var(--black);
    }

    &:focus {
      outline: 1px solid var(--black);
    }
    &.error {
      border-color: var(--error);
      &:focus {
        outline-color: var(--error);
      }
    }
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
  textarea {
    resize: none;
    width: 100%;
    height: 115px;
    border: 1px solid #707070;
    padding: 15px;
    font-family: "Poppins";
    font-size: 15px;
    transition: border-color 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:hover,
    &:active,
    &:focus {
      border: 1px solid var(--black);
    }

    &:focus {
      outline: 1px solid var(--black);
    }
    &.error {
      border-color: var(--error);
      &:focus {
        outline-color: var(--error);
      }
    }
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
    margin: 24px 0 31px;
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
    padding: 16px 4px;
    background-color: #25eb98;
    border: none;
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: 2.57px;
    &:focus,
    &:active,
    &:hover {
      outline: none;
    }
    &:focus {
      outline-offset: 2px;
      outline: 2px solid var(--accent);
    }
    @media (max-width: 767px) {
      margin-top: 32px;
    }
  }
`
