import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  background-color: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 82px 36px 58px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  position: relative;
`

const InTouchColumn = styled.div`
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

const MenuColumn = styled(InTouchColumn)`
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

const RotatedLogo = styled(motion.h1)`
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

const CopyrightWrapper = styled.div`
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

const GreenLine = styled.span`
  width: 50px;
  height: 2px;
  margin-left: 9px;
  background-color: var(--accent);
  display: inline-block;
`

const Footer = () => {
  const footerNavigation = [
    {
      name: "Explore",
      items: [
        {
          name: "UI Design",
          link: "/services#design",
        },
        {
          name: "Development",
          link: "/services#development",
        },
        {
          name: "Marketing",
          link: "/services#marketing",
        },
      ],
    },
    {
      name: "Learn",
      items: [
        {
          name: "Projects",
          link: "/projects",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Blog",
          link: "/blog",
        },
      ],
    },
    {
      name: "Studio",
      items: [
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "FAQ",
          link: "/faq",
        },
        {
          name: "Privacy policy",
          link: "/privacy-policy",
        },
      ],
    },
  ]
  return (
    <Wrapper>
      <SectionStyles>
        <RotatedLogo>Kryptonum</RotatedLogo>
        <InTouchColumn>
          <h3>Get in touch!</h3>
          <p>
            Got interested? Have any questions? Or do you want to get straight
            to work? No matter the reason, we can’t wait to hear from you!
          </p>
        </InTouchColumn>
        <MenuColumn>
          {footerNavigation.map(column => (
            <ul key={column.name}>
              <p>{column.name}</p>
              {column.items.map(item => (
                <li key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          ))}
        </MenuColumn>
        <CopyrightWrapper>
          <span>All rights reserved &copy; Kryptonum</span>
          <div>
            <span>Connect with us</span>
            <GreenLine />
            <a
              href="https://facebook.com/kryptonum"
              target="_blank"
              rel="noreferrer noopener"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/kryptonum.studio"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>
          </div>
        </CopyrightWrapper>
      </SectionStyles>
    </Wrapper>
  )
}

export default Footer
