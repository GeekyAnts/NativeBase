import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  return {
    borderWidth: 2,
    borderColor: mode('light.50', 'gray.800')(props),
    bg: mode('gray.600', 'light.100')(props),
    space: -4,
  };
}

export default { baseStyle };
