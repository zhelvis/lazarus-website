import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { LocaleContext } from './localeProvider'

const getlocalizedPath = (defaultLang, locale, path) => {
  if (locale === defaultLang) return path

  const [, base] = path.split(`/`)

  if (base === locale) return path

  return `/${locale}${path}`
}

export const LocalizedLink = ({ to, language, ...props }) => {
  const { defaultLocale, locale } = useContext(LocaleContext)

  const linkLocale = language || locale

  return (
    <Link {...props} to={getlocalizedPath(defaultLocale, linkLocale, to)} />
  )
}
