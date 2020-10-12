import React, { memo } from 'react'
import {
  makeStyles,
  Typography,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from '@material-ui/core'
import { MdxLink } from './components/mdxLink'
import { CodeBlock } from './components/codeBlock'

const useStyles = makeStyles((theme) => ({
  blockquote: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    margin: `1em 0`,
    borderLeft: '6px solid',
    borderLeftColor: theme.palette.primary.light,
    maxWidth: '80vw',
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  list: {
    margin: `${theme.spacing(2)}px 0`,
    paddingLeft: theme.spacing(3),
  },
  listItem: {
    '& ul': {
      margin: 0,
    },
  },
  table: {
    margin: `${theme.spacing(2)}px 0`,
  },
  pre: {
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    margin: `${theme.spacing(2)}px 0`,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    overflowX: `auto`,
    fontSize: '1rem',
    maxWidth: '80vw',
  },
}))

export const MDXComponents = {
  a: MdxLink,
  p: memo((props) => (
    <Typography gutterBottom component="p" variant="body1" {...props} />
  )),
  h1: memo((props) => (
    <Typography gutterBottom component="h1" variant="h1" {...props} />
  )),
  h2: memo((props) => (
    <Typography gutterBottom component="h2" variant="h2" {...props} />
  )),
  h3: memo((props) => (
    <Typography gutterBottom component="h3" variant="h3" {...props} />
  )),
  h4: memo((props) => (
    <Typography gutterBottom component="h4" variant="h4" {...props} />
  )),
  h5: memo((props) => (
    <Typography gutterBottom component="h5" variant="h5" {...props} />
  )),
  h6: memo((props) => (
    <Typography gutterBottom component="h6" variant="h6" {...props} />
  )),
  hr: memo((props) => {
    const classes = useStyles()
    return <Divider className={classes.divider} {...props} />
  }),
  blockquote: memo((props) => {
    const classes = useStyles()
    return <Paper className={classes.blockquote} {...props} />
  }),
  ul: memo((props) => {
    const classes = useStyles()
    return <Typography className={classes.list} component="ul" {...props} />
  }),
  ol: memo((props) => {
    const classes = useStyles()
    return <Typography className={classes.list} component="ol" {...props} />
  }),
  li: memo((props) => {
    const classes = useStyles()
    return (
      <Typography
        gutterBottom
        className={classes.listItem}
        component="li"
        {...props}
      />
    )
  }),
  pre: memo((props) => {
    const classes = useStyles()
    return (
      <Paper component="pre" className={classes.pre}>
        {props.children}
      </Paper>
    )
  }),
  code: CodeBlock,
  table: memo((props) => {
    const classes = useStyles()
    return <Table className={classes.table} {...props} />
  }),
  tr: memo((props) => <TableRow {...props} />),
  td: memo(({ align, ...props }) => (
    <TableCell align={align || undefined} {...props} />
  )),
  tbody: memo((props) => <TableBody {...props} />),
  th: memo(({ align, ...props }) => (
    <TableCell align={align || undefined} {...props} />
  )),
  thead: memo((props) => <TableHead {...props} />),
  input: memo((props) => {
    const { type } = props
    if (type === 'checkbox') {
      return <Checkbox {...props} disabled={false} readOnly={true} />
    }
    return <input {...props} />
  }),
}
