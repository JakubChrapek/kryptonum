import React from "react"

import { StyledCopyrightWrapper } from "../../atoms/Footer/StyledCopyrightWrapper"
import { StyledBottomFooterWrapper } from "../../atoms/Footer/StyledBottomFooterWrapper"
import { StyledFooterSectionStyles } from "../../atoms/Footer/StyledFooterSectionStyles"
import { StyledTopFooterWrapper } from "../../atoms/Footer/StyledTopFooterWrapper"
import { StyledFooterWrapper } from "../../atoms/Footer/StyledFooterWrapper"
import { StyledMenuColumnLink } from "../../atoms/Footer/StyledMenuColumnLink"
import { StyledMenuColumnUl } from "../../atoms/Footer/StyledMenuColumnUl"
import { StyledMenuColumnUlP } from "../../atoms/Footer/StyledMenuColumnUlP"
import { StyledInTouchColumn } from "../../molecules/Footer/StyledInTouchColumn"
import { StyledMenuColumn } from "../../molecules/Footer/StyledMenuColumn"
import { StyledRotatedLogo } from "../../atoms/Footer/StyledRotatedLogo"
import { StyledCopyrightWrapperDiv } from "../../atoms/Footer/StyledCopyrightWrapperDiv"
import { StyledCopyrightWrapperDivSpan } from "../../atoms/Footer/StyledCopyrightWrapperDivSpan"

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
    <StyledFooterWrapper>
      <StyledFooterSectionStyles>
        <StyledTopFooterWrapper>
          <StyledRotatedLogo>Kryptonum</StyledRotatedLogo>
          <StyledInTouchColumn>
            <h3>Get in touch!</h3>
            <p>
              Got interested? Have any questions? Or do you want to get straight
              to work? No matter the reason, we can’t wait to hear from you!
            </p>
          </StyledInTouchColumn>
          <StyledMenuColumn>
            {footerNavigation.map(column => (
              <StyledMenuColumnUl key={column.name}>
                <StyledMenuColumnUlP>{column.name}</StyledMenuColumnUlP>
                {column.items.map(item => (
                  <li key={item.name}>
                    <StyledMenuColumnLink to={item.link}>
                      {item.name}
                    </StyledMenuColumnLink>
                  </li>
                ))}
              </StyledMenuColumnUl>
            ))}
          </StyledMenuColumn>
        </StyledTopFooterWrapper>
        <StyledBottomFooterWrapper>
          <StyledCopyrightWrapper>
            <StyledCopyrightWrapperDiv>
              <StyledCopyrightWrapperDivSpan>
                All rights reserved &copy; Kryptonum
              </StyledCopyrightWrapperDivSpan>
            </StyledCopyrightWrapperDiv>
            <StyledCopyrightWrapperDiv>
              <StyledCopyrightWrapperDivSpan>
                Connect with us
              </StyledCopyrightWrapperDivSpan>
              <StyledMenuColumnLink
                copyrightWrapper={true}
                href="https://facebook.com/kryptonum"
                target="_blank"
                rel="noreferrer noopener"
              >
                Facebook
              </StyledMenuColumnLink>
              <StyledMenuColumnLink
                copyrightWrapper={true}
                href="https://instagram.com/kryptonum.studio"
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram
              </StyledMenuColumnLink>
            </StyledCopyrightWrapperDiv>
          </StyledCopyrightWrapper>
        </StyledBottomFooterWrapper>
      </StyledFooterSectionStyles>
    </StyledFooterWrapper>
  )
}

export default Footer
