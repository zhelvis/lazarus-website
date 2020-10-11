import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core'
import { LocaleContext } from './localeProvider'
import { LocalizedLink } from './localizedLink'

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
        component={LocalizedLink}
        to={to}
      >
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

const NavList = ({ handleClose = null }) => {
  const data = useStaticQuery(graphql`
    query {
      posts: allStrapiArticle {
        edges {
          node {
            id
            slug
            title
            locale {
              code
            }
          }
        }
      }
    }
  `)

  const { locale } = useContext(LocaleContext)

  const links = data.posts.edges
    .filter(({ node }) => node.locale.code === locale)
    .map(({ node }) => node)

  return (
    <List>
      {links.map(({ id, slug, title }) => (
        <ListItemLink
          onClick={handleClose}
          key={id}
          to={slug}
          primary={title}
        />
      ))}
    </List>
  )
}

export default NavList
