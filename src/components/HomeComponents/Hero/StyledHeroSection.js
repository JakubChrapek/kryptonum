import styled from "styled-components"

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  padding-top: 77px;
  z-index: 0;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 683px) {
    align-items: flex-start;
    padding-top: 197px;
    padding: 197px 84px 0 44px;

    &:after {
      background-color: var(--black);
    }
  }
  h1 {
    font-size: 98px;
    line-height: 0.82;
    font-weight: normal;
    color: var(--lightest-gray);
    z-index: 1;
  }
`

export const StyledImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 90%;
  max-width: 1010px;
  margin-top: 12%;

  @media (max-width: 683px) {
    width: unset;
    margin-top: 0;
  }
  h1 {
    font-family: "Libre Baskerville";
    font-size: 80px;
    font-weight: normal;
    line-height: 1;
    color: var(--lightest-gray);

    @media (max-width: 1101px) {
      font-size: 64px;
    }
    @media (max-width: 868px) {
      font-size: 50px;
    }
    @media (max-width: 683px) {
      font-size: 36px;
      line-height: 50px;
    }
  }
  a {
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
  }
`
