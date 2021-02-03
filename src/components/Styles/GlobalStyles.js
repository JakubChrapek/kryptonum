import React from "react"
import { createGlobalStyle, css } from "styled-components"
import { useMenuState } from "../../contexts/menuContext"

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    --accent: #00EF8B;
    --light-accent: rgba(0, 155, 90, 0.45);
    --dark-bg: #171717;
    --black: #000;
    --black-font: #090909;
    --white: #fff;
    --gray: #363636;
    --text-gray: #b2b2b2;
    --light-gray: #F7F7F7;
    --lightest-gray: #F7F8FA;
    --line-gray: #E6E6E6;
    --error: #C32F27;
    font-size: 10px;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 1.6rem;
    font-family: "Poppins";
    ${({ mobileMenuShown }) =>
      mobileMenuShown &&
      css`
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      `}
  }

  h1,h2 {
    font-family: "Libre Baskerville"
  }
  button {
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  ul, li {
    padding: 0;
    margin: 0;
  }
  img::selection {
    background-color: transparent;
  }

  .btn {
    width: 100%;
    max-width: 387px;
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: 2.57px;
    color: var(--white);
    border: 1px solid var(--black);
    padding: 31px 20px;
    background-color: var(--black);
    margin: ${({ margin }) => (margin ? margin : "")};
    position: relative;
    left: ${({ left }) => (left ? left : "")};
    text-decoration: none;
    text-align: center;
  }

  .btn__small {
    padding: 20px;
    max-width: 290px;
  } 
  
  .btn__light {
    color: var(--black);
    background-color: var(--white);
    border-color: var(--white);
  }
`

const GlobalStyles = () => {
  const { show } = useMenuState()
  return <Global mobileMenuShown={show} />
}

export default GlobalStyles
