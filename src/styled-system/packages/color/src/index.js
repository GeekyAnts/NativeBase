import { system } from '../../core/src'

const config = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
}
config.bg = config.backgroundColor

export const color = system(config)
export default color
