import React from 'react'

export const hex = `
  M0 -16
  L-14 -8
  L -14 8
  L 0 16
  L 14 8
  L 14 -8
  L 0 -16
  z
`
export const inner = `
M0 -16
L 0 0
M-14 8
L0 0
L14 8
`

const pattern = (
  <pattern
    id="hex"
    patternUnits="userSpaceOnUse"
    patternTransform="translate(-3.5 0)"
    viewBox="-14 -16 28 48"
    width="56"
    height="96"
  >
    <g fill="none" strokeWidth={1} stroke="currentcolor">
      <path d={hex} />
      <path d={hex} transform="translate(14 24)" />
      <g strokeWidth={1} opacity="0.5">
        <path d={inner} />
        <path d={inner} transform="translate(14 24)" />
        <path d={inner} transform="translate(-14 24)" />
      </g>
    </g>
  </pattern>
)

export default ({ height = 384 }) => (
  <svg
    width='100%'
    height={height}
    style={{
      overflow: 'visible',
    }}>
    <defs>{pattern}</defs>
    <rect
      width="100%"
      height="100%"
      fill="url(#hex)"
    />
  </svg>
)
