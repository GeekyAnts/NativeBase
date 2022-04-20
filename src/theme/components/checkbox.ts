const baseStyle = (props: Record<string, any>) => {
  const { colorScheme: c, theme } = props;
  const { colors } = theme;
  return {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 'sm',
    opacity: 1,
    p: 0.5,

    _light: {
      bg: 'muted.50',
      borderColor: 'muted.400',
      _text: {
        color: 'darkText',
      },
      _icon: {
        color: `muted.50`,
      },
      _checked: {
        borderColor: `${c}.600`,
        bg: `${c}.600`,
        _hover: {
          borderColor: `${c}.700`,
          bg: `${c}.700`,
          _disabled: {
            borderColor: `${c}.600`,
            bg: `${c}.600`,
          },
        },
        _pressed: {
          borderColor: `${c}.800`,
          bg: `${c}.800`,
        },
      },
      _hover: {
        borderColor: 'muted.500',
        _disabled: {
          borderColor: 'muted.400',
        },
      },
      _pressed: {
        borderColor: 'muted.600',
      },
      _invalid: {
        borderColor: 'error.600',
      },
    },

    _dark: {
      bg: 'muted.900',
      borderColor: 'muted.500',
      _text: {
        color: 'lightText',
      },
      _icon: {
        color: `muted.900`,
      },
      _checked: {
        borderColor: `${c}.500`,
        bg: `${c}.500`,
        _hover: {
          borderColor: `${c}.400`,
          bg: `${c}.400`,
          _disabled: {
            borderColor: `${c}.500`,
            bg: `${c}.500`,
          },
        },
        _pressed: {
          borderColor: `${c}.300`,
          bg: `${c}.300`,
        },
      },
      _hover: {
        borderColor: 'muted.400',
        _disabled: {
          borderColor: 'muted.500',
        },
      },
      _pressed: {
        borderColor: 'muted.300',
      },
      _invalid: {
        borderColor: 'error.500',
      },
    },

    _stack: {
      direction: 'row',
      alignItems: 'center',
      space: 2,
      _web: {
        cursor: props.isDisabled ? 'not-allowed' : 'pointer',
      },
    },

    _text: {
      ml: 2,
    },

    _focusVisible: {
      _web: {
        style: {
          outlineWidth: '2px',
          outlineColor: colors[c][400],
          outlineStyle: 'solid',
        },
      },
    },

    _disabled: {
      _web: {
        cursor: 'not-allowed',
      },
      opacity: 0.4,
    },
  };
};

const sizes = {
  lg: { _icon: { size: 5 }, _text: { fontSize: 'xl' } },
  md: { _icon: { size: 4 }, _text: { fontSize: 'lg' } },
  sm: { _icon: { size: 3 }, _text: { fontSize: 'md' } },
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
