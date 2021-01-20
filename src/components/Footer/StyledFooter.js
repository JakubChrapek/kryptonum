import { motion } from "framer-motion"
import styled from "styled-components"

export const Wrapper = styled.section`
  background-color: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SectionStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 82px 36px 58px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  position: relative;
`
export const InTouchColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h3,
  p {
    margin-left: 169px;
    max-width: 270px;
    width: 100%;
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
  flex: 1;
  flex-direction: row;
  margin-top: 8px;
  ul {
    display: flex;
    flex-direction: column;
    margin-right: 70px;
    &:last-child {
      margin-right: 0;
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
`
export const CopyrightWrapper = styled.div`
  padding: 82px 0 0px 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  span {
    font-family: "Poppins";
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5em;
    letter-spacing: normal;
    color: var(--light-gray);
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      letter-spacing: 2px;
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
      padding: 6px 8px;
      margin-left: 21px;
      position: relative;

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
export const GreenLine = styled.span`
  width: 50px;
  height: 2px;
  margin-left: 9px;
  background-color: var(--accent);
  display: inline-block;
`
