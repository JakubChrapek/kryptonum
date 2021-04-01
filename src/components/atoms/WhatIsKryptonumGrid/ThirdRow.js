import styled from "styled-components"

export const ThirdRow = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: -7%;

  @media (max-width: 767px) {
    justify-content: center;
    padding-bottom: 80px;
  }

  svg {
    width: 42px;
    opacity: 0.2;
    transition: opacity 0.4s cubic-bezier(0.6, -0.05, 0.01, 0.99);
    &:hover {
      opacity: 0.5;
    }
  }
`
