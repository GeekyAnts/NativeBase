import { transparentize } from '../tools';
import type { InterfaceInputProps } from '../../components/primitives/Input/types';
const baseStyle = (props: InterfaceInputProps & { theme: any }) => {
  const { primary, error } = props.theme.colors;

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
      w: '100%',
      h: '100%',
    },
    placeholderTextColor: 'text.400',
    color: 'text.900',
    borderColor: 'muted.300',
    _stack: {
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between',
      overflow: 'hidden',
    },
    _hover: {
      borderColor: 'primary.600',
    },
    _focus: {
      borderColor: 'primary.600',
      _hover: { borderColor: 'primary.600' },
      _invalid: {
        borderColor: 'error.600',
        _hover: { borderColor: 'error.600' },
        _stack: {
          style: {
            outlineWidth: '0',
            boxShadow: `0 0 0 1px ${error[600]}`,
          },
        },
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
        style: {
          outlineWidth: '0',
          boxShadow: `0 0 0 1px ${primary[600]}`,
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
        _hover: { borderColor: 'primary.500' },
        _stack: {
          style: {
            outlineWidth: '0',
            boxShadow: `0 0 0 1px ${primary[500]}`,
          },
        },
      },
      _invalid: {
        borderColor: 'error.500',
        _stack: {
          style: {
            outlineWidth: '0',
            boxShadow: `0 0 0 1px ${error[500]}`,
          },
        },
        _hover: { borderColor: 'error.500' },
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
      },
    },
  };
};

function roundedStyle(props: InterfaceInputProps & { theme: any }) {
  const { theme } = props;
  return {
    borderRadius: 'full',
    borderWidth: '1',
    _focus: {
      bg: transparentize('primary.600', 0.1)(theme),
    },
  };
}
function outlineStyle(props: InterfaceInputProps & { theme: any }) {
  const { theme } = props;
  return {
    borderWidth: '1',
    _focus: {
      bg: transparentize('primary.600', 0.1)(theme),
    },
  };
}
function filledStyle(props: InterfaceInputProps & { theme: any }) {
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
    bg: 'muted.100',
    borderColor: 'muted.100',

    _dark: {
      bg: 'muted.800',
      borderColor: 'muted.800',
    },
  };
}
function unstyledStyle() {
  return {
    borderWidth: '0',
    _focus: {
      bg: 'transparent',
    },
    _invalid: {
      _stack: {
        style: {
          outlineWidth: 0,
        },
      },
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
function underlinedStyle(props: InterfaceInputProps & { theme: any }) {
  const { primary, error } = props.theme.colors;

  return {
    borderWidth: '0',
    pl: '0',
    borderBottomWidth: '1',
    _focus: {
      _stack: {
        style: {
          outlineWidth: '0',
          boxShadow: `0 1px 0 0 ${primary[600]}`,
        },
      },
    },
    _invalid: {
      _stack: {
        style: {
          outlineWidth: 0,
          boxShadow: `0 1px 0 0 ${error[600]}`,
        },
      },
    },

    _dark: {
      _focus: {
        _stack: {
          style: {
            outlineWidth: '0',
            boxShadow: `0 1px 0 0 ${primary[500]}`,
          },
        },
      },
      _invalid: {
        _stack: {
          style: {
            outlineWidth: 0,
            boxShadow: `0 1px 0 0 ${error[500]}`,
          },
        },
      },
    },
    borderRadius: 0,
  };
}

const variants = {
  outline: outlineStyle as any,
  underlined: underlinedStyle as any,
  rounded: roundedStyle as any,
  filled: filledStyle as any,
  unstyled: unstyledStyle as any,
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
