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
}

export const CURSOR_SIZES = {
  DEFAULT: "normal",
  SMALLER: "small",
}

export const CURSOR_COLORS = {
  LIGHT: "#f7f8f7",
  DARK: "#171717",
  ACCENT: "#00ef8b",
}

export const CursorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CursorReducer, {
    cursorShow: true,
    cursorColor: "#f7f8f7",
    cursorSize: "big",
    cursorType: "outline",
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
