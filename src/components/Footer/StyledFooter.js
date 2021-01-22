import { motion } from "framer-motion"
import styled from "styled-components"

export const Wrapper = styled.section`
  background-color: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SectionStyles = styled.div`
  padding: 20px 82px 36px 58px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 520px) {
    padding: 20px 20px 40px 20px;
  }
`

export const TopFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 795px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 520px) {
    align-items: flex-start;
  }
`
export const BottomFooterWrapper = styled.div``

export const InTouchColumn = styled.div`
  > h3,
  > p {
    margin-left: 169px;
    max-width: 270px;
    width: 100%;
    @media (max-width: 1060px) {
      margin-left: 80px;
    }
    @media (max-width: 912px) {
      margin-left: 44px;
    }
    @media (max-width: 857px) {
      margin-left: 0;
      padding: 0 8px;
      max-width: 340px;
    }
  }

  h3 {
    font-family: "Poppins";
    font-size: 42px;
    font-weight: normal;
    line-height: 1.5;
    color: var(--white);
  }

  p {
    margin-top: 40px;
    font-family: "JetBrains Mono";
    font-size: 14px;
    line-height: 2.14;
    letter-spacing: 5px;
    color: var(--white);
  }
`

export const MenuColumn = styled(InTouchColumn)`
  margin-top: 8px;
  display: flex;
  ul {
    display: flex;
    flex-direction: column;
    margin-right: 70px;
    @media (max-width: 1154px) {
      margin-right: 40px;
    }
    @media (max-width: 912px) {
      margin-right: 15px;
    }
    @media (max-width: 795px) {
      margin-top: 18px;
    }
    &:last-child {
      margin-right: 122px;
      @media (max-width: 1154px) {
        margin-right: 80px;
      }
      @media (max-width: 968px) {
        margin-right: 30px;
      }
      @media (max-width: 912px) {
        margin-right: 0;
      }
    }

    li {
      margin-top: 7px;
      &:first-child {
        margin-top: 0;
      }
    }

    p {
      margin-bottom: 24px;
      margin-left: 8px;
      color: var(--text-gray);
      font-family: "Poppins";
      font-size: 15px;
      letter-spacing: normal;
      font-weight: normal;
      line-height: 1.47;
    }

    a {
      color: var(--white);
      text-decoration: none;
      font-family: "Poppins";
      font-size: 15px;
      font-weight: normal;
      line-height: 1.47;
      letter-spacing: normal;
      color: var(--white);
      position: relative;
      padding: 6px 8px;

      &:after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 8px;
        height: 1px;
        background-color: var(--white);
        width: calc(100% - 16px);
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      }

      &:hover,
      &:active,
      &:focus {
        &:after {
          transform: scaleY(1);
        }
      }
    }
  }

  p {
    margin: 0;
    max-width: unset;
  }
`

export const RotatedLogo = styled(motion.h1)`
  font-size: 20px;
  line-height: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--white);
  position: absolute;
  transform: rotate(-90deg);
  left: 0;
  top: 160px;
  @media (max-width: 912px) {
    display: none;
  }
`

export const CopyrightWrapper = styled.div`
  padding: 82px 0 0 57px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 861px) {
    padding: 82px 0 0 0;
  }
  @media (max-width: 795px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 550px) {
    margin: 0 auto;
  }
  div {
    &:first-child {
      @media (max-width: 795px) {
        margin-top: 66px;
        order: 2;
      }
      p {
        font-family: "Poppins";
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5em;
        letter-spacing: normal;
        color: var(--light-gray);
      }
      > span {
        &::after {
          display: none;
        }
      }
    }
    &:last-child {
      @media (max-width: 795px) {
        max-width: 200px;
      }
    }
    span {
      font-family: "Poppins";
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5em;
      letter-spacing: normal;
      color: var(--light-gray);
      letter-spacing: 2px;
      position: relative;
      &::after {
        content: "";
        width: 50px;
        height: 2px;
        margin-left: 9px;
        background-color: var(--accent);
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    a {
      text-decoration: none;
      font-family: "Poppins";
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: 2px;
      text-align: left;
      color: var(--light-gray);
      padding: 0 8px;
      margin-left: 21px;
      position: relative;
      &:nth-child(2) {
        margin-left: 74px;
        @media (max-width: 795px) {
          margin-left: 0;
        }
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 8px;
        height: 1px;
        background-color: var(--light-gray);
        width: calc(100% - 16px);
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      }

      &:hover,
      &:active,
      &:focus {
        &:after {
          transform: scaleY(1);
        }
      }
    }
  }
`
