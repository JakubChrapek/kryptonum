import { useEffect } from "react"

export default function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        event.target.id !== "menuHamburgerBtn" &&
        ref?.current &&
        !ref?.current.contains(event.target)
      ) {
        callback()
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [ref])
}
