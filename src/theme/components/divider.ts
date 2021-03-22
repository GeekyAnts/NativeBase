import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  return {
    borderTopWidth: 1,
    bg: mode('gray.600', 'gray.200')(props),
  };
}

export default {
  baseStyle,
};
