import React, { useContext } from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'

import TranslateIcon from '@material-ui/icons/Translate'

import { LocaleContext } from './localeProvider'
import { LocalizedLink } from './localizedLink'

export const LanguageSwitcher = ({ originalPath = '/' }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const { locale: currentLocale, locales } = useContext(LocaleContext)

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
        {locales.map((locale) => (
          <li key={locale.code}>
            <MenuItem
              component={LocalizedLink}
              onClick={handleClose}
              to={originalPath}
              language={locale.code}
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
