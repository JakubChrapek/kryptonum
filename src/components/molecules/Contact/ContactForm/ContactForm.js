import React from "react"
import { StyledForm } from "./StyledContactForm"
import { StyledContactLink } from "../../../atoms/Contact/StyledContactLink"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../../contexts/cursorContext"

function ContactForm() {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <div>
      <StyledForm>
        <label>First Name*</label>
        <input
          onMouseEnter={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_TYPE",
              cursorType: CURSOR_TYPES.FULL_CURSOR,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_COLOR",
              cursorColor: CURSOR_COLORS.DARK_TRANSPARENT,
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
              cursorColor: CURSOR_COLORS.DARK,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.SMALLER,
            })
          }}
          type="text"
        />
        <label>Email*</label>
        <input
          onMouseEnter={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_TYPE",
              cursorType: CURSOR_TYPES.FULL_CURSOR,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_COLOR",
              cursorColor: CURSOR_COLORS.DARK_TRANSPARENT,
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
              cursorColor: CURSOR_COLORS.DARK,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.SMALLER,
            })
          }}
          type="text"
        />
        <label>How we can help you?</label>
        <textarea
          onMouseEnter={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_TYPE",
              cursorType: CURSOR_TYPES.FULL_CURSOR,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_COLOR",
              cursorColor: CURSOR_COLORS.DARK_TRANSPARENT,
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
              cursorColor: CURSOR_COLORS.DARK,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.SMALLER,
            })
          }}
          placeholder="Let us know about your project and goals…"
        ></textarea>
        <p>
          By submitting this form I accept the
          <StyledContactLink to="/privacy-policy">
            Privacy Policy
          </StyledContactLink>{" "}
          of this site
        </p>
        <button
          onMouseEnter={() => {
            dispatchCursor({
              type: "CHANGE_CURSOR_TYPE",
              cursorType: CURSOR_TYPES.FULL_CURSOR,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_COLOR",
              cursorColor: CURSOR_COLORS.DARK_TRANSPARENT,
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
              cursorColor: CURSOR_COLORS.DARK,
            })
            dispatchCursor({
              type: "CHANGE_CURSOR_SIZE",
              cursorSize: CURSOR_SIZES.SMALLER,
            })
          }}
          type="submit"
        >
          Send your request
        </button>
      </StyledForm>
    </div>
  )
}

export default ContactForm
