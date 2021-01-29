import styled from "styled-components"

export const StyledQuestionAndAnswerElement = styled.div`
  width: 100%;
  max-width: 600px;
  border-top: solid 1px var(--accent);
  padding: 28px 10px;
  margin: 0 auto;
  > div {
    width: 100%;
    padding-bottom: 8px;
    &:first-child {
      padding-bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
export const StyledQuestion = styled.h4`
  font-family: JetBrainsMono;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  color: var(--black);
  padding-right: 18px;
`
export const StyledAnswer = styled.h5`
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark-bg);
  padding-top: 39px;
`
export const AddIcon = styled.div`
  width: 20px;
  height: 20px;
  transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0)")};
  transition: transform 100ms ease-in-out;
  cursor: pointer;
  @media only screen and (max-width: 563px) {
    margin-right: 43px;
  }
  span {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    &:before {
      content: "";
      width: 2px;
      height: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      background-color: var(--black);
      opacity: ${({ open }) => (open ? "0" : "1")};
      transition: opacity 100ms ease-in-out;
    }
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: var(--black);
    }
  }
`
