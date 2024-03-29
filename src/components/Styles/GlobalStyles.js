import React from "react"
import { createGlobalStyle, css } from "styled-components"
import { useMenuState } from "../../contexts/menuContext"

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    --accent:#30BB78;
    --button-accent: #25eb98;
    --accent-line: #2BDD88;
    --accent-lighter: #87ceb0;
    --light-accent: rgba(0, 155, 90, 0.45);
    --black: #000;
    --black-font: #090909;
    --off-black: #030204;
    --dark-bg: var(--off-black);
    --white: #fff;
    --gray: #363636;
    --slide-specialty: #afafaf;
    --text-list-item: #6B7280;
    --text-gray: #b2b2b2;
    --text-light-gray: #c0c0c0;
    --light-gray: #F7F7F7;
    --lightest-gray: #F7F8FA;
    --line-gray: #E6E6E6;
    --error: #C32F27;
    --masonry-gap: 64px;
    --transition-bezier-curve: cubic-bezier(0.6, -0.05, 0.01, 0.99);
    --cursor-full: var(--dark-bg);
    --cursor-light: var(--lightest-gray);
    --out-cubic:    cubic-bezier(0.215,  0.610, 0.355, 1.000);
    --out-quart:    cubic-bezier(0.165,  0.840, 0.440, 1.000);
    --out-quint:    cubic-bezier(0.230,  1.000, 0.320, 1.000);
    font-size: 10px;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4, li, p, a,b,strong,span {

    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }
  body {
    font-size: 1.6rem;
    font-family: "Poppins";
    overflow-x: hidden;
    
       ${({ mobileMenuShown }) =>
         mobileMenuShown &&
         css`
           width: 100vw;
           height: 100vh;
           overflow: hidden;
         `}
    
  }

  button {
    font-family: "Poppins";
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
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: 0.35em;
    color: var(--white);
    border: 1px solid var(--black);
    padding: 31px 20px;
    background-color: var(--black);
    margin: ${({ margin }) => (margin ? margin : "")};
    position: relative;
    left: ${({ left }) => (left ? left : "")};
    text-decoration: none;
    text-align: center;
    &__dark {
      color: var(--white);
      border: 1px solid var(--black);
      padding: 31px 20px;
      background-color: var(--black);
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid var(--black);
      }
    }

    &__light {
      color: var(--black);
      background-color: var(--white);
      border-color: var(--white);
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid var(--white);
      }
    }
    &__small {
      padding: 20px;
      max-width: 290px;
      @media (max-width: 540px) {
        max-width: calc(100vw - 120px);
        width: 100vw;
      }
    }
  }

  .body-lock {
  overflow-y: hidden;
  }

  /* Masonry grid styles */
  .my-masonry-grid {
    display: flex;
    margin-left: calc(-1 * var(--masonry-gap)); /* gutter size offset */
    width: auto;
    @media (max-width: 768px) {
      --masonry-gap: 40px;
    }
  }
  .my-masonry-grid_column {
    padding-left: var(--masonry-gap); /* gutter size */
    background-clip: padding-box;
    @media (max-width: 768px) {
      --masonry-gap: 40px;
    }
  }
`

const GlobalStyles = () => {
  const { show } = useMenuState()
  return <Global mobileMenuShown={show} />
}

export default GlobalStyles
