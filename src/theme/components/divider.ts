import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  const { orientation } = props;
  return {
    borderTopWidth: orientation === 'vertical' ? 0 : 1,
    borderLeftWidth: orientation === 'vertical' ? 1 : 0,
    bg: mode('muted.600', 'muted.200')(props),
  };
}

export default {
  baseStyle,
  defaultProps: {
    orientation: 'horizontal',
  },
};
