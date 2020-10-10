import React from 'react'
import { Typography } from '@material-ui/core'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogTemplate = ({ data, pageContext }) => {
  console.log(data)
  return (
    <Layout originalPath={pageContext.originalPath}>
      <SEO
        title={data.strapiArticle.title}
        description={data.strapiArticle.description}
      />
      <Typography variant="h2">{data.strapiArticle.title}</Typography>
      <div>
        <MDXRenderer>
          {data.childStrapiArticleContent.childMdx.body}
        </MDXRenderer>
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query Post($locale: String!, $slug: String!) {
    strapiArticle(language: { eq: $locale }, slug: { eq: $slug }) {
      title
      description
      slug
      childStrapiArticleContent {
        childMdx {
          body
        }
      }
    }
  }
`
