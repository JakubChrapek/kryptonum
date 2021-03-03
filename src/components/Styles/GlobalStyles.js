import React from "react"
import { createGlobalStyle, css } from "styled-components"
import { useMenuState } from "../../contexts/menuContext"

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    --accent: #00EF8B;
    --accent-lighter: #87ceb0;
    --light-accent: rgba(0, 155, 90, 0.45);
    --dark-bg: #171717;
    --black: #000;
    --black-font: #090909;
    --white: #fff;
    --gray: #363636;
    --text-gray: #b2b2b2;
    --text-light-gray: #c0c0c0;
    --light-gray: #F7F7F7;
    --lightest-gray: #F7F8FA;
    --line-gray: #E6E6E6;
    --error: #C32F27;
    --masonry-gap: 64px;
    --transition-bezier-curve: cubic-bezier(0.6, -0.05, 0.01, 0.99);
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

  /*! locomotive-scroll v3.5.4 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
  html.has-scroll-smooth {
    overflow: hidden;
  }

  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .has-scroll-smooth body {
    overflow: hidden;
  }

  /* Specifying the scroll container manually */
  .has-scroll-smooth #___gatsby,
  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh;
  }

  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    height: 100vh;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
  }
  .c-scrollbar:hover {
    transform: scaleX(1.6);
  }
  .c-scrollbar:hover,
  .has-scroll-scrolling .c-scrollbar,
  .has-scroll-dragging .c-scrollbar {
    opacity: 1;
  }

  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(180deg, var(--accent) 0%, var(--white) 100%);
    opacity: 0.5;
    width: 7px;
    border-radius: 15px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab;
  }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  .body-lock {
  overflow-y: hidden;
  }

  /* Masonry grid styles */
  .my-masonry-grid {
    display: flex;
    margin-left: calc(-1 * var(--masonry-gap)); /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: var(--masonry-gap); /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    
  }

`

const GlobalStyles = () => {
  const { show } = useMenuState()
  return <Global mobileMenuShown={show} />
}

export default GlobalStyles
