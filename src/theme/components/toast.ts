import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    bg: mode(`gray.700`, `gray.300`)(props),
    py: 2,
    px: 3,
    rounded: 'md',
    shadow: 1,
    _title: {
      color: mode(`gray.300`, `gray.700`)(props),
      fontWeight: 500,
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
