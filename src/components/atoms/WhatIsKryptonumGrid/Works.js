import styled from "styled-components"

export const Works = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1111px) {
    padding-top: 88px;
  }
  @media only screen and (max-width: 912px) {
    position: relative;
    transform: translate(0, 0);
    left: 0;
    top: 0;
    margin-bottom: 62px;
  }
  @media only screen and (max-width: 893px) {
    margin-bottom: 28px;
    padding-top: 120px;
  }
  @media only screen and (max-width: 797px) {
    padding-top: 78px;
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
