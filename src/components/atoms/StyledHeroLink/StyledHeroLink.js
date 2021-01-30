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
  margin-top: -100px;
  margin-right: -50px;
  width: 296px;
  height: 296px;
  padding-left: 70px;
  text-decoration: none;
  z-index: 1;
  transition: border 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  cursor: pointer;

  @media (max-width: 1101px) {
    margin-right: 20px;
    margin-top: -80px;
  }

  @media (max-width: 868px) {
    width: 242px;
    height: 242px;
    padding-left: 40px;
  }

  &:hover {
    border-color: var(--accent);
  }

  &:focus,
  &:active {
    border-color: var(--accent);
  }

  p {
    text-align: left;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: 3.64px;
    font-weight: 500;
    color: var(--white);
    font-family: "JetBrains Mono";
  }
  span {
    color: var(--white);
  }
`
