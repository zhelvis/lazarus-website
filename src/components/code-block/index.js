import React, { useContext } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { makeStyles, Paper } from '@material-ui/core'
import { DarkModeContext } from '../../../plugins/gatsby-plugin-material-ui-dark-mode'
import theme from './theme'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(2)}px 0`,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    overflowX: `auto`,
    fontSize: '1rem',
    maxWidth: '90vw',
  },
}))

const preToCodeBlock = (preProps) => {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === 'code'
  ) {
    const {
      children: codeString,
      className = '',
      ...props
    } = preProps.children.props

    const match = className.match(/language-([\0-\uFFFF]*)/)

    return {
      codeString: codeString.trim(),
      className,
      language: match != null ? match[1] : '',
      ...props,
    }
  }
  return undefined
}

const Code = ({ codeString, language, ...props }) => {
  const { darkMode } = useContext(DarkModeContext)
  const classes = useStyles()

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      theme={darkMode ? theme.dark : theme.light}
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <Paper className={classes.root}>
          <pre className={className}>
            <code>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </Paper>
      )}
    </Highlight>
  )
}

export default (preProps) => {
  const props = preToCodeBlock(preProps)
  if (props) {
    return <Code {...props} />
  }
  return <pre {...preProps} />
}
