import React from 'react'
import PropTypes from 'prop-types'
import { LocalizedLink } from 'gatsby-theme-i18n'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ThemeSwitcher from './themeSwitcher'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
}))

const Header = ({ path }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Gatsby MUI starter
          </Typography>
          <LocalizedLink to={path} language="ru">
            ru
          </LocalizedLink>
          <LocalizedLink to={path} language="en">
            en
          </LocalizedLink>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.defaultProps = {
  path: '/',
}

Header.propTypes = {
  path: PropTypes.string,
}

export default Header
