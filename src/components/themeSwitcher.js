import React, { useContext } from 'react'
import { IconButton } from '@material-ui/core'
import Brightness4 from '@material-ui/icons/Brightness4'
import Brightness7 from '@material-ui/icons/Brightness7'

import { DarkModeContext } from '../../plugins/gatsby-plugin-material-ui-dark-mode'

export default () => {
  const { darkMode, toogleDarkMode } = useContext(DarkModeContext)
  return (
    <IconButton onClick={toogleDarkMode} color="inherit">
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
}
