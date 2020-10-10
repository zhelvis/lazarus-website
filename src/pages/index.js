import React from 'react'
import { useTranslation } from 'react-i18next'
import { LocalizedLink } from 'gatsby-theme-i18n'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ pageContext }) => {
  const { t } = useTranslation('index')

  return (
    <Layout originalPath={pageContext.originalPath}>
      <SEO title={t('title')} description={t('description')} />
      <h1>{t('hello')}</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <LocalizedLink to="/page-2/">{t('link')}</LocalizedLink>
    </Layout>
  )
}

export default IndexPage
