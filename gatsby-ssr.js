const React = require("react")
const Layout = require("./src/layouts/Layout").default
const CursorProvider = require("./src/contexts/cursorContext").CursorProvider

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

exports.wrapRootElement = ({ element }) => (
  <CursorProvider>{element}</CursorProvider>
)

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  /**
   * @type {any[]} headComponents
   */
  const headComponents = getHeadComponents()

  headComponents.sort((a, b) => {
    if (a.props && a.props["data-react-helmet"]) {
      return 0
    }
    return 1
  })
  replaceHeadComponents(headComponents)
}

// exports.onRenderBody = ({ setBodyAttributes }) => {
//   setBodyAttributes({
//     className: "no-js",
//   })
// }
