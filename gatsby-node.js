const path = require(`path`)
var slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const projectTemplate = path.resolve(`src/layouts/project.js`)
  const articles = await graphql(`
    query allArticles {
      articles: allDatoCmsArticle {
        nodes {
          articleSlug
          articleCategory
          id
        }
      }
      projects: allDatoCmsProject {
        nodes {
          projectSlug
          id
        }
      }
    }
  `)

  articles.data.articles.nodes.forEach(article => {
    const slugifiedTitle = slugify(article.articleSlug, {
      lower: true,
    })
    createPage({
      path: `blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: article.id,
        category: article.articleCategory,
      },
    })
  })
  articles.data.projects.nodes.forEach(project => {
    const slugifiedTitle = slugify(project.projectSlug, {
      lower: true,
    })
    createPage({
      path: `projects/${slugifiedTitle}`,
      component: projectTemplate,
      context: {
        id: project.id,
      },
    })
  })
}
