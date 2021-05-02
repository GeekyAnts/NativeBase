/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'

const headings = ['h2', 'h3']
const getLinks = children =>
  React.Children.toArray(children).reduce((a, child) => {
    if (!headings.includes(child.props.mdxType)) return a
    const item = {
      text: child.props.children,
      href: '#' + child.props.id,
    }
    const level = headings.indexOf(child.props.mdxType)
    if (level === 0) {
      return [...a, item]
    }
    const previous = a[a.length - 1]
    if (Array.isArray(previous)) {
      return [...a.slice(0, a.length - 1), [...previous, item]]
    }
    return [...a, [item]]
  }, [])

const List = ({ links }) => (
  <Styled.ul
    sx={{
      pl: 2,
      listStyle: 'none',
    }}
  >
    {links.map((link, i) =>
      Array.isArray(link) ? (
        <List key={i} links={link} />
      ) : (
        <Styled.li key={link.href}>
          <Styled.a href={link.href}>{link.text}</Styled.a>
        </Styled.li>
      )
    )}
  </Styled.ul>
)

const TOC = ({ links }) => (
  <div
    sx={{
      px: 2,
      ml: 1,
      fontSize: 1,
      float: 'right',
    }}
  >
    <List links={links} />
  </div>
)

export default props => {
  if (!props.toc) return <>{props.children}</>

  const links = getLinks(props.children)
  return (
    <>
      <TOC links={links} />
      {props.children}
    </>
  )
}
