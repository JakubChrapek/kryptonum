import React, { useState } from "react"
import { StyledForm } from "./StyledContactForm"
import { FieldWrapper } from "./FieldWrapper"
import StyledErrorMessage from "./StyledErrorMessage"
import { StyledContactLink } from "../../../atoms/Contact/StyledContactLink"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TEXT,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../../contexts/cursorContext"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { AnimatePresence, motion } from "framer-motion"
import { StructuredText } from "react-datocms"

function ContactForm({
  id,
  contactPageNameLabel,
  contactPageButtonText,
  contactPageNamePlaceholder,
  contactPageEmailLabel,
  contactPageEmailPlaceholder,
  contactPageMessageLabel,
  contactPageMessagePlaceholder,
  contactPagePrivacyText,
}) {
  const [feedback, setFeedback] = useState(null)
  const dispatchCursor = useCursorDispatchContext()
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <div id={id}>
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
              setFeedback(
                "Wielkie dzięki za wiadomość 🤗. Odpiszemy jak najszybciej! 🚀"
              )
              setTimeout(() => {
                actions.resetForm()
                setFeedback(null)
              }, 8000)
            })
            .catch(() => {
              setFeedback("Coś poszło nie tak! Spróbuj jeszcze raz, proszę. 😕")
              setTimeout(() => {
                actions.resetForm()
                setFeedback(null)
              }, 8000)
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
              <label htmlFor="name">{contactPageNameLabel}* </label>
              <Field
                placeholder={
                  contactPageNamePlaceholder.value.document.children[0]
                    .children[0].value
                }
                name="name"
                className={errors.name && "error"}
                onMouseEnter={() => {
                  dispatchCursor({
                    type: "CHANGE_CURSOR_TYPE",
                    cursorType: CURSOR_TYPES.FULL_CURSOR,
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
              <label htmlFor="email">{contactPageEmailLabel}* </label>
              <Field
                placeholder={
                  contactPageEmailPlaceholder.value.document.children[0]
                    .children[0].value
                }
                className={errors.email && "error"}
                name="email"
                onMouseEnter={() => {
                  dispatchCursor({
                    type: "CHANGE_CURSOR_TYPE",
                    cursorType: CURSOR_TYPES.FULL_CURSOR,
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
              <label htmlFor="message">{contactPageMessageLabel}</label>
              <Field
                name="message"
                component="textarea"
                onMouseEnter={() => {
                  dispatchCursor({
                    type: "CHANGE_CURSOR_TYPE",
                    cursorType: CURSOR_TYPES.FULL_CURSOR,
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
                    type: "CHANGE_CURSOR_SIZE",
                    cursorSize: CURSOR_SIZES.SMALLER,
                  })
                }}
                placeholder={
                  contactPageMessagePlaceholder.value.document.children[0]
                    .children[0].value
                }
              />
            </FieldWrapper>
            <FieldWrapper variant="checkbox">
              <label>
                <Field type="checkbox" name="acceptance" />
                <StructuredText data={contactPagePrivacyText} />
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
                  cursorType: CURSOR_TYPES.TRANSPARENT_TEXT,
                })
                dispatchCursor({
                  type: "CHANGE_CURSOR_SIZE",
                  cursorSize: CURSOR_SIZES.HUGE,
                })
                dispatchCursor({
                  type: "CHANGE_CURSOR_TEXT",
                  cursorText: CURSOR_TEXT.COLLAPSE,
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
              type="submit"
            >
              <StructuredText data={contactPageButtonText} />
            </button>
            <AnimatePresence>
              {feedback && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, y: 6, transition: { duration: 0.1 } }}
                  key="feedback-msg"
                >
                  {feedback}
                </motion.p>
              )}
            </AnimatePresence>
          </StyledForm>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
