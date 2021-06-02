import { graphql } from "gatsby"
import React from "react"

import ContactMain from "../components/molecules/Contact/ContactMain"

const Contact = ({ data }) => {
  const {
    datoCmsPageContact: {
      heroTytul: contactPageTitle,
      formularzImieNadInputem: contactPageNameLabel,
      formularzTekstPrzycisku: contactPageButtonText,
      formularzImiePlaceholder: contactPageNamePlaceholder,
      formularzEmailNadInputem: contactPageEmailLabel,
      formularzEmailPlaceholder: contactPageEmailPlaceholder,
      formularzWiadomoscNadTextarea: contactPageMessageLabel,
      formularzWiadomoscPlaceholder: contactPageMessagePlaceholder,
      formularzZgodaNaPrzetwarzanieTekst: contactPagePrivacyText,
    },
  } = data
  return (
    <div>
      <ContactMain
        contactPageTitle={contactPageTitle}
        contactPageNameLabel={contactPageNameLabel}
        contactPageButtonText={contactPageButtonText}
        contactPageNamePlaceholder={contactPageNamePlaceholder}
        contactPageEmailLabel={contactPageEmailLabel}
        contactPageEmailPlaceholder={contactPageEmailPlaceholder}
        contactPageMessageLabel={contactPageMessageLabel}
        contactPageMessagePlaceholder={contactPageMessagePlaceholder}
        contactPagePrivacyText={contactPagePrivacyText}
      />
    </div>
  )
}

export const query = graphql`
  query contactData {
    datoCmsPageContact {
      heroTytul {
        value
      }
      formularzImieNadInputem
      formularzTekstPrzycisku {
        value
      }
      formularzImiePlaceholder {
        value
      }
      formularzEmailNadInputem
      formularzEmailPlaceholder {
        value
      }
      formularzWiadomoscNadTextarea
      formularzWiadomoscPlaceholder {
        value
      }
      formularzZgodaNaPrzetwarzanieTekst {
        value
      }
    }
  }
`

export default Contact
