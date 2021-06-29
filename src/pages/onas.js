import React from "react"

import AboutContent from "../components/molecules/AboutContent/AboutContent"
import AboutSlider from "../components/organisms/AboutSlider/AboutSlider"
import AboutBestWay from "../components/molecules/AboutBestWay/AboutBestWay"
import FeedbackFrom from "../components/molecules/FeedbackFrom/FeedbackFrom"
import OurVision from "../components/molecules/OurVision/OurVision"
import { graphql } from "gatsby"
import website from "../../config/website"
import WhatWeDo from "../components/molecules/Services/WhatWeDo"

const About = ({ data }) => {
  const {
    heroImage,
    heroTytul: heroTitle,
    heroZdjecieWtle: heroBgImg,
    toMaratonNieSprintTytul: marathonTitle,
    toMaratonNieSprintPierwszyAkapit: marathonFirstParagraph,
    toMaratonNieSprintAkapitNadSliderem: marathonParagraphOverTitle,
    naszeWartosciTytul: ourValuesTitle,
    naszeWartosciCecha: ourValuesFeature,
    naszeWartosciHasloNaSrodku: ourValuesCenteredClaim,
    feedbackKlientowRecenzje: feedbackFromClients,
    feedbackTytul: feedbackTytul,
  } = data.datoCmsPageAbout
  const {
    datoCmsPageService: {
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
  console.log(heroTitle)
  return (
    <div id={website.skipNavId} style={{ backgroundColor: "var(--white)" }}>
      <AboutContent
        heroTitle={heroTitle}
        heroBgImg={heroBgImg}
        heroImage={heroImage}
      />
      <AboutBestWay
        marathonParagraphOverTitle={marathonParagraphOverTitle}
        textContent={marathonParagraphOverTitle}
      />
      <OurVision
        ourValuesTitle={ourValuesTitle}
        ourValuesFeature={ourValuesFeature}
        ourValuesCenteredClaim={ourValuesCenteredClaim}
      />
      <FeedbackFrom
        feedbackFromClients={feedbackFromClients}
        feedbackTytul={feedbackTytul}
      />
      <WhatWeDo
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
      <AboutSlider
        marathonTitle={marathonTitle}
        marathonFirstParagraph={marathonFirstParagraph}
      />
    </div>
  )
}

export const query = graphql`
  query aboutQuery {
    datoCmsPageAbout {
      heroTytul {
        value
      }
      heroImage {
        gatsbyImageData(width: 1920, placeholder: BLURRED)
      }
      heroZdjecieWTle {
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
      toMaratonNieSprintTytul {
        value
      }
      toMaratonNieSprintPierwszyAkapit {
        value
      }
      toMaratonNieSprintAkapitNadSliderem {
        value
      }
      naszeWartosciCecha {
        wartoscTytul {
          value
        }
        wartoscTresc {
          value
        }
      }
      naszeWartosciHasloNaSrodku {
        value
      }
      naszeWartosciTytul {
        value
      }
      feedbackTytul {
        value
      }
    }
    datoCmsPageService {
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
    }
  }
`

export default About
