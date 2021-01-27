import styled from "styled-components"

export const WorkflowComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ notFlexDirection }) =>
    notFlexDirection ? "row" : "column"};
  align-items: ${({ hasAlignItems }) =>
    hasAlignItems ? "flex-start" : "center"};
  justify-content: ${({ hasJustifyContent }) =>
    hasJustifyContent ? "space-between" : "unsafe"};
  padding-top: ${({ hasPaddingTop }) =>
    hasPaddingTop ? `${hasPaddingTop}px` : 0};

  @media only screen and (max-width: 816px) {
    flex-direction: ${({ mediaQueriesDirection }) =>
      mediaQueriesDirection ? "column" : "row"};
    align-items: ${({ mediaQueriesAlign }) =>
      mediaQueriesAlign ? "center" : "flex-start"};
    padding-top: 0;
  }
`
export const StyledGreenSpan = styled.span`
  font-family: JetBrainsMono;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: 2.57px;
  color: var(--accent);

  @media only screen and (max-width: 816px) {
    display: ${({ implementation }) => (implementation ? "block" : "inline")};
    text-align: ${({ implementation }) => (implementation ? "center" : "left")};
  }
`
export const StyledHeading = styled.h1`
  font-family: LibreBaskerville;
  font-size: 70px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: -1.75px;
  color: var(--gray);
  @media only screen and (max-width: 816px) {
    font-size: ${({ hasMediaQueryFont }) =>
      hasMediaQueryFont ? "44px" : "70px"};
  }
`
