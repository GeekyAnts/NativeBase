import React from 'react'
import Logo from './index'

export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    width={640}
    height={640}
    style={{
      display: 'block',
      overflow: 'visible',
      color: 'black',
    }}
  >
    <rect fill="white" width={640} height={640} />
    <g transform="translate(64 64)">
      <Logo />
    </g>
  </svg>
)
