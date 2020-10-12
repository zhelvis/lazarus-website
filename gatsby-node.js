const crypto = require(`crypto`)

const { getLocalizedPath } = require('./src/helpers')

exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  if (node.internal.type === 'StrapiArticle') {
    const newNode = {
      id: createNodeId(`StrapiArticleContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || ' ',
        type: 'StrapiArticleContent',
        mediaType: 'text/markdown',
        contentDigest: crypto
          .createHash('md5')
          .update(node.content || ' ')
          .digest('hex'),
      },
    }
    actions.createNode(newNode)
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogTemplate = require.resolve(`./src/templates/blog-template.js`)

  const result = await graphql(`
    {
      blog: allStrapiArticle(sort: { fields: published_at, order: DESC }) {
        edges {
          node {
            locale {
              code
              default
            }
            slug
          }
        }
      }
      locales: allStrapiLocale {
        nodes {
          localName
          langDir
          name
          hrefLang
          default
          dateFormat
          code
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  const blogPosts = result.data.blog.edges

  const locales = result.data.locales.nodes

  const defaultLocale = locales.filter((locale) => locale.default)[0].code

  console.log(defaultLocale)

  blogPosts.forEach(({ node }) => {
    const { locale, slug } = node

    const localizedPath = getLocalizedPath(defaultLocale, locale.code, slug)

    console.log(localizedPath)

    createPage({
      path: localizedPath,
      component: blogTemplate,
      context: {
        slug,
        locale: locale.code,
        defaultLocale,
        locales,
      },
    })
  })
}
