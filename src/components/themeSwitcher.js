import React, { useContext } from 'react'
import { IconButton } from '@material-ui/core'
import Brightness4 from '@material-ui/icons/Brightness4'

import { DarkModeContext } from '../../plugins/gatsby-plugin-material-ui-dark-mode'

export default () => {
  const { toogleDarkMode } = useContext(DarkModeContext)
  return (
    <IconButton onClick={toogleDarkMode} color="inherit">
      <Brightness4 />
    </IconButton>
  )
}
