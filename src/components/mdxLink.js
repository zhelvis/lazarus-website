import React from 'react'
import { Link } from '@material-ui/core'
import { LocalizedLink } from './localizedLink'

const isHash = (str) => /^#/.test(str)
const isInternal = (to) => /^\/(?!\/)/.test(to)
const isFile = (to) => /\..+$/.test(to)

export const MdxLink = ({ href, children, ...props }) => {
  if (isHash(href) || !isInternal(href) || isFile(href)) {
    return (
      <Link {...props} href={href}>
        {children}
      </Link>
    )
  } else {
    return (
      <Link component={LocalizedLink} {...props} to={href}>
        {children}
      </Link>
    )
  }
}
