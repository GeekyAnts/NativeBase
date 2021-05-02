/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from './link'

export default props => (
  <Link
    {...props}
    sx={{
      display: 'inline-block',
      textDecoration: 'none',
      fontWeight: 'bold',
      px: 3,
      py: 3,
      borderRadius: 6,
      color: 'background',
      bg: 'text',
      '&:hover': {
        bg: 'primary',
      },
    }}
  />
)
