import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { makeStyles, Paper } from '@material-ui/core'
import darkTheme from 'prism-react-renderer/themes/nightOwl'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(2)}px 0`,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    overflowX: `auto`,
    fontSize: '1rem',
    maxWidth: '90vw',
    backgroundColor: '#333',
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
  const classes = useStyles()

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      theme={darkTheme}
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

export const CodeBlock = (preProps) => {
  const props = preToCodeBlock(preProps)
  if (props) {
    return <Code {...props} />
  }
  return <pre {...preProps} />
}
