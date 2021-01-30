import styled from "styled-components"

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
