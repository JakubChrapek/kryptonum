import styled from "styled-components"

export const HeroFooterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  padding: 0 112px 32px 97px;
  a {
    color: var(--lightest-gray);
    text-decoration: none;
    margin-right: 23px;
    padding: 6px 8px;
    font-size: 13px;
    line-height: 1.31em;
    position: relative;
    font-family: "JetBrains Mono";
    &:before {
      content: "";
      position: absolute;
      left: 8px;
      bottom: 3px;
      height: 1px;
      width: calc(100% - 16px);
      background-color: var(--white);
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }

    &:hover,
    &:active,
    &:focus {
      &:before {
        transform: scaleY(1);
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
`
