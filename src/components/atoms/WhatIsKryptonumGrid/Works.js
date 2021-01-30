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
