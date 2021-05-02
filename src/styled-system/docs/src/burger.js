import React from 'react'

export default ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="none"
    stroke="currentcolor"
    strokeWidth="3"
    style={{
      display: 'block',
      verticalAlign: 'middle',
      overflow: 'visible',
    }}
  >
    <path
      d={`
      M0 2.5 L16 2.5
      M0 8 L16 8
      M0 13.5 L16 13.5
    `}
    />
  </svg>
)
