import { Platform, StyleSheet } from 'react-native';
import { mode } from './../tools';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode(`#fff`, `gray.700`)(props),
    py: 2,
    borderWidth: 1,
    borderColor: mode(`gray.200`, `gray.700`)(props),
    shadow: 1,
    borderRadius: 5,
    transition: {
      initial: { opacity: 0, translateY: -10 },
      animate: {
        opacity: 1,
        translateY: 0,
        transition: { duration: 200 },
      },
      exit: { opacity: 0, translateY: -10, transition: { duration: 150 } },
      style: StyleSheet.absoluteFill,
    },
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
    p: 4,
  }),
};
export const MenuItem = {
  baseStyle: (props: any) => ({
    p: 4,
    outlineWidth: Platform.OS === 'web' ? 0 : undefined,
    _focus: {
      bg: mode(`gray.100`, `gray.600`)(props),
    },
    _pressed: {
      bg: mode(`gray.200`, `gray.500`)(props),
    },
    _icon: {
      size: 4,
      color: mode('gray.500', 'gray.100')(props),
    },
  }),
  defaultProps: {
    _disabled: {
      opacity: 0.5,
    },
  },
};
