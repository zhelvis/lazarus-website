import React, { useMemo, createContext } from 'react'
import PropTypes from 'prop-types'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import usePersistedState from './usePersistedState'
import themes from '../../src/themes'

export const DarkModeContext = createContext({
  darMode: false,
  toogleDarkMode: () => {},
})

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = usePersistedState('darkMode', false)

  const toogleDarkMode = () => setDarkMode(!darkMode)

  const theme = useMemo(
    () => createMuiTheme(darkMode ? themes.dark : themes.light),
    [darkMode]
  )

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toogleDarkMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}

DarkModeProvider.propTypes = {
  children: PropTypes.node,
}
