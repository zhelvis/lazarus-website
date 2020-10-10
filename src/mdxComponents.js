import React from 'react'
import { Typography } from '@material-ui/core'

const Text = (variant) => (props) => <Typography variant={variant} {...props} />

export const MDXComponents = {
  p: Text('body1'),
}
