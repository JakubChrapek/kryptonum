import styled from "styled-components"

export const Wrapper = styled.section`
  background-color: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SectionStyles = styled.div`
  display: flex;
  padding: 113px 108px 83px 138px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 102px 114px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 102px 90px;
  }
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 570px) {
    padding: 46px 0;
  }
  a {
    margin: 48px 0 0;
    display: inline-block;
    button {
      min-width: 290px;
    }
  }
`

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-right: 40px;
  @media only screen and (max-width: 860px) {
    margin-right: 20px;
  }
  @media only screen and (max-width: 760px) {
    align-items: center;
    margin-right: 0;
  }
  h2 {
    font-family: "Poppins";
    font-size: 62px;
    font-weight: normal;
    line-height: 1.31em;
    letter-spacing: normal;
    color: var(--white);
    @media only screen and (max-width: 960px) {
      font-size: 47px;
    }
    @media only screen and (max-width: 760px) {
      max-width: 374px;
    }
    @media only screen and (max-width: 570px) {
      padding: 0 20px;
    }
  }
  span {
    justify-self: flex-start;
    color: var(--black);
    font-size: 14px;
    line-height: 1.58em;
    padding: 4px 17px;
    width: 100%;
    max-width: 310px;
    background-color: var(--accent);
    margin-bottom: 24px;
    @media only screen and (max-width: 760px) {
      max-width: 374px;
    }
    @media only screen and (max-width: 760px) {
      max-width: none;
    }
  }
  p {
    width: 75%;
    margin-top: 28px;
    font-family: "Poppins";
    font-size: 18px;
    font-weight: normal;
    line-height: 1.44;
    color: var(--white);
    @media only screen and (max-width: 960px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 760px) {
      max-width: 374px;
      width: 100%;
    }
    @media only screen and (max-width: 570px) {
      padding: 0 20px;
    }
  }

  form {
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
  }
`

export const EbookColumn = styled(ContentColumn)`
  flex: 2;
  margin-top: -44px;
  margin-right: 0;
  align-items: flex-end;

  @media only screen and (max-width: 760px) {
    align-items: center;
    margin-top: 46px;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 377px;
  }
  img,
  picture {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
  }
`
