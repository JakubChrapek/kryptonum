import React from "react"

import { StyledArticleStyles } from "../../atoms/BlogSection/StyledArticleStyles"
import { StyledArticleImg } from "../BlogSection/StyledArticleImg"
import { StyledArticleGridDiv } from "../../atoms/BlogSection/StyledArticleGridDiv"

import { TextStyles } from "../../atoms/Text/Text"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TEXT,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import ellipsize from "ellipsize"

const Article = ({ article, full, layout }) => {
  const dispatchCursor = useCursorDispatchContext()
  const year = article.dateOfPublication.split("-")[0].slice(2)
  const month = article.dateOfPublication.split("-")[1]
  return (
    <StyledArticleStyles
      layout={layout}
      full={full}
      key={article.id}
      to={`/blog/${article.articleSlug}`}
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.HUGE,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_TEXT",
          cursorText: CURSOR_TEXT.VIEW,
        })
      }}
      onMouseLeave={() => {
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
      <StyledArticleGridDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ marginLeft: 0 }}
      >
        <StyledArticleImg
          variant={full && "blog"}
          layout
          fluid={article.articleFeaturedImage.fluid}
        />
        <TextStyles
          declaredpadding="11px 0 0 0"
          // declaredBorderTop="2px solid var(--black)"
          declaredMargin="15px 0 0 0"
          declaredWidth="100%"
          lineHeight="1.38em"
          fontSize="16px"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >
          {ellipsize(article.articleTitle, 60)}
        </TextStyles>
        <TextStyles
          fontSize="10px"
          lineHeight="1.3em"
          letterSpaccing="0.8px"
          declaredMargin={full ? "9px 0 0" : "26px 0 0 0"}
          declaredpadding="0 0 13px 0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >{`${month}/${year}`}</TextStyles>
      </StyledArticleGridDiv>
    </StyledArticleStyles>
  )
}

export default Article
