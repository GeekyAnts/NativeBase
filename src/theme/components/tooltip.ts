import { mode } from '../tools';

const baseStyle = (props: any) => {
  return {
    bg: mode(`gray.700`, `gray.300`)(props),
    py: 1,
    px: 2,
    rounded: 'sm',
    shadow: 1,
    _text: {
      color: mode(`gray.300`, `gray.700`)(props),
      fontSize: 'sm',
    },
  };
};

export const Tooltip = {
  baseStyle,
};
