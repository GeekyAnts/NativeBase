const baseStyle = (props: Record<string, any>) => {
  const { colorScheme: c, theme } = props;
  const { colors } = theme;
  return {
    borderWidth: 2,
    borderRadius: 'full',
    p: 1,

    _light: {
      bg: 'muted.50',
      borderColor: 'muted.400',

      _checked: {
        borderColor: `${c}.600`,
        _icon: {
          color: `${c}.600`,
        },
        _hover: {
          borderColor: `${c}.700`,
          _icon: { color: `${c}.700` },
          _disabled: {
            borderColor: `${c}.600`,
            _icon: {
              color: `${c}.600`,
            },
          },
        },
        _pressed: {
          borderColor: `${c}.800`,
          _icon: { color: `${c}.800` },
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

      _checked: {
        borderColor: `${c}.500`,
        _icon: {
          color: `${c}.500`,
        },
        _hover: {
          borderColor: `${c}.400`,
          _icon: { color: `${c}.400` },
          _disabled: {
            borderColor: `${c}.500`,
            _icon: {
              color: `${c}.500`,
            },
          },
        },
        _pressed: {
          borderColor: `${c}.300`,
          _icon: { color: `${c}.300` },
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

    _disabled: {
      opacity: '0.6',
      _icon: {
        bg: 'transparent',
      },
      _stack: {
        opacity: '0.6',
      },
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
  };
};

const sizes = {
  lg: {
    _icon: { size: 4 },
    _text: { fontSize: 'lg' },
  },
  md: {
    _icon: { size: 3 },
    _text: { fontSize: 'md' },
  },
  sm: {
    _icon: { size: 2 },
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
