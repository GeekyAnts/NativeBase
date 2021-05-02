import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Layout from './layout'

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      body
    }
  }
`

export default props => {
  const { body } = props.data.mdx
  return <MDXRenderer children={body} />
}
