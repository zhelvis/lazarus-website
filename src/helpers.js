exports.getLocalizedPath = (defaultLang, locale, path) => {
  if (locale === defaultLang) return path

  const [, base] = path.split(`/`)

  if (base === locale) return path

  return `/${locale}${path}`
}
