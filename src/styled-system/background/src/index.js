import { system } from '../../core/src'

const config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
}

config.bgImage = config.backgroundImage
config.bgSize = config.backgroundSize
config.bgPosition = config.backgroundPosition
config.bgRepeat = config.backgroundRepeat

export const background = system(config)

export default background
