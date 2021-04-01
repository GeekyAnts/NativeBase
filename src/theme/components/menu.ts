import { mode } from './../tools';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode(`#fff`, `gray.700`)(props),
    py: 2,
    shadow: 9,
    borderRadius: 'sm',
  };
}

export default {
  baseStyle,
};

export const MenuGroup = {
  baseStyle: {
    _title: {
      fontSize: 'md',
    },
    p: 2,
  },
};
export const MenuItem = {
  baseStyle: {
    p: 4,
    _text: {
      fontSize: 'md',
      textAlign: 'left',
    },
  },
  defaultProps: {
    isDisabled: false,
    underlayColor: '#E8EDFB',
    _disabled: {
      opacity: 0.5,
    },
  },
};
