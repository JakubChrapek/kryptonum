import React from "react"
import SEO from "../components/SEO/SEO"
import HomeHero from "../components/organisms/HomeHero/HomeHero"
import MainServices from "../components/molecules/MainServices/MainServices"
import WhatIsKryptonum from "../components/molecules/WhatIsKryptonum/WhatIsKryptonum"
import FeaturedSection from "../components/molecules/FeaturedSection/FeaturedSection"
import ProjectsSection from "../components/organisms/ProjectsSection/ProjectsSection"
import HowWeWorkSection from "../components/molecules/HoweWeWorkSection/HowWeWorkSection"
import CtaSection from "../components/molecules/CtaSection/CtaSection"
import BlogSection from "../components/organisms/BlogSection/BlogSection"
import TheUltimateSection from "../components/organisms/TheUltimateSection/TheUltimateSection"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    datoCmsPageHome: {
      seoMetaTags,
      heroTytul: heroTitle,
      heroTekstPrzycisku,
      naszeUslugiTytul: servicesTitle,
      naszeUslugiPierwszyWiersz: servicesListFirstRow,
      naszeUslugiDrugiWiersz: servicesListSecondRow,
      aCoToTakiegoTytulStructured: whatIsKryptonumTitle,
      aCoToTakiegoAkapit: whatIsKryptonumParagraph,
      pasjaTytul: passionTitle,
      pasjaTresc: passionContent,
      skupienieTytul: focusTitle,
      skupienieTresc: focusContent,
      kreatywnoscTytul: creativityTitle,
      kreatywnoscTresc: creativityContent,
      aCoToTakiegoObrazekWTle: whatIsKryptonumImage,
      chwalipietyTytul: featuredTitle,
      chwalipietyDuzyTytul: featuredBigTitle,
      chwalipietyPierwszyElementListy: featuredFirstElement,
      chwalipietyDrugiElementListy: featuredSecondElement,
      chwalipietyTrzeciElementListy: featuredThirdElement,
      projektyTekstPrzycisku: projectButtonText,
      jakToDzialaTytul: howItWorksTitle,
      jakToDzialaH2: howItWorksBigTitle,
      pierwszaKartaTytul: howItWorksFirstCardTitle,
      pierwszaKartaAkapit: howItWorksFirstCardParagraph,
      drugaKartaTytul: howItWorksSecondCardTitle,
      drugaKartaAkapit: howItWorksSecondCardParagraph,
      trzeciaKartaTytul: howItWorksThirdCardTitle,
      trzeciaKartaAkapit: howItWorksThirdCardParagraph,
      czwartaKartaTytul: howItWorksFourthCardTitle,
      czwartaKartaAkapit: howItWorksFourthCardParagraph,
      stworzmyRazemStroneCta: createAWebsiteTogetherCTA,
      stworzmyRazemStroneTekstPrzycisku: createAWebsiteTogetherButtonText,
      blogTytul: blogTitle,
      leadMagnetTytulMaly: leadMagnetTitleSmaller,
      leadMagnetTytulDuzy: leadMagnetTitleBigger,
      leadMagnetTekstPrzycisku: leadMagnetTitleButtonText,
      leadMagnetAkapit: leadMagnetParagraph,
      leadMagnetInputPlaceholder: leadMagnetInputPlaceholder,
      leadMagnetInformacjaOBledzie: leadMagnetTitleErrorMessage,
      leadMagnetInformacjaOSukcesie: leadMagnetTitleSuccessMessage,
    },
  } = data
  return (
    <>
      <SEO meta={seoMetaTags} />
      <HomeHero heroTitle={heroTitle} heroTekstPrzycisku={heroTekstPrzycisku} />
      <MainServices
        servicesListFirstRow={servicesListFirstRow}
        servicesListSecondRow={servicesListSecondRow}
        servicesTitle={servicesTitle}
      />
      <WhatIsKryptonum
        whatIsKryptonumTitle={whatIsKryptonumTitle}
        whatIsKryptonumParagraph={whatIsKryptonumParagraph}
        passionTitle={passionTitle}
        passionContent={passionContent}
        focusTitle={focusTitle}
        focusContent={focusContent}
        creativityTitle={creativityTitle}
        creativityContent={creativityContent}
        image={whatIsKryptonumImage.gatsbyImageData}
      />
      <FeaturedSection
        featuredTitle={featuredTitle}
        featuredBigTitle={featuredBigTitle}
        featuredFirstElement={featuredFirstElement}
        featuredSecondElement={featuredSecondElement}
        featuredThirdElement={featuredThirdElement}
      />
      <ProjectsSection buttonText={projectButtonText} />
      <HowWeWorkSection
        howItWorksTitle={howItWorksTitle}
        howItWorksBigTitle={howItWorksBigTitle}
        howItWorksFirstCardTitle={howItWorksFirstCardTitle}
        howItWorksFirstCardParagraph={howItWorksFirstCardParagraph}
        howItWorksSecondCardTitle={howItWorksSecondCardTitle}
        howItWorksSecondCardParagraph={howItWorksSecondCardParagraph}
        howItWorksThirdCardTitle={howItWorksThirdCardTitle}
        howItWorksThirdCardParagraph={howItWorksThirdCardParagraph}
        howItWorksFourthCardTitle={howItWorksFourthCardTitle}
        howItWorksFourthCardParagraph={howItWorksFourthCardParagraph}
      />
      <CtaSection
        createAWebsiteTogetherCTA={createAWebsiteTogetherCTA}
        createAWebsiteTogetherButtonText={createAWebsiteTogetherButtonText}
      />
      <BlogSection blogTitle={blogTitle} />
      {/* <TheUltimateSection
        leadMagnetTitleSmaller={leadMagnetTitleSmaller}
        leadMagnetTitleBigger={leadMagnetTitleBigger}
        leadMagnetTitleButtonText={leadMagnetTitleButtonText}
        leadMagnetTitleErrorMessage={leadMagnetTitleErrorMessage}
        leadMagnetTitleSuccessMessage={leadMagnetTitleSuccessMessage}
        leadMagnetInputPlaceholder={leadMagnetInputPlaceholder}
        leadMagnetParagraph={leadMagnetParagraph}
      /> */}
    </>
  )
}

export const homeQuery = graphql`
  query homeBg {
    datoCmsPageHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroTytul {
        value
      }
      heroTekstPrzycisku {
        value
      }

      naszeUslugiTytul
      naszeUslugiPierwszyWiersz {
        usluga
      }
      naszeUslugiDrugiWiersz {
        usluga
      }

      aCoToTakiegoTytulStructured {
        value
      }
      aCoToTakiegoAkapit {
        value
      }
      aCoToTakiegoObrazekWTle {
        gatsbyImageData
      }
      pasjaTytul
      pasjaTresc

      skupienieTytul
      skupienieTresc

      kreatywnoscTytul
      kreatywnoscTresc

      chwalipietyTytul
      chwalipietyDuzyTytul {
        value
      }
      chwalipietyPierwszyElementListy
      chwalipietyDrugiElementListy
      chwalipietyTrzeciElementListy
      projektyTekstPrzycisku
      jakToDzialaTytul
      jakToDzialaH2 {
        value
      }
      pierwszaKartaTytul
      pierwszaKartaAkapit {
        value
      }
      drugaKartaTytul
      drugaKartaAkapit {
        value
      }
      trzeciaKartaTytul
      trzeciaKartaAkapit {
        value
      }
      czwartaKartaTytul
      czwartaKartaAkapit {
        value
      }
      stworzmyRazemStroneCta {
        value
      }
      stworzmyRazemStroneTekstPrzycisku
      blogTytul {
        value
      }
      leadMagnetTytulMaly
      leadMagnetTytulDuzy
      leadMagnetTekstPrzycisku
      leadMagnetAkapit {
        value
      }
      leadMagnetInputPlaceholder
      leadMagnetAkapit {
        value
      }
      leadMagnetInformacjaOBledzie {
        value
      }
      leadMagnetInformacjaOSukcesie {
        value
      }
    }
  }
`

export default IndexPage
