import { Platform } from 'react-native';
import { mode } from './../tools';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode(`#fff`, `gray.700`)(props),
    py: 2,
    borderWidth: 1,
    borderColor: mode(`gray.200`, `gray.700`)(props),
    shadow: 1,
    borderRadius: 8,
  };
}

export default {
  baseStyle,
};

export const MenuGroup = {
  baseStyle: (props: any) => ({
    _title: {
      fontSize: 'xs',
      fontWeight: 500,
      textTransform: 'uppercase',
      color: mode(`gray.500`, `gray.300`)(props),
    },
    px: 5,
    py: 4,
  }),
};
export const MenuItem = {
  baseStyle: (props: any) => ({
    p: 4,
    _text: {
      fontSize: 'md',
      textAlign: 'left',
    },
    outlineWidth: Platform.OS === 'web' ? 0 : undefined,
    _hover: {
      bg: mode(`gray.100`, `gray.600`)(props),
    },
    _focus: {
      bg: mode(`gray.100`, `gray.600`)(props),
    },
    _pressed: {
      bg: mode(`gray.200`, `gray.500`)(props),
    },
  }),
  defaultProps: {
    isDisabled: false,
    underlayColor: '#E8EDFB',
    _disabled: {
      opacity: 0.5,
    },
  },
};
