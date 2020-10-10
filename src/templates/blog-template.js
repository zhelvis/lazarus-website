import React from 'react'
import { Typography } from '@material-ui/core'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogTemplate = ({ data, pageContext }) => {
  return (
    <Layout originalPath={pageContext.originalPath}>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <Typography variant="h2">{data.mdx.frontmatter.title}</Typography>
      <div>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query Post($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
        description
      }
      body
    }
  }
`
