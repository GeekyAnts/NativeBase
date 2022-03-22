import { mode } from './../tools';

const baseStyle = (props: any) => {
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
      cursor: props.isDisabled
        ? 'not-allowed'
        : props.isLoading
        ? 'default'
        : 'pointer',
    },
    _focusVisible: {
      _web: {
        outlineWidth: '0',
        style: { ...focusRing },
      },
    },
    _loading: {
      opacity: '40',
    },
    _disabled: {
      opacity: '40',
    },
  };
};

function variantGhost({ colorScheme }: Record<string, any>) {
  return {
    _light: {
      _icon: {
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
      _icon: {
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
      _icon: {
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
      _icon: {
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
    _icon: {
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
    _spinner: {
      color: `${colorScheme}.600`,
    },

    _light: {
      _icon: {
        color: `${colorScheme}.600`,
      },
      _hover: {
        _icon: {
          color: `${colorScheme}.700`,
        },
      },
      _pressed: {
        _icon: {
          color: `${colorScheme}.800`,
        },
      },
    },
    _dark: {
      _icon: {
        color: `${colorScheme}.500`,
      },
      _hover: {
        _icon: {
          color: `${colorScheme}.400`,
        },
      },
      _pressed: {
        _icon: {
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
    p: '3',
    _icon: {
      size: 'lg',
    },
  },
  md: {
    p: '2.5',
    _icon: {
      size: 'md',
    },
  },
  sm: {
    p: '2',
    _icon: {
      size: 'sm',
    },
  },
  xs: {
    p: '1.5',
    _icon: {
      size: 'xs',
    },
  },
};

const defaultProps = {
  variant: 'ghost',
  size: 'md',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
