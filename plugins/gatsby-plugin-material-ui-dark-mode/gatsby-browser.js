import React from 'react'
import { DarkModeProvider } from './index'

export const wrapRootElement = ({ element }) => {
  return <DarkModeProvider>{element}</DarkModeProvider>
}
