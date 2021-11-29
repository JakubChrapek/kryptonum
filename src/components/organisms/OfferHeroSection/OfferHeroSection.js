import React from "react"
import styled from "styled-components"
import { StructuredText } from "react-datocms"
import { GatsbyImage } from "gatsby-plugin-image"

const Wrapper = styled.section`
  background-color: var(--white);
`

const Container = styled.div``

const TextContainer = styled.div``

const OfferHeader = styled.span``

const OfferClaim = styled.p``

const OfferButton = styled.button``

const OfferHeroSection = ({ headerText, claimText, btnText, heroImage }) => {
  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <StructuredText data={headerText} />
          <StructuredText data={claimText} />
          <OfferButton>{btnText}</OfferButton>
        </TextContainer>
        <GatsbyImage image={heroImage} />
      </Container>
    </Wrapper>
  )
}

export default OfferHeroSection
