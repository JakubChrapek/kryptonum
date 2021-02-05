import { useState, useEffect } from "react"

const getHeight = () =>
  (typeof window !== "undefined" && window.innerHeight) ||
  (typeof document !== "undefined" &&
    document.documentElement &&
    document.documentElement.clientHeight) ||
  (typeof document !== "undefined" &&
    document.body &&
    document.body.clientHeight)

export default function useWindowSize() {
  const [height, setHeight] = useState(getHeight())

  useEffect(() => {
    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setHeight(getHeight()), 150)
    }
    window.addEventListener("resize", resizeListener)
    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return height
}
