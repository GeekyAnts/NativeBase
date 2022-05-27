import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  const { primary } = props.theme.colors;
  const focusRing = mode(
    {
      boxShadow: `${primary[400]} 0px 0px 0px 2px`,
    },
    {
      boxShadow: `${primary[500]} 0px 0px 0px 2px`,
    }
  )(props);

  return {
    borderRadius: 'sm', // '4px'
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    _web: {
      _disabled: {
        cursor: 'not-allowed',
      },
      _loading: {
        cursor: 'not-allowed',
      },
      cursor: 'pointer',
      userSelect: 'none',
    },
    _focusVisible: {
      _web: {
        outlineWidth: '0',
        style: { ...focusRing },
      },
    },
    _stack: {
      space: '1.5',
      alignItems: 'center',
    },
    _loading: {
      opacity: '40',
    },
    _disabled: {
      opacity: '40',
    },
    _spinner: {
      size: 'sm',
      focusable: false,
    },
  };
};

function variantGhost({ colorScheme }: Record<string, any>) {
  return {
    _light: {
      _text: {
        color: `${colorScheme}.600`,
      },
      _icon: {
        color: `${colorScheme}.600`,
      },
      _spinner: {
        color: `${colorScheme}.600`,
      },
      _hover: {
        bg: `${colorScheme}.600:alpha.10`,
      },
      _pressed: {
        bg: `${colorScheme}.600:alpha.20`,
      },
    },
    _dark: {
      _text: {
        color: `${colorScheme}.500`,
      },
      _icon: {
        color: `${colorScheme}.500`,
      },
      _spinner: {
        color: `${colorScheme}.500`,
      },
      _hover: {
        bg: `${colorScheme}.500:alpha.10`,
      },
      _pressed: {
        bg: `${colorScheme}.500:alpha.20`,
      },
    },
  };
}

function variantOutline({ colorScheme }: Record<string, any>) {
  return {
    borderWidth: '1px',

    _light: {
      borderColor: 'muted.300',
      _text: {
        color: `${colorScheme}.600`,
      },
      _icon: {
        color: `${colorScheme}.600`,
      },
      _spinner: {
        color: `${colorScheme}.600`,
      },
      _hover: {
        bg: `${colorScheme}.600:alpha.10`,
      },
      _pressed: {
        bg: `${colorScheme}.600:alpha.20`,
      },
    },
    _dark: {
      borderColor: 'muted.700',
      _text: {
        color: `${colorScheme}.500`,
      },
      _icon: {
        color: `${colorScheme}.500`,
      },
      _spinner: {
        color: `${colorScheme}.500`,
      },
      _hover: {
        bg: `${colorScheme}.500:alpha.10`,
      },
      _pressed: {
        bg: `${colorScheme}.500:alpha.20`,
      },
    },
  };
}

function variantSolid({ colorScheme }: Record<string, any>) {
  return {
    _text: {
      color: 'text.50',
    },
    _icon: {
      color: 'text.50',
    },
    _spinner: {
      color: 'text.50',
    },

    _light: {
      bg: `${colorScheme}.600`,
      _hover: {
        bg: `${colorScheme}.700`,
      },
      _pressed: {
        bg: `${colorScheme}.800`,
      },
    },
    _dark: {
      bg: `${colorScheme}.600`,
      _hover: {
        bg: `${colorScheme}.700`,
      },
      _pressed: {
        bg: `${colorScheme}.800`,
      },
    },
  };
}

function variantSubtle({ colorScheme }: Record<string, any>) {
  return {
    _text: {
      color: `${colorScheme}.900`,
    },
    _icon: {
      color: `${colorScheme}.900`,
    },
    _spinner: {
      color: `${colorScheme}.900`,
    },

    _light: {
      bg: `${colorScheme}.100`,
      _hover: {
        bg: `${colorScheme}.200`,
      },
      _pressed: {
        bg: `${colorScheme}.300`,
      },
    },
    _dark: {
      bg: `${colorScheme}.300`,
      _hover: {
        bg: `${colorScheme}.200`,
      },
      _pressed: {
        bg: `${colorScheme}.100`,
      },
    },
  };
}

function variantLink({ colorScheme }: Record<string, any>) {
  return {
    _icon: {
      color: `${colorScheme}.600`,
    },
    _spinner: {
      color: `${colorScheme}.600`,
    },

    _hover: {
      _text: {
        textDecorationLine: 'underline',
      },
    },
    _pressed: {
      _text: {
        textDecorationLine: 'underline',
      },
    },
    _light: {
      _text: {
        color: `${colorScheme}.600`,
      },
      _pressed: {
        _text: {
          color: `${colorScheme}.800`,
        },
      },
    },
    _dark: {
      _text: {
        color: `${colorScheme}.500`,
      },
      _pressed: {
        _text: {
          color: `${colorScheme}.300`,
        },
      },
    },
  };
}

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  subtle: variantSubtle,
  link: variantLink,
  unstyled: {},
};

const sizes = {
  lg: {
    px: '3',
    py: '3',
    _text: {
      fontSize: 'md',
    },
    _icon: {
      size: 'md',
    },
  },
  md: {
    px: '3',
    py: '2.5',
    _text: {
      fontSize: 'sm',
    },
    _icon: {
      size: 'sm',
    },
  },
  sm: {
    px: '3',
    py: '2',
    _text: {
      fontSize: 'xs',
    },
    _icon: {
      size: 'sm',
    },
  },
  xs: {
    px: '3',
    py: '2',
    _text: {
      fontSize: '2xs',
    },
    _icon: {
      size: 'xs',
    },
  },
};

const defaultProps = {
  variant: 'solid',
  size: 'md',
  colorScheme: 'primary',
};

export const ButtonGroup = {
  baseStyle: { direction: 'row' },
  defaultProps: { space: 2 },
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
