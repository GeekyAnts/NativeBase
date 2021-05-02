import React from 'react'
import { css } from 'theme-ui'
import Link from './link'

export default props => (
  <Link
    {...props}
    css={theme =>
      css({
        display: 'block',
        fontSize: 1,
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'inherit',
        px: 3,
        py: 2,
        '&:hover': {
          color: 'primary',
        },
        '&.active': {
          color: 'primary',
        },
      })({ ...props, theme })
    }
  />
)
