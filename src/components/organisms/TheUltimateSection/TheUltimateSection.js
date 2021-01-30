import { useStaticQuery } from "gatsby"
import React, { useRef, useState } from "react"
import Img from "gatsby-image"
import { useLocation } from "@reach/router"
import * as qs from "query-string"
import axios from "axios"
import { AnimatePresence, motion } from "framer-motion"

import { StyledEbookColumn } from "../../molecules/StyledContentColumnForm/StyledEbookColumn"
import { StyledUltimateSectionWrapper } from "../../atoms/TheUltimateSection/StyledUltimateSectionWrapper"
import { StyledUltimateSectionStyles } from "../../atoms/TheUltimateSection/StyledUltimateSectionStyles"
import { StyledContentColumn } from "../../atoms/TheUltimateSection/StyledContentColumn"
import { StyledContentColumnH2 } from "../../atoms/TheUltimateSection/StyledContentColumnH2"
import { StyledContentColumnSpan } from "../../atoms/TheUltimateSection/StyledContentColumnSpan"
import { StyledContentColumnForm } from "../../molecules/StyledContentColumnForm/StyledContentColumnForm"

const theUltimateSectionQuery = graphql`
  query ultimateImage {
    datoCmsPageHome {
      theUltimateContentChecklistImage {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

const TheUltimateSection = () => {
  const {
    datoCmsPageHome: { theUltimateContentChecklistImage },
  } = useStaticQuery(theUltimateSectionQuery)
  const [inputValue, setInputValue] = useState("")
  const formRef = useRef()
  const inputRef = useRef()
  const location = useLocation()
  const [feedbackMsg, setFeedbackMsg] = useState("")
  const [error, setError] = useState(false)

  const handleInput = e => {
    e.preventDefault()
    setInputValue(e.target.value)
    setFeedbackMsg("")
    if (inputValue.length === 0) {
      setError(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setError(false)
    if (inputValue.length === 0) {
      setError(true)
      setFeedbackMsg("Enter your email, please.")
      inputRef.current.focus()
    } else {
      let formData = { email: inputValue }

      const axiosOptions = {
        url: location.pathname,
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formData),
      }

      axios(axiosOptions)
        .then(response => {
          setFeedbackMsg("Form submitted successfully! 🚀")
          setError(false)
          formRef.current.reset()
        })
        .catch(err => {
          setFeedbackMsg("Form could not be submitted. 😬")
          setError(true)
        })
    }
  }

  return (
    <StyledUltimateSectionWrapper>
      <StyledUltimateSectionStyles>
        <StyledContentColumn>
          <StyledContentColumnSpan>Handbook for you</StyledContentColumnSpan>
          <StyledContentColumnH2>
            The ultimate content checklist.
          </StyledContentColumnH2>
          <p>
            Curious about what to look out for in 2021 to stay relevant in the
            online space? We combined all the useful tips to help you out.
          </p>
          <StyledContentColumnForm
            ref={formRef}
            name="Kryptonum homepage Ultimate Content Checklist"
            method="POST"
            data-netlify="true"
            onSubmit={event => handleSubmit(event)}
          >
            <input
              type="hidden"
              name="Kryptonum homepage Ultimate Content Checklist"
              value="Contact Form"
            />
            <AnimatePresence exitBeforeEnter>
              {inputValue.length > 0 && (
                <motion.label
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  htmlFor="email"
                >
                  Your e-mail here
                </motion.label>
              )}
            </AnimatePresence>
            <input
              ref={inputRef}
              type="email"
              name="email"
              id="email"
              placeholder="Your e-mail here"
              value={inputValue}
              onChange={handleInput}
              className={error ? "error" : ""}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a copy
            </motion.button>
            <AnimatePresence>
              {feedbackMsg && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={error ? "error" : ""}
                >
                  {feedbackMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </StyledContentColumnForm>
        </StyledContentColumn>
        <StyledEbookColumn>
          <Img fluid={theUltimateContentChecklistImage.fluid} />
        </StyledEbookColumn>
      </StyledUltimateSectionStyles>
    </StyledUltimateSectionWrapper>
  )
}

export default TheUltimateSection
