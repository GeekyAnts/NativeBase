import { Dict, mode } from './../tools';
import { Platform } from 'react-native';

const disabledTextColor = (props: any) => mode(`muted.500`, `muted.300`)(props);

const baseStyle = (props: any) => {
  const focusRing =
    Platform.OS === 'web'
      ? mode(
          {
            // boxShadow: `${primary[600]} 0px 0px 0px 2px`,
            // zIndex: 1,
            // borderWidth: 1,
            // borderColor: 'white',
          },
          {
            // boxShadow: `${primary[700]} 0px 0px 0px 2px`,
            // zIndex: 1,
            // borderWidth: 1,
            // borderColor: 'black',
          }
        )(props)
      : {};

  return {
    borderRadius: 'sm',
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
    _text: {
      fontWeight: 'medium',
    },
    _focusVisible: {
      style: props.variant !== 'unstyled' ? { ...focusRing } : {},
    },
    _stack: {
      space: 2,
      alignItems: 'center',
    },
    _loading: {
      opacity: '80',
    },
    _disabled: {
      opacity: '50',
    },
    _spinner: {
      size: 'sm',
      focusable: false,
    },
  };
};

function actionGhost(props: Dict) {
  const { colorScheme: c } = props;

  return {
    _text: {
      color: props.isDisabled
        ? disabledTextColor(props)
        : props.variant !== 'subtle'
        ? mode(`${c}.700`, `${c}.600`)(props)
        : mode('trueGray.900', 'primary.400')(props),
    },
    bg: 'transparent',
    borderWidth: props.variant !== 'outline' ? 0 : {},
    _web: {
      outlineWidth: '0',
    },
    _hover:
      props.variant === 'subtle'
        ? {
            _text: {
              color: 'textLight.primary',
            },
          }
        : {
            _text: {
              color: 'textDark.primary',
            },
          },
    // _focusVisible: {
    //   borderColor: mode(`${c}.700`, `${c}.200`)(props),
    //   bg: transparentize(mode(`${c}.200`, `${c}.400`)(props), 0.5)(props.theme),
    // },
    _pressed:
      props.variant === 'solid'
        ? {
            _text: {
              color: 'trueGray.50',
            },
          }
        : {
            _text: {
              color: 'textDark.primary',
            },
          },
    _spinner: {
      size: 'sm',
    },
  };
}

function actionLink(props: Dict) {
  const { colorScheme: c } = props;

  return {
    bg: 'transparent',
    borderWidth: 0,
    _text: {
      textDecorationLine: Platform.select({
        ios: 'underline',
        web: 'underline',
      }),
      color:
        c === 'muted'
          ? mode(`muted.800`, `${c}.200`)(props)
          : props.isDisabled
          ? disabledTextColor(props)
          : mode(`primary.700`, `primary.600`)(props),
    },
    _hover: {
      bg: 'transparent',
      _text: {
        color: mode(`${c}.800`, `${c}.700`)(props),
      },
    },
    _pressed: {
      bg: 'transparent',
      _text: {
        color: mode(`${c}.900`, `${c}.800`)(props),
      },
    },
    _focusVisible: {
      _text: {
        color: mode(`${c}.600`, `${c}.400`)(props),
        textDecorationLine: 'underline',
      },
    },
  };
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;
  const borderColor = mode(`${c}.300`, `${c}.300`)(props);
  return {
    borderWidth: '1',
    borderColor:
      c === 'muted'
        ? borderColor
        : props.isDisabled
        ? disabledTextColor(props)
        : mode(`trueGray.300`, `trueGray.500`)(props),
    _text: {
      color: mode(`${c}.700`, `${c}.600`)(props),
    },
    _hover: {
      borderWidth: 0,
      bg: mode(`${c}.800`, `${c}.700`)(props),
      _text: {
        color: 'trueGray.50',
      },
    },
    _pressed: {
      borderWidth: 0,
      bg: mode(`${c}.900`, `${c}.800`)(props),
      _text: {
        color: 'trueGray.50',
      },
    },
    _focusVisible: {
      // _web: {
      //   outlineWidth: '20px',
      //   outlineStyle: 'solid',
      //   outlineColor: 'blue',
      // },
      style: mode(
        {
          // boxShadow: `${primary[600]} 0px 0px 0px 2px`,
          // zIndex: 1,
          // borderWidth: 1,
          // borderColor: 'red.300',
        },
        {
          // boxShadow: `${primary[700]} 0px 0px 0px 2px`,
          // zIndex: 1,
          // borderWidth: 1,
          // borderColor: 'black',
        }
      )(props),
    },
  };
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;
  let bg = mode(`${c}.700`, `${c}.600`)(props);
  if (props.isDisabled) {
    bg = mode(`muted.300`, `muted.500`)(props);
  }

  const styleObject = {
    _web: {
      outlineWidth: '0',
    },
    bg,
    _hover: {
      bg: mode(`${c}.800`, `${c}.700`)(props),
    },
    _pressed: {
      bg: mode(`${c}.900`, `${c}.800`)(props),
    },
    _focus: {},
    _loading: {
      opacity: '40',
    },
    _disabled: {
      opacity: '40',
    },
  };

  return styleObject;
}

// function getBg(props: Record<string, any>) {
//   const { theme, status, variant } = props;
//   let { colorScheme } = props;

//   colorScheme = getColorScheme(
//     props,
//     colorScheme !== 'primary' ? colorScheme : status
//   );
//   const lightBg =
//     variant === 'solid'
//       ? getColor(theme, `${colorScheme}.400`, colorScheme)
//       : getColor(theme, `${colorScheme}.100`, colorScheme);

//   const darkBg =
//     variant === 'solid'
//       ? getColor(theme, `${colorScheme}.700`, colorScheme)
//       : getColor(theme, `${colorScheme}.400`, colorScheme);
//   return mode(lightBg, darkBg)(props);
// }

function variantSubtle(props: Dict) {
  const { colorScheme: c } = props;
  const bg = mode(`${c}.300`, `${c}.400`)(props);
  const styleObject = {
    _text: {
      color: 'trueGray.900',
    },
    _web: {
      outlineWidth: '0',
    },
    bg,
    _hover: {
      bg: mode(`${c}.400`, `${c}.500`)(props),
    },
    _pressed: {
      bg: mode(`${c}.500`, `${c}.600`)(props),
    },
  };

  return styleObject;
}

function variantUnstyled() {
  return {};
}

const variants = {
  outline: variantOutline,
  solid: variantSolid,
  subtle: variantSubtle,
  unstyled: variantUnstyled,
};

const sizes = {
  lg: {
    px: '4',
    py: '2',
    _text: {
      fontSize: 'md',
    },
    _icon: {
      size: 4,
    },
  },
  md: {
    px: '3',
    py: '2',
    _text: {
      fontSize: 'sm',
    },
    _icon: {
      size: 3,
    },
  },
  sm: {
    px: '2',
    py: '2',
    _text: {
      fontSize: 'xs',
    },
    _icon: {
      size: 3,
    },
  },
  xs: {
    px: '2',
    py: '2',
    _text: {
      fontSize: '2xs',
    },
    _icon: {
      size: 2,
    },
  },
};

const actions = {
  ghost: actionGhost,
  unstyled: variantUnstyled,
  link: actionLink,
};

const defaultProps = {
  variant: 'solid',
  size: 'md',
  colorScheme: 'primary',
  action: 'primary',
};

export const ButtonGroup = {
  baseStyle: { direction: 'row' },
  defaultProps: { space: 2 },
};

export default {
  baseStyle,
  variants,
  sizes,
  actions,
  defaultProps,
};
