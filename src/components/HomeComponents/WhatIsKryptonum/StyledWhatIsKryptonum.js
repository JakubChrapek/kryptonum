import styled from "styled-components"

export const SectionStyles = styled.section`
  background-color: var(--black);
`
export const CreativeSection = styled.div`
  background-color: var(--white);
  @media only screen and (max-width: 500px) {
    display: none;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1366px;
  margin: 0 auto;
  @media (max-width: 912px) {
    height: auto;
    padding: 40px 29px 29px 29px;
  }
  h2 {
    grid-column: 7/22;
    grid-row: 5/13;
    color: var(--white);
    font-size: 14px;
    text-transform: uppercase;
    line-height: 76px;
    font-family: "JetBrains Mono";
    letter-spacing: 21px;
  }

  p {
    color: var(--white);
    z-index: 1;
    font-size: 16px;
    line-height: 1.88;
    letter-spacing: 5.71px;
  }
`

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
    font-weight: normal;
    align-self: flex-end;
  }
  h3 {
    text-transform: uppercase;
    font-family: "JetBrains Mono";
    font-size: 16px;
    line-height: 1em;
    margin: 20px 0 0 16px;
  }
  p {
    font-family: "JetBrains Mono";
    font-size: 12px;
    line-height: 1.67;
    letter-spacing: 4.29px;
    color: var(--black);
    margin: 6px 22px 16px 16px;
  }
`

export const Passion = styled(GridItem)`
  max-width: 184px;

  @media (max-width: 912px) {
    display: none;
  }
`

export const Creativity = styled(GridItem)`
  justify-self: flex-end;
  width: 275px;
  margin-right: 10%;
  h3 {
    margin-top: 90px;
  }
  p {
    margin: 10px 61px 70px 16px;
  }
  @media (max-width: 912px) {
    display: none;
  }
`

export const Focus = styled(GridItem)`
  margin: 4% 0 0;
  max-width: 260px;
  @media (max-width: 912px) {
    display: none;
  }
`

export const Works = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 912px) {
    position: relative;
    transform: translate(0, 0);
    left: 0;
    top: 0;
    margin-top: 72px;
    margin-bottom: 91px;
  }
  span {
    color: var(--accent);
    text-transform: uppercase;
    font-size: 8px;
    line-height: 1.5em;
    letter-spacing: 1.33px;
    margin-bottom: 12px;
  }
`

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  padding-left: 9%;
  @media (max-width: 912px) {
    justify-content: center;
    margin: 0 auto;
    padding-left: 0;
  }
`
export const SecondRow = styled.div`
  display: flex;
  width: 100%;
  margin-top: -4%;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 912px) {
    justify-content: center;
    align-items: center;
  }
  > p {
    margin: 12% 0 0 18%;
    max-width: 386px;
    @media (max-width: 912px) {
      max-width: 357px;
      margin: 80px 0 0 0;
    }
  }
  .img-wrapper {
    z-index: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 25%;
    @media (max-width: 912px) {
      display: none;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`

export const ThirdRow = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: -7%;

  @media (max-width: 912px) {
    justify-content: center;
  }
`

export const CreativeRow = styled(ThirdRow)`
  margin-top: 0;
`
