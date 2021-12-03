import React from "react"
import styled from "styled-components"
import {
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const Wrapper = styled.section`
  background-color: var(--white);
  width: 100%;
`

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: clamp(76px, 15.34vw, 221px) clamp(36px, 15.2vw, 219px)
    clamp(76px, 14.09vw, 201px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding: clamp(60px, 9.89vw, 76px) clamp(26px, 4.6875vw, 36px);
  }

  @media (max-width: 640px) {
    padding: 85px 16px 112px;
  }
`

const Question = styled.strong`
  text-align: center;
  font-size: clamp(36px, 3.6125vw, 52px);
  font-weight: 500;
  @media (max-width: 640px) {
    font-size: clamp(20px, 6.66vw, 24px);
  }
`

const ItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: clamp(55px, 7.5vw, 108px) 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 36px;
  @media (max-width: 1024px) {
    grid-column-gap: 24px;
  }
  @media (max-width: 640px) {
    grid-column-gap: 0;
    grid-row-gap: 36px;
    grid-template-columns: 1fr;
    margin-top: clamp(44px, 15.27vw, 55px);
  }
`

const ItemWrapper = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
  font-size: clamp(24px, 1.251vw, 28px);
  line-height: ${26 / 28};
  letter-spacing: 0.2px;
  color: var(--off-black);
  font-weight: 600;
  width: 50px;
  height: 50px;
  @media (max-width: 640px) {
    width: 42px;
    height: 42px;
  }
  border-radius: ${8 / 28 + "em"};
  background-color: var(--button-accent);
`
const ItemTitle = styled.p`
  margin-bottom: 10px;
  font-size: clamp(15px, 1.251vw, 18px);
  line-height: ${28 / 18};
  letter-spacing: 0.2px;
  color: var(--off-black);
  font-weight: 600;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 706px) {
    font-size: clamp(15px, 2.549vw, 18px);
  }
  @media (max-width: 640px) {
    font-size: 18px;
  }
  @media (max-width: 364px) {
    font-size: clamp(15px, 4.94vw, 18px);
  }
`
const ItemText = styled.p`
  font-size: clamp(13px, 1.112vw, 16px);
  line-height: 1, 5;
  letter-spacing: 0.2px;
  color: var(--text-list-item);
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 706px) {
    font-size: clamp(13px, 2.26vw, 16px);
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
  @media (max-width: 364px) {
    font-size: clamp(13px, 4.39vw, 16px);
  }
`

const HowWeHelpItem = ({ number, title, text }) => (
  <ItemWrapper>
    <ItemNumber>{number}</ItemNumber>
    <ItemTitle>{title}</ItemTitle>
    <ItemText>{text}</ItemText>
  </ItemWrapper>
)

const OfferHowCanWeHelpSection = () => {
  const dispatchCursor = useCursorDispatchContext()

  const question = "Ok, to w czym możemy Ci pomóc?"
  const howWeHelpItems = [
    {
      number: 1,
      title:
        "Gwarantujemy, że szybkość Twojej strony konkurencję zostawi daleko w tyle.",
      text:
        "Dorzucamy do tego jedyny na świecie design – przygotowany specjalnie dla Twojego biznesu. A do pakietu zapewniamy strategiczny  copywriting i układ strony, który skutecznie realizuje cele Twojego biznesu oraz świetnie współpracuje z wyszukiwarką Google. Gwarantujemy efekt WOW w cenie każdego projektu.",
    },
    {
      number: 2,
      title:
        "Stworzymy sklep online, z którego będziesz dumny Ty, Twoja mama, a nawet wymagająca cioteczka.",
      text:
        "Żadnych szablonów i utartych schematów, każdy piksel będzie odzwierciedlał Twój biznes, a zakup produktu będzie maksymalnie prosty. Oryginał jest tylko jeden! W wyniku tego sklep będzie konwertował jak szalony i generował zysk dla Twojej firmy. Wspólnie przemyślimy asortyment, wpleciemy w to ciekawy storytelling, pokażemy zalety produktów tak, aby sprzedawały się jak świeże bułeczki 😀",
    },
    {
      number: 3,
      title:
        "Tworzenie identyfikacji wizualnej zgodnej z wartościami i celami Twojego biznesu",
      text:
        "Identyfikacja wizualna jest ostatnim brakującym ogniwem, by wyróżnić Twoją markę i wystrzelić Twój biznes w kosmos. W tej podróży będziemy z Tobą! Nie przegapimy takiej przygody 😀 Chętnie zaprosimy Cię na Zooma. Ty opowiesz nam o swoich celach, wartościach i strategii na przyszłość, a my z przyjemnością wdrożymy Twoją wizję w życie.",
    },
    {
      number: 4,
      title:
        "Masz pomysł na mega kampanię reklamową i potrzebujesz wsparcia kreatywnego projektanta?",
      text:
        "Kryptonum melduje gotowość! Oferujemy projektowanie graficzne stron i aplikacji internetowych, grafik na potrzeby social media i postów do kampanii reklamowych. Będzie profesjonalnie, kreatywnie  i nieszablonowo. Gwarantujemy, że wyróżnisz się na rynku. W wyniku naszej współpracy, mina sąsiada spod czwórki wyrazi niesamowite uszanowanko.",
    },
  ]

  return (
    <Wrapper
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
    >
      <Container>
        <Question>{question}</Question>
        <ItemsList>
          {howWeHelpItems.map(item => (
            <HowWeHelpItem
              number={item.number}
              title={item.title}
              text={item.text}
            />
          ))}
        </ItemsList>
      </Container>
    </Wrapper>
  )
}

export default OfferHowCanWeHelpSection
