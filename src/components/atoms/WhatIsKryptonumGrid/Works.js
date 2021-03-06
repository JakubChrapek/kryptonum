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
    padding-top: 180px;
  }
  @media only screen and (max-width: 767px) {
    padding-top: 120px;
  }
  span {
    color: var(--accent);
    text-transform: uppercase;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 24px;
  }
  > a {
    margin-bottom: 3rem;
  }
`
