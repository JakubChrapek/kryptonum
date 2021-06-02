import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import HeroContent from "../components/molecules/HeroContent/HeroContent"
import HeroImage from "../components/molecules/HeroImage/HeroImage"
import WhatWeDo from "../components/molecules/Services/WhatWeDo"

const PageWrapper = styled.div`
  background-color: var(--white);
`
const Services = ({ data }) => {
  const {
    datoCmsPageService: {
      heroImage,
      heroTytul: heroTitle,
      coRobimyTytul: whatWeDoTitle,
      coRobimyAkapit: whatWeDoParagraph,
      stronyInternetoweTytul: websitesTitle,
      stronyInternetoweAkapit: websitesParagraph,
      marketingTytul: marketingTitle,
      marketingAkapit: marketingParagraph,
      strategiaTytul: strategyTitle,
      strategiaAkapit: strategyParagraph,
      jakPracujemyTytulNaPoczatku: howWeWorkSectionTitle,
      jakPracujemyLista: howWeWorkList,
      jakPracujemyRozmowaTytul: howWeWorkLearnTitle,
      jakPracujemyRozmowaNumerPierwszy: howWeWorkLearnNumber,
      jakPracujemyRozmowaTytulNadLista: howWeWorkLearnTitleOverList,
      jakPracujemyMozdzymyAkapit: howWeWorkThinkingParagraph,
      jakPracujemyMozdzymyNumer: howWeWorkThinkingNumber,
      jakPracujemyMozdzymyTytul: howWeWorkThinkingTitle,
      jakPracujemyMozdzymyTekstWKolku: howWeWorkThinkingTextInCircle,
      jakPracujemyMozdzymyTytulNadTekstem: howWeWorkThinkingTitleOverText,
      jakPracujemyTworzenieNumer: howWeWorkCreatingNumber,
      jakPracujemyTworzenieTytul: howWeWorkCreatingTitle,
      jakPracujemyTworzenieAkapit: howWeWorkCreatingParagraph,
      jakPracujemyTworzenieTytulNadAkapitem: howWeWorkCreatingTitleOverParagraph,
      jakPracujemyImplementacjaNumer: howWeWorkImplementationNumber,
      jakPracujemyImplementacjaTytul: howWeWorkImplementationTitle,
      jakPracujemyImplementacjaTekstCta: howWeWorkImplementationCtaText,
      jakPracujemyImplementacjaKrotkiAkapit: howWeWorkImplementationShortParagraph,
      jakPracujemyImplementacjaListaElementow: howWeWorkImplementationList,
    },
  } = data
  return (
    <PageWrapper>
      <HeroContent content={heroTitle} />
      <HeroImage image={heroImage} />
      <WhatWeDo
        whatWeDoTitle={whatWeDoTitle}
        whatWeDoParagraph={whatWeDoParagraph}
        imagesData={data.datoCmsPageService}
        websitesTitle={websitesTitle}
        websitesParagraph={websitesParagraph}
        marketingTitle={marketingTitle}
        marketingParagraph={marketingParagraph}
        strategyTitle={strategyTitle}
        strategyParagraph={strategyParagraph}
        howWeWorkSectionTitle={howWeWorkSectionTitle}
        howWeWorkList={howWeWorkList}
        howWeWorkThinkingParagraph={howWeWorkThinkingParagraph}
        howWeWorkThinkingNumber={howWeWorkThinkingNumber}
        howWeWorkThinkingTitle={howWeWorkThinkingTitle}
        howWeWorkThinkingTextInCircle={howWeWorkThinkingTextInCircle}
        howWeWorkThinkingTitleOverText={howWeWorkThinkingTitleOverText}
        howWeWorkLearnTitle={howWeWorkLearnTitle}
        howWeWorkLearnNumber={howWeWorkLearnNumber}
        howWeWorkLearnTitleOverList={howWeWorkLearnTitleOverList}
        howWeWorkCreatingNumber={howWeWorkCreatingNumber}
        howWeWorkCreatingTitle={howWeWorkCreatingTitle}
        howWeWorkCreatingParagraph={howWeWorkCreatingParagraph}
        howWeWorkCreatingTitleOverParagraph={
          howWeWorkCreatingTitleOverParagraph
        }
        howWeWorkImplementationNumber={howWeWorkImplementationNumber}
        howWeWorkImplementationTitle={howWeWorkImplementationTitle}
        howWeWorkImplementationCtaText={howWeWorkImplementationCtaText}
        howWeWorkImplementationShortParagraph={
          howWeWorkImplementationShortParagraph
        }
        howWeWorkImplementationList={howWeWorkImplementationList}
      />
    </PageWrapper>
  )
}

export const query = graphql`
  query serviceImages {
    datoCmsPageService {
      heroImage {
        gatsbyImageData(width: 920, placeholder: BLURRED, forceBlurhash: false)
      }
      heroTytul {
        value
      }
      coRobimyTytul
      coRobimyAkapit {
        value
      }
      stronyInternetoweTytul {
        value
      }
      stronyInternetoweAkapit {
        value
      }
      marketingTytul {
        value
      }
      marketingAkapit {
        value
      }
      strategiaTytul {
        value
      }
      strategiaAkapit {
        value
      }

      jakPracujemyTytulNaPoczatku {
        value
      }
      jakPracujemyLista {
        value
      }

      jakPracujemyRozmowaTytul {
        value
      }
      jakPracujemyRozmowaNumerPierwszy
      jakPracujemyRozmowaTytulNadLista {
        value
      }
      jakPracujemyMozdzymyAkapit {
        value
      }
      jakPracujemyMozdzymyNumer
      jakPracujemyMozdzymyTytul {
        value
      }
      jakPracujemyMozdzymyTekstWKolku
      jakPracujemyMozdzymyTytulNadTekstem {
        value
      }
      jakPracujemyTworzenieNumer
      jakPracujemyTworzenieTytul {
        value
      }
      jakPracujemyTworzenieAkapit {
        value
      }
      jakPracujemyTworzenieTytulNadAkapitem {
        value
      }

      jakPracujemyImplementacjaNumer
      jakPracujemyImplementacjaTytul {
        value
      }
      jakPracujemyImplementacjaTekstCta {
        value
      }
      jakPracujemyImplementacjaKrotkiAkapit {
        value
      }
      jakPracujemyImplementacjaListaElementow {
        value
      }

      designImage {
        gatsbyImageData(width: 600, placeholder: BLURRED, forceBlurhash: false)
      }
      strategyImage {
        gatsbyImageData(width: 600, placeholder: BLURRED, forceBlurhash: false)
      }
      marketingImage {
        gatsbyImageData(width: 600, placeholder: BLURRED, forceBlurhash: false)
      }
      developmentImage {
        gatsbyImageData(width: 600, placeholder: BLURRED, forceBlurhash: false)
      }
    }
  }
`

export default Services
