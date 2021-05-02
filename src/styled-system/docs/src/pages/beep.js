/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Logo from '../logo'
import LogoWhite from '../logo/white'

export default props => (
  <>
    <LogoWhite />
    <Logo />
    <div
      sx={{
        p: 4,
        mt: 4,
        bg: 'black',
        color: 'white',
      }}>
      <Logo />
    </div>
  </>
)
