import { mode, transparentize } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { colorScheme, theme } = props;
  return {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 'full',
    p: '0.5',
    borderColor: mode('muted.300', 'muted.600')(props),
    bg: mode('muted.50', 'muted.700')(props), // matching background color
    _web: {
      cursor: 'pointer',
    },
    _text: {
      ml: 2,
      _dark: {
        color: 'lightText',
      },
      _light: {
        color: 'darkText',
      },
    },
    _interactionBox: {
      position: 'absolute',
      zIndex: -1,
      borderRadius: 'full',
      w: '100%',
      h: '100%',
      pointerEvents: 'none',
    },
    _icon: {
      color: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props), // matching background color
    },
    _hover: {
      _interactionBox: {
        bg: transparentize('muted.200', 0.3)(theme),
        w: '200%',
        h: '200%',
      },
    },
    _focus: {
      _interactionBox: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
    },
    _focusVisible: {
      _interactionBox: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
        w: '200%',
        h: '200%',
      },
    },
    _checked: {
      _interactionBox: {
        borderColor: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
      },
      borderColor: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
    },
    _disabled: {
      _web: {
        cursor: 'not-allowed',
      },
      opacity: 0.4,
      _interactionBox: {
        bg: 'transparent',
      },
      _icon: {
        bg: 'transparent',
      },
    },
    _invalid: {
      borderColor: mode('error.600', 'error.400')(props),
    },
    _pressed: {
      _interactionBox: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
        w: '200%',
        h: '200%',
      },
    },
  };
};

const sizes = {
  lg: { _icon: { size: 4 }, _text: { fontSize: 'lg' } },
  md: { _icon: { size: 3 }, _text: { fontSize: 'md' } },
  sm: { _icon: { size: 2 }, _text: { fontSize: 'sm' } },
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
