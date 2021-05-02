/** @jsx jsx */
import { jsx } from 'theme-ui'
import { AccordionNav } from '@theme-ui/sidenav'
import NavLink from './nav-link'
import Sidebar from './sidebar.mdx'

const components = {
  wrapper: AccordionNav,
  a: NavLink,
}

export default props =>
  <Sidebar
    {...props}
    components={components}
    sx={{
      pb: 4,
      pr: 2,
      ul: {
        listStyle: 'none',
        px: 0,
        my: 0,
      },
      li: {
        '& > ul': {
          pl: 16,
        },
      },
      a: {
        color: 'inherit',
        '&:hover': {
          color: 'primary',
        },
      },
    }}
  />
