import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from './mdxComponents'

import Layout from './components/layout'

import { LocaleProvider } from './components/localeProvider'

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={MDXComponents}>{element}</MDXProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <LocaleProvider value={props.pageContext}>
      <Layout {...props}>{element}</Layout>
    </LocaleProvider>
  )
}
