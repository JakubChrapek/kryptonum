import React from "react"
import { StructuredText } from "react-datocms"

import { graphql, useStaticQuery } from "gatsby"
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

import { TextStyles } from "../../atoms/Text/Text"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      datoCmsStopka {
        stopkaTytul
        stopkaAkapit {
          value
        }
        tytulPierwszejKolumnyLinkow
        linkiWPierwszejKolumnie {
          linkNazwa
          linkSlug
        }
        tytulDrugiejKolumnyLinkow
        linkiWDrugiejKolumnie {
          linkSlug
          linkNazwa
        }
        tytulTrzeciejKolumnyLinkow
        linkiWTrzeciejKolumnie {
          linkNazwa
          linkSlug
        }
        stopkaTekstZastrzeEniePraw {
          value
        }
        stopkaTekstCtaDoSociali {
          value
        }
      }
    }
  `)

  const [footerTitle, footerParagraph] = [
    data.datoCmsStopka.stopkaTytul,
    data.datoCmsStopka.stopkaAkapit,
  ]

  const {
    tytulPierwszejKolumnyLinkow: firstColumnTitle,
    tytulDrugiejKolumnyLinkow: secondColumnTitle,
    tytulTrzeciejKolumnyLinkow: thirdColumnTitle,
    linkiWPierwszejKolumnie: firstColumnLinks,
    linkiWDrugiejKolumnie: secondColumnLinks,
    linkiWTrzeciejKolumnie: thirdColumnLinks,
    stopkaTekstZastrzeEniePraw: copyText,
    stopkaTekstCtaDoSociali: socialText,
  } = data.datoCmsStopka

  const dispatchCursor = useCursorDispatchContext()

  const tmpNavigation = [
    {
      name: firstColumnTitle,
      items: firstColumnLinks.map(link => ({
        name: link.linkNazwa,
        link: link.linkSlug,
      })),
    },
    {
      name: secondColumnTitle,
      items: secondColumnLinks.map(link => ({
        name: link.linkNazwa,
        link: link.linkSlug,
      })),
    },
    {
      name: thirdColumnTitle,
      items: thirdColumnLinks.map(link => ({
        name: link.linkNazwa,
        link: link.linkSlug,
      })),
    },
  ]

  return (
    <StyledFooterWrapper
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_COLOR",
          cursorColor: CURSOR_COLORS.LIGHT,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
    >
      <StyledFooterSectionStyles>
        <StyledTopFooterWrapper>
          <StyledRotatedLogo
            onMouseEnter={() => {
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
            onMouseLeave={() => {
              dispatchCursor({
                type: "CHANGE_CURSOR_TYPE",
                cursorType: CURSOR_TYPES.FULL_CURSOR,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_COLOR",
                cursorColor: CURSOR_COLORS.LIGHT,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_SIZE",
                cursorSize: CURSOR_SIZES.SMALLER,
              })
            }}
            to="/"
          >
            Kryptonum
          </StyledRotatedLogo>
          <StyledInTouchColumn>
            <TextStyles
              fontFamily="Poppins"
              fontSize="42px"
              declaredDisplay="block"
              color="var(--white)"
              lineHeight="1.5"
            >
              {footerTitle}
            </TextStyles>
            <TextStyles
              fontFamily="JetBrains Mono"
              declaredMargin="40px 0 0 0"
              declaredDisplay="block"
              fontSize="14px"
              letterSpacing="5px"
              color="var(--white)"
              lineHeight="2.14"
            >
              <StructuredText data={footerParagraph.value} />
            </TextStyles>
          </StyledInTouchColumn>
          <StyledMenuColumn>
            {tmpNavigation.map(column => (
              <StyledMenuColumnUl key={column.name}>
                <StyledMenuColumnUlP
                  color="var(--text-gray)"
                  fontFamily="Poppins"
                  fontSize="15px"
                  lineHeight="1.47"
                  declaredpadding="0 8px 39px 8px"
                >
                  {column.name}
                </StyledMenuColumnUlP>
                {column.items.map(item => (
                  <li key={item.name}>
                    <StyledMenuColumnLink
                      onMouseEnter={() => {
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
                      onMouseLeave={() => {
                        dispatchCursor({
                          type: "CHANGE_CURSOR_TYPE",
                          cursorType: CURSOR_TYPES.FULL_CURSOR,
                        })
                        dispatchCursor({
                          type: "CHANGE_CURSOR_COLOR",
                          cursorColor: CURSOR_COLORS.LIGHT,
                        })
                        dispatchCursor({
                          type: "CHANGE_CURSOR_SIZE",
                          cursorSize: CURSOR_SIZES.SMALLER,
                        })
                      }}
                      to={item.link}
                    >
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
              <StyledCopyrightWrapperDivSpan
                fontSize="12px"
                fontFamily="Poppins"
                lineHeight="1.5em"
                color="var(--light-gray)"
                letterSpacing="2px"
              >
                <StructuredText data={copyText.value} /> &copy; Kryptonum
              </StyledCopyrightWrapperDivSpan>
            </StyledCopyrightWrapperDiv>
            <StyledCopyrightWrapperDiv>
              <StyledCopyrightWrapperDivSpan
                fontSize="12px"
                fontFamily="Poppins"
                lineHeight="1.5em"
                color="var(--light-gray)"
                letterSpacing="2px"
                className="withAfter"
              >
                <StructuredText data={socialText.value} />
              </StyledCopyrightWrapperDivSpan>
              <StyledMenuColumnLink
                copyrightWrapper={true}
                href="https://facebook.com/kryptonum"
                target="_blank"
                rel="noreferrer noopener"
                facebook={true}
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
                    cursorColor: CURSOR_COLORS.LIGHT,
                  })
                  dispatchCursor({
                    type: "CHANGE_CURSOR_SIZE",
                    cursorSize: CURSOR_SIZES.SMALLER,
                  })
                }}
              >
                Facebook
              </StyledMenuColumnLink>
              <StyledMenuColumnLink
                copyrightWrapper={true}
                href="https://instagram.com/kryptonum.studio"
                target="_blank"
                rel="noreferrer noopener"
                instagram={true}
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
                    cursorColor: CURSOR_COLORS.LIGHT,
                  })
                  dispatchCursor({
                    type: "CHANGE_CURSOR_SIZE",
                    cursorSize: CURSOR_SIZES.SMALLER,
                  })
                }}
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
