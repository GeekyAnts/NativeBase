import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  return {
    borderTopWidth: 1,
    bg: mode('muted.600', 'muted.200')(props),
  };
}

export default {
  baseStyle,
  defaultProps: {
    orientation: 'horizontal',
  },
};
