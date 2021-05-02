import React from 'react'
import { hex, inner } from './hex'

const Logo = ({ size = 512 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-18 -18 36 36"
    width={size}
    height={size}
    style={{
      display: 'block',
      overflow: 'visible',
      color: 'inherit',
      fill: 'none',
      stroke: 'currentColor',
    }}
  >
    <g>
      <path d={hex} />
      <path d={inner} strokeWidth="0.25" />
    </g>
  </svg>
)

Logo.defaultProps = {
  ignore: true,
}

export default Logo

/*
// generate a hexagon
const radius = 12
const rad = a => Math.PI * a / 180
const round = n => Math.round(n * 1000) / 1000
const rx = (r, a) => round(r * Math.cos(rad(a)))
const ry = (r, a) => round(r * Math.sin(rad(a)))
const num = n => (n < 0.0000001) ? 0 : n

const offset = 90
const getPoints = length => Array.from({ length })
  .map((n, i) => {
    const a = 360 / length * i - offset
    const x = rx(radius, a)
    const y = ry(radius, a)
    return { x, y }
  })

const points = getPoints(6)

const [ a, b, c, d, e, f ] = points
*/
