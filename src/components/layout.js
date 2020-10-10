import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Typography,
  Hidden,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

import ThemeSwitcher from './themeSwitcher'
import LanguageSwitcher from './languageSwitcher'
import NavList from './navigation'

const drawerWidth = '18em'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const Layout = ({ children, originalPath = '/' }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden implementation="css" mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography className={classes.title} variant="h6">
            Gatsby MUI Starter
          </Typography>
          <ThemeSwitcher />
          <LanguageSwitcher originalPath={originalPath} />
        </Toolbar>
      </AppBar>
      <Hidden implementation="css" smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <NavList />
          </div>
        </Drawer>
      </Hidden>
      <Hidden implementation="css" mdUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{ classes: { root: classes.drawerPaper } }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <NavList />
          </div>
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}

export default Layout
