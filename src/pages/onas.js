import React from "react"

import AboutContent from "../components/molecules/AboutContent/AboutContent"
import AboutSlider from "../components/organisms/AboutSlider/AboutSlider"
import AboutBestWay from "../components/molecules/AboutBestWay/AboutBestWay"
import FeedbackFrom from "../components/molecules/FeedbackFrom/FeedbackFrom"
import OurVision from "../components/molecules/OurVision/OurVision"
import { graphql } from "gatsby"

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
  console.log(heroTitle)
  return (
    <div style={{ backgroundColor: "var(--white)" }}>
      <AboutContent
        heroTitle={heroTitle}
        heroBgImg={heroBgImg}
        heroImage={heroImage}
      />
      <AboutBestWay
        marathonParagraphOverTitle={marathonParagraphOverTitle}
        textContent={marathonParagraphOverTitle}
      />
      <AboutSlider
        marathonTitle={marathonTitle}
        marathonFirstParagraph={marathonFirstParagraph}
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
      feedbackKlientowRecenzje {
        feedbackKlient {
          value
        }
        feedbackTresc {
          value
        }
      }
      feedbackTytul {
        value
      }
    }
  }
`

export default About
