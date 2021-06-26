import React from "react"
import { Link as ScrollLink } from "react-scroll"
import { StructuredText } from "react-datocms"
import { SectionStyles } from "../../atoms/WhatIsKryptonumGrid/SectionStyles"
import { CreativeSection } from "../../atoms/WhatIsKryptonumGrid/CreativeSection"
import { WhatIsKryptonumWrapper } from "../../atoms/WhatIsKryptonumGrid/WhatIsKryptonumWrapper"
import { Passion } from "../../atoms/WhatIsKryptonumGrid/Passion"
import { Creativity } from "../../atoms/WhatIsKryptonumGrid/Creativity"
import { Focus } from "../../atoms/WhatIsKryptonumGrid/Focus"
import { Works } from "../../atoms/WhatIsKryptonumGrid/Works"
import { FirstRow } from "../../atoms/WhatIsKryptonumGrid/FirstRow"
import { SecondRow } from "../../atoms/WhatIsKryptonumGrid/SecondRow"
import { ThirdRow } from "../../atoms/WhatIsKryptonumGrid/ThirdRow"
import { CreativeRow } from "../../atoms/WhatIsKryptonumGrid/CreativeRow"
import useWindowSize from "../../../utils/getWindowSize"
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
  CURSOR_SIZES,
} from "../../../contexts/cursorContext"
import { DownArrow } from "../../atoms/Icons/arrows"
import tmp from "../../../images/hero-bg.jpeg"
import {
  WhatIsKryptonumTitle,
  WhatIsKryptonumTitleStyles,
} from "./WhatIsKryptonumTitleStyles"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const WhatIsKryptonum = ({
  whatIsKryptonumTitle,
  whatIsKryptonumParagraph,
  passionTitle,
  passionContent,
  focusTitle,
  focusContent,
  creativityTitle,
  creativityContent,
  image,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  const width = useWindowSize()
  return (
    <>
      <SectionStyles
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
        onMouseLeave={() => {
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
        <WhatIsKryptonumWrapper>
          <FirstRow>
            <WhatIsKryptonumTitleStyles>
              <WhatIsKryptonumTitle data={whatIsKryptonumTitle} />
            </WhatIsKryptonumTitleStyles>
            <Passion>
              <span>{creativityTitle?.substring(0, 2)}</span>
              <div>
                <h3>{creativityTitle}</h3>
                <p>{creativityContent}</p>
              </div>
            </Passion>
          </FirstRow>
          <SecondRow>
            <StructuredText data={whatIsKryptonumParagraph} />
            <div className="img-wrapper">
              <GatsbyImage image={image} />
            </div>
            <Focus>
              <span>{focusTitle?.substring(0, 2)}</span>
              <div>
                <h3>{focusTitle}</h3>
                <p>{focusContent}</p>
              </div>
            </Focus>
          </SecondRow>
          <ThirdRow>
            <Works>
              <span>Projekty</span>
              <ScrollLink
                activeClass="active"
                to="featuredProjects"
                spy={true}
                offset={width <= 767 ? 0 : -122}
                smooth={true}
                duration={800}
                style={{ cursor: "pointer" }}
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
                    cursorSize: CURSOR_SIZES.BIGGER,
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
              >
                <DownArrow />
              </ScrollLink>
            </Works>
            <Creativity hasDeclaredTransform={true}>
              <span>{passionTitle?.substring(0, 2)}</span>
            </Creativity>
          </ThirdRow>
        </WhatIsKryptonumWrapper>
      </SectionStyles>
      <CreativeSection
        onMouseOver={() => {
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
        <WhatIsKryptonumWrapper>
          <CreativeRow>
            <Creativity bottomSection hasDeclaredTransform={false}>
              <div>
                <h3>{passionTitle}</h3>
                <p>{passionContent}</p>
              </div>
            </Creativity>
          </CreativeRow>
        </WhatIsKryptonumWrapper>
      </CreativeSection>
    </>
  )
}

export default WhatIsKryptonum
