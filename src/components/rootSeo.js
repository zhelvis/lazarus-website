import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql, withPrefix } from 'gatsby'

export const RootSEO = ({ location, pageContext }) => {
  const { locale, locales, defaultLocale, slug, hrefLang } = pageContext
  console.log(locales)
  const data = useStaticQuery(graphql`
    query LocalizationSEOQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const defaultSiteUrl = data.site.siteMetadata.siteUrl
  const { pathname } = location

  return (
    <Helmet>
      <html lang={locale} />
      <link rel="alternate" hrefLang="x-default" href={defaultSiteUrl} />
      <link
        rel="alternate"
        hrefLang={hrefLang}
        href={`${defaultSiteUrl}${
          pathname === withPrefix(`/`) ? `` : pathname
        }`}
      />
      {locales.map((l) => {
        let href

        if (l.code === locale) return null

        if (l.code === defaultLocale) {
          href = `${defaultSiteUrl}${slug === withPrefix(`/`) ? `` : slug}`
        } else {
          href = `${defaultSiteUrl}${withPrefix(
            `/${l.code}${pageContext.slug}`
          )}`
        }

        return (
          <link
            key={l.code}
            rel="alternate"
            hrefLang={l.hrefLang}
            href={href}
          />
        )
      })}
      <meta property="og:locale" content={hrefLang.replace(`-`, `_`)} />
      {locales.map((l) => {
        if (l.code === locale) return null
        return (
          <meta
            key={l.code}
            property="og:locale:alternate"
            content={l.hrefLang.replace(`-`, `_`)}
          />
        )
      })}
    </Helmet>
  )
}
