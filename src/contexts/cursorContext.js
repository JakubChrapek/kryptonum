import React, { createContext, useReducer, useContext } from "react"

const CursorStateContext = createContext()
const CursorDispatchContext = createContext()

const CursorReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CURSOR": {
      return {
        ...state,
        cursorShow: action.cursorShow,
      }
    }
    case "CHANGE_CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      }
    }
    case "CHANGE_CURSOR_SIZE": {
      return {
        ...state,
        cursorSize: action.cursorSize,
      }
    }
    case "CHANGE_CURSOR_COLOR": {
      return {
        ...state,
        cursorColor: action.cursorColor,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const CURSOR_TYPES = {
  FULL_CURSOR: "full",
  OUTLINED_CURSOR: "outline",
  INPUT_CURSOR: "input",
}

export const CURSOR_SIZES = {
  DEFAULT: "default",
  SMALLER: "small",
  BIGGER: "bigger",
}

export const CURSOR_COLORS = {
  LIGHT: "#f7f8f7",
  LIGHT_TRANSPARENT: "#f7f8f7aa",
  DARK: "#171717",
  DARK_TRANSPARENT: "#171717aa",
  ACCENT: "#00EF8B",
  ACCENT_TRANSPARENT: "#00EF8Baa",
}

export const CursorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CursorReducer, {
    cursorShow: true,
    cursorColor: CURSOR_COLORS.LIGHT,
    cursorSize: CURSOR_SIZES.SMALLER,
    cursorType: CURSOR_TYPES.FULL_CURSOR,
    cursorTypes: CURSOR_TYPES,
    cursorSizes: CURSOR_SIZES,
  })

  return (
    <CursorDispatchContext.Provider value={dispatch}>
      <CursorStateContext.Provider value={state}>
        {children}
      </CursorStateContext.Provider>
    </CursorDispatchContext.Provider>
  )
}

export const useCursorStateContext = () => useContext(CursorStateContext)
export const useCursorDispatchContext = () => useContext(CursorDispatchContext)
