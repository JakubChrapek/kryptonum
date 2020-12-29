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
  padding: 20px 82px 36px 58px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
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
  ul {
    display: flex;
    flex-direction: column;
    margin-right: 70px;
    &:last-child {
      margin-right: 0;
    }

    li {
      margin-top: 9px;
      &:first-child {
        margin-top: 0;
      }
    }

    p {
      margin-bottom: 32px;
      color: var(--text-gray);
    }

    a {
      color: var(--white);
      text-decoration: none;
    }
  }

  p {
    margin: 0;
    max-width: unset;
  }
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
        <InTouchColumn>
          <h3>Get in touch!</h3>
          <p>
            Got interested? Have any questions? Or do you want to get straight
            to work? No matter the reason, we can’t wait to hear from you!
          </p>
        </InTouchColumn>
        <MenuColumn>
          {footerNavigation.map(column => (
            <ul>
              <p>{column.name}</p>
              {column.items.map(item => (
                <li>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          ))}
        </MenuColumn>
      </SectionStyles>
    </Wrapper>
  )
}

export default Footer
