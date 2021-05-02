const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== 'Mdx') return

  const value = createFilePath({ node, getNode })
  actions.createNodeField({
    name: 'slug',
    node,
    value,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.log(result.errors)
    return
  }
  const pages = result.data.allMdx.edges.map(edge => edge.node)

  pages.forEach(page => {
    actions.createPage({
      path: page.fields.slug,
      component: require.resolve('./src/doc.js'),
      context: {
        id: page.id,
      },
    })
  })
}
