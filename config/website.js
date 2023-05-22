module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Kryptonum", // Navigation and Site Title
  titleTemplate: "%s | Kryptonum",
  titleAlt: "Kryptonum Studio", // Title for JSONLD
  description:
    "🚀 Tworzymy strony nie z tej Ziemi! ⭐️ Dajemy porady biznesowe! ☄️ Po to, żeby Twój biznes wystrzelił w kosmos!",
  headline: "Kryptonum - projektanci stron internetowych nie z tej Ziemi", // Headline for schema.org JSONLD
  url: "https://kryptonum.eu", // Domain of your site. No trailing slash!
  siteLanguage: "pl", // Language Tag on <html> element
  logo: "/images/Logo_horyzontalne_kolor_PNG.png", // Used for SEO
  ogLanguage: "pl_PL", // Facebook Language

  // JSONLD / Manifest
  favicon: "/images/Sygnet_kolor_PNG.png", // Used for manifest favicon generation
  shortName: "Kryptonum", // shortname for manifest. MUST be shorter than 12 characters
  author: "Kryptonum", // Author for schemaORGJSONLD
  themeColor: "#2fbc79",
  backgroundColor: "#0c0c0c",
  twitter: "@kryptonum", // Twitter Username
  facebook: "kryptonum", // Facebook Site Name
  skipNavId: "tresc", // ID for the "Skip to content" a11y feature
}
