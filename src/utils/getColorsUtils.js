// TODO: utils for colors based on path, theme etc.
export const getColorFromPath = path => {
  switch (path) {
    case "/projekty":
    case "/blog":
      return "light"
    case "/blog":
      return "dark"
    default:
      return "dark"
  }
}

export const getColorFromTheme = theme =>
  theme === "light" ? "var(--white)" : "var(--black)"
