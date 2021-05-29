import styled from "styled-components"

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--accent);
  z-index: 1;
  span {
    font-family: "Libre Baskerville";
    font-size: 130px;
    line-height: 0.95em;
    color: transparent;
    -webkit-text-stroke: 1px var(--black);
    align-self: flex-end;
    @media only screen and (max-width: 1035px) {
      font-size: 110px;
    }
  }
  & h3 {
    text-transform: uppercase;
    font-family: "JetBrains Mono";
    font-size: 16px;
    line-height: 1.8em;
    margin: 20px 0 0 16px;
    @media only screen and (max-width: 1035px) {
      font-size: 15px;
    }
  }
  && p {
    font-family: "JetBrains Mono";
    font-size: 13px;
    line-height: 1.67;
    letter-spacing: 4.29px;
    color: var(--black);
    margin: 6px 22px 16px 16px;
    @media only screen and (max-width: 1035px) {
      font-size: 10px;
    }
  }
`
