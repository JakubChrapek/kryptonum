import styled from "styled-components"

export const StyledContentColumnForm = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 15px;
  grid-auto-rows: minmax(min-content, max-content);
  position: relative;
  margin-top: 44px;
  @media only screen and (max-width: 890px) {
    grid-gap: 0;
  }
  @media only screen and (max-width: 760px) {
    display: block;
    width: 374px;
  }
  @media only screen and (max-width: 570px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 384px) {
    width: 320px;
    padding: 0;
  }
  label {
    position: absolute;
    top: -20px;
    font-family: "JetBrains Mono";
    font-size: 11px;
    line-height: 1em;
    left: 18px;
    color: var(--accent);
  }

  input {
    padding: 18px;
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-weight: 500;
    line-height: 1.22;
    color: var(--dark-bg);
    border: 2px solid var(--white);
    transition: border-color 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    @media only screen and (max-width: 890px) {
      width: 95%;
    }
    @media only screen and (max-width: 760px) {
      width: 100%;
    }
    &::placeholder {
      color: var(--text-gray);
    }

    &:hover,
    &:active,
    &:focus {
      border: 2px solid var(--accent);
    }
    &:active,
    &:focus {
      outline: none;
    }

    &.error {
      border-color: var(--error);
    }
  }

  p {
    font-size: 14px;
    margin-left: 18px;
    margin-top: 5px;
    color: var(--text-gray);
  }
  .error {
    color: var(--error);
  }

  button {
    border: 2px solid var(--accent);
    padding: 18px;
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-weight: 500;
    line-height: 1.22;
    color: var(--black);
    background-color: var(--accent);
    @media only screen and (max-width: 760px) {
      width: 100%;
      margin-top: 19px;
    }
    &:focus,
    &:active,
    &:hover {
      outline: none;
    }
  }
`
