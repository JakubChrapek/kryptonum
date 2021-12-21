import styled from "styled-components"

export const SecondRow = styled.div`
  display: flex;
  width: 100%;
  margin-top: -4%;
  @media only screen and (max-width: 1142px) {
    margin-top: -7%;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 4rem;
  }
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  @media only screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
  > p,
  > ul {
    margin: 12% 0 0 13%;
    z-index: 1;
    max-width: 284px;
    color: var(--white);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0;
    @media only screen and (max-width: 1261px) {
      margin: 12% 0 0 12%;
    }
    @media only screen and (max-width: 1142px) {
      margin: 12% 0 0 6%;
    }
    @media only screen and (max-width: 1035px) {
      margin: 12% 0 0 6%;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 50%;
      margin: 6rem 0 0 6%;
    }
    @media only screen and (max-width: 767px) {
      max-width: 35.6rem;
      margin: 4rem 0 0;
      font-size: 20px;
      line-height: 1.81;
    }
    @media only screen and (max-width: 540px) {
      margin: 2rem 0 0;
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
    width: 50%;
    transform: translateX(-50%);
    left: 60%;
    top: 35%;
    @media only screen and (max-width: 1142px) {
      width: 35%;
    }
    @media only screen and (max-width: 1024px) {
      display: none;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`
