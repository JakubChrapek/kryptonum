import React from "react"
import { StyledForm } from "./StyledContactForm"
import { StyledContactLink } from "../../../atoms/Contact/StyledContactLink"

function ContactForm() {
  return (
    <div>
      <StyledForm>
        <label>First Name*</label>
        <input type="text" />
        <label>Email*</label>
        <input type="text" />
        <label>How we can help you?</label>
        <textarea placeholder="Let us know about your project and goals…"></textarea>
        <p>
          By submitting this form I accept the
          <StyledContactLink to="/privacy-policy">
            Privacy Policy
          </StyledContactLink>{" "}
          of this site
        </p>
        <button type="submit">Send your request</button>
      </StyledForm>
    </div>
  )
}

export default ContactForm
