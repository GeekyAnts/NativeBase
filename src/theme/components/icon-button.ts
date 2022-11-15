const baseStyle = (props: any) => {
  const { colorScheme } = props;
  const colors = props.theme.colors;

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
    _focus: {
      borderColor: `${colorScheme}.400`,
    },
    _focusVisible: {
      _web: {
        style: {
          outlineWidth: '2px',
          outlineColor: `${colors[colorScheme][600]}`,
          outlineStyle: 'solid',
        },
      },
    },
    _loading: {
      opacity: '40',
    },
    _disabled: {
      opacity: '40',
    },
    _dark: {
      _focusVisible: {
        _web: {
          style: {
            outlineWidth: '2px',
            outlineColor: `${colors[colorScheme][500]}`,
            outlineStyle: 'solid',
          },
        },
      },
    },
  };
};

function variantGhost({ colorScheme }: Record<string, any>) {
  return {
    _icon: {
      color: `${colorScheme}.600`,
    },
    _hover: {
      bg: `${colorScheme}.600:alpha.10`,
    },
    _pressed: {
      bg: `${colorScheme}.600:alpha.20`,
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
    borderColor: `${colorScheme}.600`,
    _icon: {
      color: `${colorScheme}.600`,
    },
    _hover: {
      bg: `${colorScheme}.700`,
      _icon: {
        color: 'muted.50',
      },
    },
    _pressed: {
      bg: `${colorScheme}.800`,
      _icon: {
        color: 'muted.50',
      },
    },
    _focus: {
      bg: `${colorScheme}.600`,
      _icon: {
        color: 'muted.50',
      },
    },
    _dark: {
      borderColor: `${colorScheme}.500`,
      _icon: {
        color: `${colorScheme}.500`,
      },
      _hover: {
        bg: `${colorScheme}.400`,
        _icon: {
          color: 'muted.900',
        },
      },
      _pressed: {
        bg: `${colorScheme}.300`,
        _icon: {
          color: 'muted.900',
        },
      },
      _focus: {
        bg: `${colorScheme}.500`,
        _icon: {
          color: 'muted.900',
        },
      },
    },
  };
}

function variantSolid({ colorScheme }: Record<string, any>) {
  return {
    bg: `${colorScheme}.600`,
    _hover: {
      bg: `${colorScheme}.700`,
    },
    _pressed: {
      bg: `${colorScheme}.800`,
    },
    _icon: {
      color: 'muted.50',
    },
    _dark: {
      bg: `${colorScheme}.500`,
      _hover: {
        bg: `${colorScheme}.400`,
      },
      _pressed: {
        bg: `${colorScheme}.300`,
        _icon: {
          color: 'muted.900',
        },
      },
      _icon: {
        color: 'muted.900',
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
    bg: `${colorScheme}.100`,
    _hover: {
      bg: `${colorScheme}.200`,
    },
    _pressed: {
      bg: `${colorScheme}.300`,
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

function variantUnstyled() {
  return {
    _icon: {
      color: 'muted.900',
    },
    _dark: {
      _icon: {
        color: 'muted.50',
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
  unstyled: variantUnstyled,
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
