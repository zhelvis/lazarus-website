import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from './mdxComponents'

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={MDXComponents}>{element}</MDXProvider>
}
