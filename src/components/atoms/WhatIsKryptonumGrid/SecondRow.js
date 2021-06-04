import styled from "styled-components"

export const SecondRow = styled.div`
  display: flex;
  width: 100%;
  margin-top: -4%;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  @media only screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
  > p,
  > ul {
    margin: 12% 0 0 18%;
    z-index: 1;
    max-width: 386px;
    color: var(--white);
    @media only screen and (max-width: 1261px) {
      margin: 12% 0 0 12%;
    }
    @media only screen and (max-width: 1035px) {
      margin: 12% 0 0 18%;
      font-size: 14px;
    }
    @media only screen and (max-width: 871px) {
      margin: 12% 0 0 14%;
    }
    @media only screen and (max-width: 767px) {
      max-width: 357px;
      margin: 8rem 0 0;
    }
    @media only screen and (max-width: 540px) {
      margin: 7.2rem 0 0;
    }
  }

  > ul {
    margin-top: 2rem;
    p {
      font-size: 1em;
    }
  }
  .img-wrapper {
    z-index: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 22%;
    filter: brightness(0.7);
    @media only screen and (max-width: 767px) {
      display: none;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`
