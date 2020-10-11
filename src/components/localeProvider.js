import React from 'react'

export const LocaleContext = React.createContext({})

export const LocaleProvider = ({ children, value }) => (
  <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
)
