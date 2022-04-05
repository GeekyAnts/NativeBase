import { Platform, StyleSheet } from 'react-native';
import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode(`#fff`, `gray.700`)(props),
    py: 2,
    borderWidth: 1,
    borderColor: mode(`coolGray.200`, `gray.600`)(props),
    borderRadius: 'sm',
    _presenceTransition: {
      initial: { opacity: 0, translateY: -10 },
      animate: {
        opacity: 1,
        translateY: 0,
        transition: { duration: 200 },
      },
      exit: { opacity: 0, translateY: -10, transition: { duration: 150 } },
      style: StyleSheet.absoluteFill,
    },
    _overlay: {},
    _backdrop: {
      bg: 'transparent',
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
      fontWeight: 600,
      textTransform: 'uppercase',
      color: mode(`gray.500`, `gray.300`)(props),
    },
    p: 3,
  }),
};
export const MenuItem = {
  baseStyle: (props: any) => ({
    px: 3,
    py: 2,
    outlineWidth: Platform.OS === 'web' ? 0 : undefined,
    _stack: {
      alignItems: 'center',
      px: 3,
      space: 3,
    },
    _disabled: {
      _text: {
        color: mode('gray.400', 'gray.400')(props),
      },
    },
    _focus: {
      bg: mode(`coolGray.200`, `gray.600`)(props),
    },
    _pressed: {
      bg: mode(`coolGray.300`, `gray.500`)(props),
    },
    _icon: {
      size: 4,
      color: mode('gray.500', 'gray.100')(props),
      opacity: 0,
    },
    _checked: {
      _icon: {
        opacity: 1,
      },
    },
  }),
  defaultProps: {},
};
