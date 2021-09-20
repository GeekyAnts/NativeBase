import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    bg: mode(`gray.700`, `gray.300`)(props),
    p: '3',
    rounded: 'sm',
    shadow: 1,
    _title: {
      color: mode(`gray.300`, `gray.700`)(props),
      fontWeight: 700,
    },
    _description: {
      color: mode(`gray.300`, `gray.700`)(props),
      fontWeight: 400,
    },
    _closeIcon: {
      size: 4,
    },
  };
};

export const Toast = {
  baseStyle,
  defaultProps: {},
};
