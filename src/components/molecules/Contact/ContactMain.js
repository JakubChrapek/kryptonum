import React from "react"

import ContactForm from "./ContactForm/ContactForm"

import { StyledContactFormWrapper } from "../../atoms/Contact/StyledContactFormWrapper"
import { StyledContactFormWrapperDiv } from "../../atoms/Contact/StyledContactFormWrapperDiv"
import { StyledContactInfo } from "../../atoms/Contact/StyledContactInfo"
import { StyledContactInfoList } from "../../atoms/Contact/StyledContactInfoList"
import { StyledContactSection } from "../../atoms/Contact/StyledContactSection"
import { StyledContactTextWrapper } from "../../atoms/Contact/StyledContactTextWrapper"
import { StyledContactTextWrapperH1 } from "../../atoms/Contact/StyledContactTextWrapperH1"
import { TextStyles } from "../../atoms/Text/Text"

import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import styled from "styled-components"

const StyledLink = styled.a`
  color: #727272;
  text-decoration: none;
  font-family: "Poppins";
  font-weight: normal;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 1px;
    background-color: #727272;
    width: 100%;
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

  &:focus {
    outline-offset: 2px;
    outline: 2px solid #727272;
  }
`

const ContactMain = () => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <StyledContactSection>
      <StyledContactTextWrapper
        onPointerEnter={() => {
          dispatchCursor({
            type: "CHANGE_CURSOR_TYPE",
            cursorType: CURSOR_TYPES.FULL_CURSOR,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_COLOR",
            cursorColor: CURSOR_COLORS.DARK,
          })
          dispatchCursor({
            type: "CHANGE_CURSOR_SIZE",
            cursorSize: CURSOR_SIZES.SMALLER,
          })
        }}
      >
        <StyledContactTextWrapperH1
          fontFamily="Poppins"
          fontSize="76px"
          lineHeight="1.3"
          color="var(--black)"
        >
          Let’s start something <br /> Great together
        </StyledContactTextWrapperH1>
      </StyledContactTextWrapper>
      <StyledContactFormWrapper>
        <StyledContactFormWrapperDiv>
          <ContactForm />
          <StyledContactInfo>
            <TextStyles
              declaredPadding="0 0 36px 0"
              fontFamily="JetBrains Mono"
              fontSize="16px"
              lineHeight="1.38"
              color="var(--dark-bg)"
            >
              If you want to talk about design:
            </TextStyles>
            <StyledContactInfoList>
              <li>Michał</li>
              <li>
                <StyledLink
                  onPointerEnter={() => {
                    dispatchCursor({
                      type: "CHANGE_CURSOR_TYPE",
                      cursorType: CURSOR_TYPES.FULL_CURSOR,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_COLOR",
                      cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_SIZE",
                      cursorSize: CURSOR_SIZES.DEFAULT,
                    })
                  }}
                  onPointerLeave={() => {
                    dispatchCursor({
                      type: "CHANGE_CURSOR_TYPE",
                      cursorType: CURSOR_TYPES.FULL_CURSOR,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_COLOR",
                      cursorColor: CURSOR_COLORS.DARK,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_SIZE",
                      cursorSize: CURSOR_SIZES.SMALLER,
                    })
                  }}
                  href="tel:+48883736548"
                >
                  +48 883 73 658
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="mailto:kuba@kryptonumstudio.com"
                  onPointerEnter={() => {
                    dispatchCursor({
                      type: "CHANGE_CURSOR_TYPE",
                      cursorType: CURSOR_TYPES.FULL_CURSOR,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_COLOR",
                      cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_SIZE",
                      cursorSize: CURSOR_SIZES.DEFAULT,
                    })
                  }}
                  onPointerLeave={() => {
                    dispatchCursor({
                      type: "CHANGE_CURSOR_TYPE",
                      cursorType: CURSOR_TYPES.FULL_CURSOR,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_COLOR",
                      cursorColor: CURSOR_COLORS.DARK,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_SIZE",
                      cursorSize: CURSOR_SIZES.SMALLER,
                    })
                  }}
                >
                  kuba@kryptonumstudio.com
                </StyledLink>
              </li>
            </StyledContactInfoList>

            <TextStyles
              declaredPadding="0 0 36px 0"
              fontFamily="JetBrains Mono"
              fontSize="16px"
              lineHeight="1.38"
              color="var(--dark-bg)"
            >
              Or about how the internet works
            </TextStyles>
            <StyledContactInfoList>
              <li>Jacob</li>
              <StyledLink
                onPointerEnter={() => {
                  dispatchCursor({
                    type: "CHANGE_CURSOR_TYPE",
                    cursorType: CURSOR_TYPES.FULL_CURSOR,
                  })
                  dispatchCursor({
                    type: "CHANGE_CURSOR_COLOR",
                    cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
                  })
                  dispatchCursor({
                    type: "CHANGE_CURSOR_SIZE",
                    cursorSize: CURSOR_SIZES.DEFAULT,
                  })
                }}
                onPointerLeave={() => {
                  dispatchCursor({
                    type: "CHANGE_CURSOR_TYPE",
                    cursorType: CURSOR_TYPES.FULL_CURSOR,
                  })
                  dispatchCursor({
                    type: "CHANGE_CURSOR_COLOR",
                    cursorColor: CURSOR_COLORS.DARK,
                  })
                  dispatchCursor({
                    type: "CHANGE_CURSOR_SIZE",
                    cursorSize: CURSOR_SIZES.SMALLER,
                  })
                }}
                href="tel:+48883736548"
              >
                +48 883 73 658
              </StyledLink>
              <li>
                <StyledLink
                  onPointerEnter={() => {
                    dispatchCursor({
                      type: "CHANGE_CURSOR_TYPE",
                      cursorType: CURSOR_TYPES.FULL_CURSOR,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_COLOR",
                      cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_SIZE",
                      cursorSize: CURSOR_SIZES.DEFAULT,
                    })
                  }}
                  onPointerLeave={() => {
                    dispatchCursor({
                      type: "CHANGE_CURSOR_TYPE",
                      cursorType: CURSOR_TYPES.FULL_CURSOR,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_COLOR",
                      cursorColor: CURSOR_COLORS.DARK,
                    })
                    dispatchCursor({
                      type: "CHANGE_CURSOR_SIZE",
                      cursorSize: CURSOR_SIZES.SMALLER,
                    })
                  }}
                  href="mailto:kuba@kryptonumstudio.com"
                >
                  kuba@kryptonumstudio.com
                </StyledLink>
              </li>
            </StyledContactInfoList>

            <TextStyles
              declaredPadding="0 0 36px 0"
              fontFamily="JetBrains Mono"
              fontSize="16px"
              lineHeight="1.38"
              color="var(--dark-bg)"
            >
              You can find us here, but rarely 😉
            </TextStyles>
            <StyledContactInfoList>
              <li>Aleja Komisji Edukacji Narodowej</li>
              <li>Warsaw</li>
            </StyledContactInfoList>
          </StyledContactInfo>
        </StyledContactFormWrapperDiv>
      </StyledContactFormWrapper>
    </StyledContactSection>
  )
}

export default ContactMain
