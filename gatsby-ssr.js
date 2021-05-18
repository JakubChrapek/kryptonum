const React = require("react")
const Layout = require("./src/layouts/Layout").default
const CursorProvider = require("./src/contexts/cursorContext").CursorProvider

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

exports.wrapRootElement = ({ element }) => (
  <CursorProvider>{element}</CursorProvider>
)

// exports.onRenderBody = ({ setBodyAttributes }) => {
//   setBodyAttributes({
//     className: "no-js",
//   })
// }
