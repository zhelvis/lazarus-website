import React from 'react'
import { useTranslation } from 'react-i18next'

import SEO from '../components/seo'

const NotFoundPage = () => {
  const { t } = useTranslation('404')

  return (
    <React.Fragment>
      <SEO title={t('title')} description={t('description')} />
      <h1>404</h1>
    </React.Fragment>
  )
}

export default NotFoundPage
