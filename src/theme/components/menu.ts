import { StyleSheet } from 'react-native';

const baseStyle = {
  py: 2,
  borderRadius: 'sm',
  shadow: 6,
  bg: 'muted.50',
  _dark: {
    bg: 'muted.800',
  },
  _presenceTransition: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 200 },
    },
    exit: { opacity: 0, transition: { duration: 150 } },
    style: StyleSheet.absoluteFill,
  },
  _overlay: {
    unmountOnExit: true,
  },
  _backdrop: {
    bg: 'transparent',
  },
};

export default {
  baseStyle,
};

export const MenuGroup = {
  baseStyle: {
    _title: {
      fontSize: 'xs',
      textTransform: 'uppercase',
      color: 'text.500',
      _dark: {
        color: 'text.400',
      },
    },
    p: 3,
  },
};
export const MenuItem = {
  baseStyle: {
    px: 3,
    py: 2,
    _web: {
      outlineWidth: 0,
    },
    _stack: {
      alignItems: 'center',
      px: 3,
      space: 3,
    },
    _icon: {
      size: 4,
      opacity: 0,
      color: 'muted.500',
    },
    _text: {
      color: 'text.900',
    },
    _disabled: {
      _text: {
        color: 'text.400',
      },
    },
    _hover: {
      bg: 'muted.200',
    },
    _focus: {
      bg: 'muted.300',
    },
    _pressed: {
      bg: 'muted.400',
    },
    _focusVisible: {
      _web: {
        outlineWidth: '0',
        style: { boxShadow: `none` },
        bg: 'muted.300',
      },
    },
    _dark: {
      _text: {
        color: 'text.50',
      },
      _disabled: {
        _text: {
          color: 'text.600',
        },
      },
      _hover: {
        bg: 'muted.700',
      },
      _focus: {
        bg: 'muted.600',
      },
      _pressed: {
        bg: 'muted.500',
      },

      _icon: {
        color: 'muted.400',
      },
      _focusVisible: {
        _web: {
          outlineWidth: '0',
          style: { boxShadow: `none` },
          bg: 'muted.600',
        },
      },
    },
    _checked: {
      _icon: {
        opacity: 1,
      },
    },
  },
  defaultProps: {},
};
