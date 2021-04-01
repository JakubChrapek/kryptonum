import styled from "styled-components"

export const StyledContentColumnForm = styled.form`
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-top: 44px;
  @media only screen and (max-width: 912px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 767px) {
    display: block;
    width: 374px;
  }
  @media only screen and (max-width: 570px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 380px) {
    width: 100%;
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
    width: 310px;
    margin-right: 15px;
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-weight: 500;
    line-height: 1.22;
    color: var(--dark-bg);
    border: 2px solid var(--white);
    transition: border-color 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    @media only screen and (max-width: 934px) {
      width: 300px;
    }
    @media only screen and (max-width: 930px) {
      width: 280px;
    }
    @media only screen and (max-width: 912px) {
      width: 310px;
    }
    @media only screen and (max-width: 767px) {
      width: 100%;
      margin-right: 0;
    }
    &::placeholder {
      color: var(--text-gray);
      @media only screen and (max-width: 767px) {
        text-align: center;
      }
    }

    &:hover,
    &:active,
    &:focus {
      border: 2px solid var(--accent);
    }

    &:focus {
      outline-offset: 2px;
      outline: 2px solid var(--accent);
    }
    &.error {
      border-color: var(--error);
      &:focus {
        outline-color: var(--error);
      }
    }
  }

  p {
    font-size: 14px;
    margin-left: 18px;
    margin-top: 5px;
    color: var(--text-gray);
  }
  .error,
  .msg__error {
    color: var(--error);
  }

  .msg,
  .msg__error {
    position: absolute;
    left: 0;
    bottom: -50px;
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
    width: 155px;
    @media only screen and (max-width: 912px) {
      width: 310px;
      margin-top: 19px;
    }
    @media only screen and (max-width: 767px) {
      width: 100%;
      margin-top: 19px;
    }
    &:focus,
    &:active,
    &:hover {
      outline: none;
    }
    &:focus {
      outline-offset: 2px;
      outline: 2px solid var(--accent);
    }
  }
`
