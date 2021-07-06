import styled from "styled-components"

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--accent);
  z-index: 1;
  @media (max-width: 767px) {
    display: none;
  }
  span {
    font-size: 140px;
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

    font-size: 16px;
    line-height: 1.5em;
    margin: 8px 0 0 16px;
    @media only screen and (max-width: 1035px) {
      font-size: 15px;
    }
  }
  && p {
    font-size: 13px;
    line-height: 2.2;
    letter-spacing: 0.1em;
    color: var(--black);
    margin: 6px 22px 16px 16px;

    @media only screen and (max-width: 1035px) {
      font-size: 10px;
    }
  }
`
