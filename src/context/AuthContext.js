import { createContext, useReducer } from 'react'

export const AuthContext = createContext()

export function authReducer(state, action) {
  switch (action.type) {
    default:
      return state
  }
}

export const AuthContexProvider = ({ childern }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {childern}
    </AuthContext.Provider>
  )
}
