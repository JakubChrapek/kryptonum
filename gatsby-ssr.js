const React = require("react")
const Layout = require("./src/layouts/Layout").default
const CursorProvider = require("./src/contexts/cursorContext").CursorProvider

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <CursorProvider>
      <Layout {...props}>{element}</Layout>
    </CursorProvider>
  )
}

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "no-js",
  })
}
