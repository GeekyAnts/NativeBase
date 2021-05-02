import React from 'react'
import { Location } from '@reach/router'
import { Pagination } from '@theme-ui/sidenav'
import Sidebar from './sidebar.mdx'

export default props =>
  <Location
    children={({ location }) => (
      <Sidebar
        {...props}
        pathname={location.pathname}
        components={{
          wrapper: Pagination,
        }}
      />
    )}
  />
