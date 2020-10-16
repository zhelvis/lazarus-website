import React from 'react'
import { Typography } from '@material-ui/core'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'

const BlogTemplate = ({ data }) => {
  const post = data.strapiArticle

  console.log(post.keywords)

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        meta={[
          {
            name: `keywords`,
            content: post.keywords,
          },
        ]}
      />
      <Typography variant="h2">{post.title}</Typography>
      <div>
        <MDXRenderer>
          {post.childStrapiArticleContent.childMdx.body}
        </MDXRenderer>
      </div>
    </>
  )
}

export default BlogTemplate

export const query = graphql`
  query Post($locale: String!, $slug: String!) {
    strapiArticle(locale: { code: { eq: $locale } }, slug: { eq: $slug }) {
      title
      description
      slug
      keywords
      childStrapiArticleContent {
        childMdx {
          body
        }
      }
    }
  }
`
