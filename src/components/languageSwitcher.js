import React from 'react'
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n'
import { IconButton, Menu, MenuItem } from '@material-ui/core'

import TranslateIcon from '@material-ui/icons/Translate'

const LanguageSwitcher = ({ originalPath = '/' }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const { locale: currentLocale, config } = useLocalization()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        color="inherit"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <TranslateIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {config.map((locale) => (
          <li key={locale.code}>
            <MenuItem
              component={LocalizedLink}
              to={originalPath}
              language={locale.code}
              disableRipple
              selected={currentLocale === locale.code}
            >
              {locale.localName}
            </MenuItem>
          </li>
        ))}
      </Menu>
    </div>
  )
}

export default LanguageSwitcher
