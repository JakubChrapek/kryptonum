const path = require(`path`)
var slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const result = await graphql(`
    query allArticlesAndLessons {
      articles: allDatoCmsArticle {
        nodes {
          articleTitle
          articleCategory
          articleSlug
          id
          author {
            name
            surname
            photo {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  result.data.articles.nodes.forEach(article => {
    const slugifiedTitle = slugify(article.articleSlug, {
      lower: true,
    })
    createPage({
      path: `blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        articleId: article.id,
      },
    })
  })
}
