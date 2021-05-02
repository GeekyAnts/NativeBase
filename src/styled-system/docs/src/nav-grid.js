/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Sidebar from './sidebar.mdx'

const flattenLinks = children =>
  React.Children.toArray(children).reduce((acc, child) => {
    const type = child.props && child.props.mdxType
    const parent = child.props && child.props.parentName
    if (type === 'a') {
      return [...acc, child]
    }
    else if (!child.props || !child.props.children) return acc
    else if (parent === 'li') return acc
    return React.Children.toArray([
      ...acc,
      ...flattenLinks(child.props.children),
    ])
  }, [])

const wrapper = props => {
  const links = flattenLinks(props.children)

  return (
    <div
      sx={{
        display: 'grid',
        gridGap: 2,
        gridTemplateColumns: 'repeat(auto-fit, minmax(192px, 1fr))',
        a: {
          fontWeight: 'bold',
          fontSize: 1,
          color: 'inherit',
          textDecoration: 'none',
          ':hover,:focus': {
            color: 'primary',
          }
        }
      }}>
      {links}
    </div>
  )
}

export default () =>
  <Sidebar
    components={{ wrapper }}
  />
