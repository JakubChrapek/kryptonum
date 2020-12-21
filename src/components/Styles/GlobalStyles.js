import React from "react"
import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    --accent: #00EF8B;
    --dark-bg: #171717;
    --black: #000;
    --white: #fff;
    --light-gray: #F7F7F7;
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
`

const GlobalStyles = () => {
  return <Global />
}

export default GlobalStyles
