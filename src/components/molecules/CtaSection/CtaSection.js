import React, { useRef, useState, useEffect } from "react"
import SplitText from "../../../utils/split3.min.js"
import gsap from "gsap"
import cn from "classnames"

import { StructuredText } from "react-datocms"
import { SectionStyles } from "../../atoms/CtaSection/StyledCtaSection"
import { Wrapper } from "../../atoms/CtaSection/StyledCtaWrapper"
import { StyledCtaH2 } from "../../atoms/CtaSection/StyledCtaH2"
import { StyledCtaLink } from "../../atoms/CtaSection/StyledCtaLink"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TEXT,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import useOnScreen from "../../../utils/useOnScreen"

const CtaSection = ({
  createAWebsiteTogetherCTA,
  createAWebsiteTogetherButtonText,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  const ref = useRef(null)

  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(ref)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if (reveal) {
      const dur = 1
      const split = new SplitText(".service--parent mark", { type: "lines" })
      for (let i = 0; i < split.lines.length; i++) {
        let tl = gsap.timeline({
          delay: i * dur * 2,
          repeat: -1,
          repeatDelay: dur,
        })
        tl.fromTo(split.lines[i], dur, { autoAlpha: 0 }, { autoAlpha: 0.2 })
        tl.to(split.lines[i], dur, { autoAlpha: 1, y: -120 }, "+=" + dur)
        tl.to(split.lines[i], dur, { y: -240, autoAlpha: 1 }, "+=" + dur)
        tl.to(split.lines[i], dur, { autoAlpha: 0, y: -360 }, "+=" + dur)
      }
    }
  }, [reveal])

  return (
    <Wrapper
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
    >
      <SectionStyles ref={ref}>
        <StyledCtaH2
          fontSize="70px"
          lineHeight="1.38"
          letterSpacing="-1.75px"
          color="var(--white)"
        >
          Stwórzmy razem{" "}
          <div className="service--parent">
            <mark>markę</mark>
            <mark>stronę</mark>
            <mark>animację</mark>
            <mark>strategię</mark>
          </div>
          <br />
          która wywala z butów!
        </StyledCtaH2>
        <StyledCtaLink
          onMouseEnter={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_TYPE",
              cursorType: CURSOR_TYPES.TRANSPARENT_TEXT,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.HUGE,
            })
          }}
          onMouseLeave={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_TYPE",
              cursorType: CURSOR_TYPES.FULL_CURSOR,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.SMALLER,
            })
          }}
          to="/kontakt"
          className="btn btn__small btn__light"
        >
          {createAWebsiteTogetherButtonText}
        </StyledCtaLink>
      </SectionStyles>
    </Wrapper>
  )
}

export default CtaSection
