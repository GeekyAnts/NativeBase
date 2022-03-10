import { mode } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { colorScheme } = props;
  return {
    borderWidth: 2,
    borderRadius: 'full',
    p: 0.5,
    borderColor: mode('muted.300', 'muted.600')(props),
    bg: mode('muted.50', 'muted.700')(props), // matching background color

    _stack: {
      direction: 'row',
      alignItems: 'center',
      space: 2,
      _web: {
        cursor: props.isDisabled ? 'not-allowed' : 'pointer',
      },
    },
    _interactionBox: {
      borderRadius: 'full',
      size: 3,
      position: 'absolute',
      zIndex: -1,
      _web: {
        transition: 'height 200ms, width 200ms',
        pointerEvents: 'none',
      },
    },
    _icon: {
      color: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props), // matching background color
    },
    _hover: {
      _interactionBox: {
        bg: 'muted.200:alpha.30',
        size: 8,
      },
    },
    _focus: {
      _interactionBox: {
        bg: `${colorScheme}.200:alpha.50`,
        size: 8,
      },
    },
    _focusVisible: {
      _interactionBox: {
        bg: `${colorScheme}.200:alpha.50`,
        size: 8,
      },
    },
    _checked: {
      borderColor: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
    },
    _disabled: {
      opacity: 0.4,
      _interactionBox: {
        bg: 'transparent',
      },
      _icon: {
        bg: 'transparent',
      },
      _stack: {
        opacity: '0.4',
      },
    },
    _invalid: {
      borderColor: mode('error.600', 'error.400')(props),
    },
    _pressed: {
      _interactionBox: {
        bg: `${colorScheme}.200:alpha.50`,
        size: 10,
      },
    },
  };
};

const sizes = {
  lg: {
    _icon: { size: 4 },
    // _interactionBox: { size: 5 },
    _text: { fontSize: 'lg' },
  },
  md: {
    _icon: { size: 3 },
    // _interactionBox: { size: 16 },
    _text: { fontSize: 'md' },
  },
  sm: {
    _icon: { size: 2 },
    // _interactionBox: { size: 3 },
    _text: { fontSize: 'sm' },
  },
};

const defaultProps = {
  defaultIsChecked: false,
  size: 'md',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
