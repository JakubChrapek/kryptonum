import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 90%;
  max-width: 1010px;
  margin-top: 12%;

  @media (max-width: 683px) {
    width: unset;
    margin-top: 0;
  }
  span {
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
`
