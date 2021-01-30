import styled from "styled-components"

export const StyledProjectsColumn = styled.ul`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 124px;

  li {
    font-family: "Libre Baskerville";
    font-size: 70px;
    line-height: 1.24em;
    font-weight: normal;
    letter-spacing: -1.75px;
    position: relative;
    padding-left: 8px;
    margin-bottom: 48px;
    cursor: pointer;
    color: #030303;
    &.active {
      color: var(--accent);
    }
  }

  span {
    font-size: 14px;
    font-weight: normal;
    line-height: 2.14;
    letter-spacing: 5px;
    color: var(--accent);
    position: absolute;
    left: -16px;
    top: -20px;
  }

  a {
    margin: 25px 0 0;
    left: -20px;
  }
`
