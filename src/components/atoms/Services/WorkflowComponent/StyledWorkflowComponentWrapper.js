import styled from "styled-components"

export const StyledWorkflowComponentWrapper = styled.div`
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
