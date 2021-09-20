import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    bg: mode(`coolGray.600`, `warmGray.200`)(props),
    p: '2',
    rounded: 'sm',
    shadow: 1,
    _title: {
      color: mode(`warmGray.200`, `coolGray.600`)(props),
      fontWeight: 700,
    },
    _description: {
      color: mode(`warmGray.200`, `coolGray.600`)(props),
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
