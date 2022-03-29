import { transparentize } from '../tools';

const baseStyle = () => {
  // const { primary } = props.theme.colors;
  // Todo: Resolve boxShadow Color or Provide some alternatiove prop for user to change focusRing color
  // // Todo: Update to support similar focusRing on iOS , Android and Web
  // const focusRing =
  //   Platform.OS === 'web'
  //     ? {
  //         boxShadow:
  //           props.variant !== 'underlined'
  //             ? `${primary[400]} 0px 0px 0px 1px`
  //             : `${primary[400]} 0px 1px 0px 0px`,
  //         zIndex: 1,
  //       }
  //     : {
  //         // boxShadow: `${useToken('colors', ['primary.400'])} 0px 0px 0px 1px`,
  //       };

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
      outline: 'none',
      cursor: 'auto',
    },
    _stack: {
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between',
      overflow: 'hidden',
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
    },
  };
};

function roundedStyle(props: Record<string, any>) {
  const { theme } = props;
  return {
    borderRadius: 'full',
    borderWidth: '1',
    _focus: {
      borderWidth: '2',
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
      borderWidth: '2',
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
    borderWidth: '0',
    borderColor: 'transparent',
    _focus: {
      borderWidth: '2',
      bg: transparentize('primary.600', 0.1)(theme),
    },
    _hover: {
      borderWidth: '1',
    },
    _invalid: {
      borderWidth: '2',
    },
    _light: {
      bg: 'muted.100',
    },
    _dark: {
      bg: 'muted.800',
    },
  };
}
function unstyledStyle() {
  return {
    borderWidth: '0',
  };
}
function underlinedStyle() {
  return {
    borderWidth: '0',
    pl: '0',
    borderBottomWidth: '1',
    _focus: {
      borderBottomWidth: '2',
      fontWeight: '500',
    },
    _invalid: {
      borderBottomWidth: '2',
    },
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
