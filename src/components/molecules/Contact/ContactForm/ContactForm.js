import React from "react"
import { StyledForm } from "./StyledContactForm"
import { FieldWrapper } from "./FieldWrapper"
import StyledErrorMessage from "./StyledErrorMessage"
import { StyledContactLink } from "../../../atoms/Contact/StyledContactLink"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../../contexts/cursorContext"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { AnimatePresence, motion } from "framer-motion"

function ContactForm() {
  const dispatchCursor = useCursorDispatchContext()
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          acceptance: false,
        }}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...values }),
          })
            .then(() => {
              alert("Success")
              actions.resetForm()
            })
            .catch(() => {
              alert("Error")
            })
            .finally(() => actions.setSubmitting(false))
        }}
        validate={values => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          const errors = {}
          if (!values.name) {
            errors.name = "Podaj imię"
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Podaj email"
          }
          if (!values.acceptance) {
            errors.acceptance =
              "Do wysłania konieczna jest zgoda z naszą Polityką Prywatności"
          }
          return errors
        }}
      >
        {({ errors }) => (
          <StyledForm name="contact-form" data-netlify={true}>
            <FieldWrapper>
              <label htmlFor="name">Name* </label>
              <Field
                placeholder="What is your name?"
                name="name"
                className={errors.name && "error"}
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
              <AnimatePresence>
                {errors.name && (
                  <StyledErrorMessage name="name">
                    <ErrorMessage name="name" component="span" />
                  </StyledErrorMessage>
                )}
              </AnimatePresence>
            </FieldWrapper>

            <FieldWrapper>
              <label htmlFor="email">Email* </label>
              <Field
                placeholder="youremail@gmail.com"
                className={errors.email && "error"}
                name="email"
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
                type="email"
              />
              <AnimatePresence>
                {errors.email && (
                  <StyledErrorMessage name="email">
                    <ErrorMessage name="email" component="span" />
                  </StyledErrorMessage>
                )}
              </AnimatePresence>
            </FieldWrapper>

            <FieldWrapper>
              <label htmlFor="message">Message: </label>
              <Field
                name="message"
                component="textarea"
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
              />
            </FieldWrapper>
            <FieldWrapper variant="checkbox">
              <label>
                <Field type="checkbox" name="acceptance" />
                <p>
                  By submitting this form I accept the
                  <StyledContactLink
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
                        cursorColor: CURSOR_COLORS.DARK,
                      })
                      dispatchCursor({
                        type: "CHANGE_CURSOR_SIZE",
                        cursorSize: CURSOR_SIZES.SMALLER,
                      })
                    }}
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </StyledContactLink>{" "}
                  of this site
                </p>
              </label>
              <AnimatePresence>
                {errors.acceptance && (
                  <StyledErrorMessage name="acceptance">
                    <ErrorMessage name="acceptance" component="span" />
                  </StyledErrorMessage>
                )}
              </AnimatePresence>
            </FieldWrapper>
            <button
              type="submit"
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
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
