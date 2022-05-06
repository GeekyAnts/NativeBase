import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  return {
    borderRadius: 'full',
    borderWidth: 2,
    borderColor: mode('light.50', 'gray.800')(props),
    bg: mode('gray.600', 'light.100')(props),
    size: 3,
    position: 'absolute',
    right: 0,
    bottom: 0,
  };
}

export default { baseStyle };
