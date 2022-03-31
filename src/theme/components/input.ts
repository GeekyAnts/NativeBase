import { transparentize, mode } from '../tools';

const baseStyle = (props: any) => {
  const { primary } = props.theme.colors;
  const focusRing = mode(
    {
      outlineWidth: '1px',
      outlineColor: `${primary[600]}`,
      outlineStyle: 'solid',
    },
    {
      outlineWidth: '1px',
      outlineColor: `${primary[500]}`,
      outlineStyle: 'solid',
    }
  )(props);
  return {
    fontFamily: 'body',
    py: '2',
    px: '3',
    borderRadius: 'sm',
    overflow: 'hidden',
    _disabled: {
      opacity: '0.4',
      _web: {
        disabled: true,
        cursor: 'not-allowed',
      },
    },
    _web: {
      outlineWidth: '0',
      overflow: 'auto',
      lineHeight: 'lg', // Todo: Move to _web inside size so that sm and xs don't have this much height
      style: { outline: 'none' },
      cursor: 'auto',
    },

    _input: {
      bg: 'transparent',
      flex: 1,
    },
    _light: {
      placeholderTextColor: 'text.400',
      color: 'text.900',
      borderColor: 'muted.300',
      _hover: {
        borderColor: 'primary.600',
      },
      _focus: {
        borderColor: 'primary.600',
      },
      _invalid: {
        borderColor: 'error.600',
      },
      _ios: {
        selectionColor: 'coolGray.800',
      },
      _android: {
        selectionColor: 'coolGray.800',
      },
      _disabled: {
        placeholderTextColor: 'muted.700',
        _hover: {
          borderColor: 'muted.300',
        },
      },
      _stack: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        overflow: 'hidden',
        _focus: {
          style: { ...focusRing },
        },
      },
    },
    _dark: {
      placeholderTextColor: 'text.600',
      color: 'text.50',
      borderColor: 'muted.700',
      _hover: {
        borderColor: 'primary.500',
      },
      _focus: {
        borderColor: 'primary.500',
      },
      _invalid: {
        borderColor: 'error.500',
      },
      _ios: {
        selectionColor: 'warmGray.50',
      },
      _android: {
        selectionColor: 'warmGray.50',
      },
      _disabled: {
        placeholderTextColor: 'text.50',
        _hover: {
          borderColor: 'muted.700',
        },
      },
      _stack: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        overflow: 'hidden',
        _focus: {
          style: { ...focusRing },
        },
      },
    },
  };
};

function roundedStyle(props: Record<string, any>) {
  const { theme } = props;
  return {
    borderRadius: 'full',
    borderWidth: '1',
    _focus: {
      bg: transparentize('primary.600', 0.1)(theme),
    },
    _invalid: {
      borderWidth: '2',
    },
  };
}
function outlineStyle(props: Record<string, any>) {
  const { theme } = props;
  return {
    borderWidth: '1',
    _focus: {
      bg: transparentize('primary.600', 0.1)(theme),
    },
    _invalid: {
      borderWidth: '2',
    },
  };
}
function filledStyle(props: Record<string, any>) {
  const { theme } = props;
  return {
    borderWidth: '1',
    _focus: {
      bg: transparentize('primary.600', 0.1)(theme),
    },
    _hover: {
      borderWidth: '1',
      _disabled: {
        borderWidth: 0,
      },
    },
    _invalid: {
      borderWidth: '2',
    },
    _light: {
      bg: 'muted.100',
      borderColor: 'muted.100',
    },
    _dark: {
      bg: 'muted.800',
      borderColor: 'muted.800',
    },
  };
}
function unstyledStyle() {
  return {
    borderWidth: '0',
    _light: {
      _focus: { placeholderTextColor: 'text.900' },
    },
    _dark: {
      _focus: { placeholderTextColor: 'text.50' },
    },
    _focus: {
      bg: 'transparent',
    },
    _stack: {
      _focus: {
        style: {
          outlineWidth: '0',
        },
      },
    },
  };
}
function underlinedStyle() {
  return {
    borderWidth: '0',
    pl: '0',
    borderBottomWidth: '1',
    _stack: {
      _focus: {
        style: {
          outlineWidth: '0',
          boxShadow: '0 1px 0 0 #0891B2',
        },
      },
    },
    _invalid: {
      borderBottomWidth: '2',
    },
    borderRadius: 0,
  };
}

const variants = {
  outline: outlineStyle,
  underlined: underlinedStyle,
  rounded: roundedStyle,
  filled: filledStyle,
  unstyled: unstyledStyle,
};

const sizes = {
  '2xl': { fontSize: 'xl' },
  'xl': { fontSize: 'lg' },
  'lg': { fontSize: 'md' },
  'md': { fontSize: 'sm' },
  'sm': { fontSize: 'xs' },
  'xs': { fontSize: '2xs' },
};

const defaultProps = {
  size: 'sm',
  variant: 'outline',
};

// Input
export const Input = {
  baseStyle,
  defaultProps,
  variants,
  sizes,
};

export default {};
