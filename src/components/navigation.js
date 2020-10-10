import React from 'react'
import { LocalizedLink } from 'gatsby-theme-i18n'
import { useTranslation } from 'react-i18next'
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  navlink: {
    '&[aria-current="page"]': {
      backgroundColor: theme.palette.action.selected,
    },
  },
}))

const ListItemLink = ({ primary, to, ...props }) => {
  const classes = useStyles()

  return (
    <li>
      <ListItem
        className={classes.navlink}
        {...props}
        button
        disableRipple
        component={LocalizedLink}
        to={to}
      >
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

const NavList = () => {
  const { t } = useTranslation('layout')
  return (
    <List>
      <ListItemLink to="/" primary={t('home')} />
      <ListItemLink to="/page-2" primary={t('second')} />
      <ListItemLink to="/mdx" primary="Mdx page" />
    </List>
  )
}

export default NavList
