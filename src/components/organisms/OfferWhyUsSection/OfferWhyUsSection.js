import React from "react"
import styled from "styled-components"
import { StructuredText } from "react-datocms"
import { CheckMarkIcon } from "../../atoms/Icons/Icons"
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
  padding: clamp(99px, 15.1vw, 218px) clamp(91px, 7.77vw, 112px)
    clamp(76px, 12.9vw, 186px);
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    max-width: 768px;
    padding: 99px clamp(16px, 9vw, 36px) clamp(76px, 12.9vw, 186px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 640px) {
    padding: 64px 16px 72px;
    align-items: flex-start;
  }
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: clamp(266px, 26.38vw, 380px) 1fr;
  grid-column-gap: clamp(28px, 3vw, 44px);
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: clamp(36px, 6.25vw, 48px);
  }
`
const MainHeader = styled.p`
  font-size: clamp(18px, 1.668vw, 24px);
  line-height: ${40 / 24};
  color: var(--off-black);
  @media (max-width: 1024px) {
    font-size: clamp(20px, 3.125vw, 24px);
    max-width: clamp(420px, 70.9vw, 545px);
  }
`

const Columns = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: 0;
  display: grid;
  grid-column-gap: clamp(31px, 3vw, 44px);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-template-rows: repeat(4, min-content);
  grid-auto-flow: column;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-template-rows: none;
    grid-auto-flow: row;
    max-width: 448px;
    margin: 0 auto;
  }
`

const ListItem = styled.li`
  position: relative;
  + li {
    margin-top: 1rem;
  }
  &:nth-of-type(5) {
    margin-top: 0;
    @media (max-width: 640px) {
      margin-top: 1rem;
    }
  }
  padding-left: 36px;
  > svg {
    position: absolute;
    left: 0;
    top: 1px;
  }
`

const ListItemTitle = styled.p`
  margin-bottom: 8px;
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

const ListItemText = styled.p`
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

const ColumnItem = ({ title, text }) => {
  return (
    <ListItem>
      <CheckMarkIcon />
      <ListItemTitle>{title}</ListItemTitle>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  )
}

const OfferWhyUsSection = ({ firstColumnItems, secondColumnItems }) => {
  const dispatchCursor = useCursorDispatchContext()

  return (
    <Wrapper
      id="dlaczego"
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
        <ContentGrid>
          <MainHeader>Dlaczego warto wybrać właśnie nas?</MainHeader>
          <Columns>
            {firstColumnItems.map(columnItem => (
              <ColumnItem
                text={columnItem.offerListItemText}
                title={columnItem.offerListItemTitle}
              />
            ))}
            {secondColumnItems.map(columnItem => (
              <ColumnItem
                text={columnItem.offerListItemText}
                title={columnItem.offerListItemTitle}
              />
            ))}
          </Columns>
        </ContentGrid>
      </Container>
    </Wrapper>
  )
}

export default OfferWhyUsSection
