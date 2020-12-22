import React from "react"

const MenuStateContext = React.createContext()
const MenuDispatchContext = React.createContext()

function MenuReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU": {
      return { show: !state.show }
    }
    case "CLOSE_MENU": {
      return { show: false }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function MenuProvider({ children }) {
  const [state, dispatch] = React.useReducer(MenuReducer, { show: false })
  return (
    <MenuStateContext.Provider value={state}>
      <MenuDispatchContext.Provider value={dispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuStateContext.Provider>
  )
}

function useMenuState() {
  const context = React.useContext(MenuStateContext)
  if (context === undefined) {
    throw new Error("useMenuState must be used within a MenuProvider")
  }
  return context
}
function useMenuDispatch() {
  const context = React.useContext(MenuDispatchContext)
  if (context === undefined) {
    throw new Error("useMenuDispatch must be used within a MenuProvider")
  }
  return context
}
export { MenuProvider, useMenuState, useMenuDispatch }
