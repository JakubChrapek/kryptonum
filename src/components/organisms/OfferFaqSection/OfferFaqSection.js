import React from "react"
import styled from "styled-components"
import QuestionsAndAnswer from "../../molecules/FAQ/QuestionsAndAnswer"

const Wrapper = styled.section`
  background-color: var(--white);
  width: 100%;
`

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: clamp(76px, 9.75vw, 144px) clamp(36px, 7.77vw, 112px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 768px;
    padding: 0 clamp(16px, 4.68vw, 36px) 112px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 640px) {
    padding: 48px 16px;
  }
`

const FaqSubHeader = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: var(--black);
  text-transform: uppercase;
  text-align: center;
`
const FaqQuestion = styled.p`
  font-size: clamp(36px, 3.33vw, 48px);
  line-height: 1.5;
  margin-bottom: 24px;
  color: var(--off-black);
  text-align: center;
  max-width: clamp(688px, 80.55vw, 1160px);
  @media (max-width: 1024px) {
  }
`
const FaqCta = styled.p`
  font-size: clamp(18px, 1.66vw, 24px);
  line-height: 1.5;
  color: var(--off-black);
  text-align: center;
  max-width: clamp(688px, 54.72vw, 788px);
  margin-bottom: clamp(53px, 7.43vw, 107px);
`

const OfferFaqSection = ({ faqSubheader, faqQuestion, faqCta, faqItems }) => {
  return (
    <Wrapper>
      <Container>
        <FaqSubHeader>{faqSubheader}</FaqSubHeader>
        <FaqQuestion>{faqQuestion}</FaqQuestion>
        <FaqCta>{faqCta}</FaqCta>
        <QuestionsAndAnswer variant="offer" faqItems={faqItems} />
      </Container>
    </Wrapper>
  )
}

export default OfferFaqSection
