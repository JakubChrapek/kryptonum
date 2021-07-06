import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"

export const StyledScrollLink = styled(ScrollLink)`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  margin: 112px 0 0 -36px;
  width: 296px;
  height: 296px;
  max-width: 80vw;
  max-height: 80vw;
  padding-left: 70px;
  text-decoration: none;
  z-index: 1;
  transition: border 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  cursor: pointer;

  @media (max-width: 1280px) {
    margin: 40px 0 0 -36px;
  }
  @media (max-width: 767px) {
    padding-left: 40px;
    margin: 64px 0 0;
  }
  @media (max-width: 653px) {
    padding-left: 24px;
    padding-top: 8px;
    width: 55vw;
    height: 55vw;
    margin: 28px 0 0;
  }

  &:hover {
    border-color: var(--accent);
  }

  &:focus,
  &:active {
    border-color: var(--accent);
  }

  button {
    text-align: left;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
    color: var(--white);

    background-color: transparent;
    border: none;
    &:focus-visible {
      outline-offset: 4px;
      outline: 2px solid var(--white);
    }
    @media only screen and (min-width: 1920px) {
      font-size: 18px;
    }
  }

  svg {
    fill: var(--white);
    margin-top: 12px;
    width: 28px;
  }
  span {
    color: var(--white);
  }
`
