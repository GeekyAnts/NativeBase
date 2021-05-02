/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import Logo from '../logo'

export default props => (
  <div
    sx={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
    <div sx={{ p: 4, mb: 5 }}>
      <Link
        to="/"
        title="Home"
        sx={{
          display: 'block',
          color: 'inherit',
        }}
      >
        <Logo size={256} />
      </Link>
      <h1 sx={{ m: 0, mt: 3, fontSize: 6 }}>
        404
      </h1>
      <div sx={{ fontSize: 5, fontWeight: 'bold' }}>
        Page not found
      </div>
    </div>
  </div>
)
