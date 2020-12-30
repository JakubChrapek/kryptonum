import { Link, useStaticQuery } from "gatsby"
import React, { useRef, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useLocation } from "@reach/router"
import * as qs from "query-string"
import axios from "axios"
import { AnimatePresence, motion } from "framer-motion"

const Wrapper = styled.section`
  background-color: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionStyles = styled.div`
  display: flex;
  padding: 113px 108px 83px 138px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 102px 114px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 102px 90px;
  }

  h2 {
    font-family: "Poppins";
    font-size: 62px;
    font-weight: normal;
    line-height: 1.31em;
    letter-spacing: normal;
    color: var(--white);
  }
  a {
    margin: 48px 0 0;
    display: inline-block;
    button {
      min-width: 290px;
    }
  }
`

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-right: 40px;
  span {
    justify-self: flex-start;
    color: var(--black);
    font-size: 14px;
    line-height: 1.58em;
    padding: 4px 17px;
    width: 100%;
    max-width: 310px;
    background-color: var(--accent);
    margin-bottom: 24px;
  }
  p {
    width: 75%;
    margin-top: 28px;
    font-family: "Poppins";
    font-size: 18px;
    font-weight: normal;
    line-height: 1.44;
    color: var(--white);
  }

  form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 15px;
    grid-auto-rows: minmax(min-content, max-content);
    position: relative;
    margin-top: 44px;

    label {
      position: absolute;
      top: -20px;
      font-family: "JetBrains Mono";
      font-size: 11px;
      line-height: 1em;
      left: 18px;
      color: var(--accent);
    }

    input {
      padding: 18px;
      font-family: "JetBrains Mono";
      font-size: 18px;
      font-weight: 500;
      line-height: 1.22;
      color: var(--dark-bg);
      border: 2px solid var(--white);
      transition: border-color 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      &::placeholder {
        color: var(--text-gray);
      }

      &:hover,
      &:active,
      &:focus {
        border: 2px solid var(--accent);
      }
      &:active,
      &:focus {
        outline: none;
      }

      &.error {
        border-color: var(--error);
      }
    }

    p {
      font-size: 14px;
      margin-left: 18px;
      margin-top: 5px;
      color: var(--text-gray);
    }
    .error {
      color: var(--error);
    }

    button {
      border: 2px solid var(--accent);
      padding: 18px;
      font-family: "JetBrains Mono";
      font-size: 18px;
      font-weight: 500;
      line-height: 1.22;
      color: var(--black);
      background-color: var(--accent);

      &:focus,
      &:active,
      &:hover {
        outline: none;
      }
    }
  }
`

const EbookColumn = styled(ContentColumn)`
  flex: 2;
  margin-top: -44px;
  margin-right: 0;
  align-items: flex-end;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 377px;
  }
  img,
  picture {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
  }
`

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
    <Wrapper>
      <SectionStyles>
        <ContentColumn>
          <span>Handbook for you</span>
          <h2>The ultimate content checklist.</h2>
          <p>
            Curious about what to look out for in 2021 to stay relevant in the
            online space? We combined all the useful tips to help you out.
          </p>
          <form
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
          </form>
        </ContentColumn>
        <EbookColumn>
          <Img fluid={theUltimateContentChecklistImage.fluid} />
        </EbookColumn>
      </SectionStyles>
    </Wrapper>
  )
}

export default TheUltimateSection
