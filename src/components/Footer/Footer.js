import { Link } from "gatsby"
import React from "react"

import {
  Wrapper,
  SectionStyles,
  InTouchColumn,
  MenuColumn,
  RotatedLogo,
  CopyrightWrapper,
  BottomFooterWrapper,
  TopFooterWrapper,
} from "./StyledFooter"

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
        <TopFooterWrapper>
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
        </TopFooterWrapper>
        <BottomFooterWrapper>
          <CopyrightWrapper>
            <div>
              <p>All rights reserved &copy; Kryptonum</p>
            </div>
            <div>
              <span>Connect with us</span>
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
        </BottomFooterWrapper>
      </SectionStyles>
    </Wrapper>
  )
}

export default Footer
