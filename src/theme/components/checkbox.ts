import { mode, transparentize } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { colorScheme, theme } = props;
  return {
    _text: {
      ml: 3,
    },
    _interactionBox: {
      position: 'absolute',
      borderRadius: 'full',
      _hover: {
        bg: transparentize('muted.200', 0.3)(theme),
      },
      _focus: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
      _disabled: {
        bg: 'transaprarent',
      },
      _pressed: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
    },
    _checkbox: {
      borderWidth: 2,
      borderRadius: 'sm',
      borderColor: mode('muted.300', 'muted.600')(props),
      bg: mode('muted.50', 'muted.700')(props), // matching background color
      _checked: {
        borderColor: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
        bg: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
      },
      _disabled: {
        opacity: 0.4,
      },
      _invalid: {
        borderColor: mode('error.600', 'error.400')(props),
      },
    },
    _icon: {
      color: mode(`muted.50`, `muted.800`)(props), // matching background color
    },
  };
};

const sizes = {
  lg: { _icon: { size: 6 }, _text: { fontSize: 'xl' } },
  md: { _icon: { size: 5 }, _text: { fontSize: 'lg' } },
  sm: { _icon: { size: 4 }, _text: { fontSize: 'md' } },
};

const defaultProps = {
  defaultIsChecked: false,
  size: 'sm',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
