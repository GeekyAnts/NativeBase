import React from 'react'
import Link from '../link'
import wrapper from '../toc-wrapper'

const heading = Tag => ({ id, ...props }) => (
  <Tag id={id} {...props}>
    <a href={'#' + id}>{props.children}</a>
  </Tag>
)

export default {
  wrapper,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  a: Link,
}
