import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

const isHash = str => /^#/.test(str)

export const Link = ({ href, ...props }) =>
  isHash(href) || isAbsoluteURL(href) ? (
    // eslint-disable-next-line
    <a {...props} href={href} />
  ) : (
    <GatsbyLink {...props} to={href} activeClassName="active" />
  )

export default Link
