import { Dict, mode, transparentize } from './../tools';
import { Platform } from 'react-native';
const disabledTextColor = (props: Record<string, any>) =>
  mode(`muted.500`, `muted.300`)(props);

const baseStyle = (props: Record<string, any>) => {
  const { primary } = props.theme.colors;
  const focusRing =
    Platform.OS === 'web'
      ? mode(
          { boxShadow: `${primary[400]} 0px 0px 0px 2px`, zIndex: 1 },
          { boxShadow: `${primary[500]} 0px 0px 0px 2px`, zIndex: 1 }
        )(props)
      : {};

  return {
    borderRadius: 'sm',
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

function variantGhost(props: Dict) {
  const { colorScheme: c } = props;
  if (c === 'muted') {
    return {
      _text: {
        color: disabledTextColor(props),
      },
    };
  }

  return {
    _text: {
      color: props.isDisabled
        ? disabledTextColor(props)
        : mode(`${c}.500`, `${c}.300`)(props),
    },
    bg: 'transparent',
    _web: {
      outlineWidth: '0',
    },
    _hover: {
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.200`, `${c}.400`)(props), 0.5)(props.theme),
    },
    _focusVisible: {
      borderColor: mode(`${c}.700`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.200`, `${c}.400`)(props), 0.5)(props.theme),
    },
    _pressed: {
      borderColor: mode(`${c}.600`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.300`, `${c}.500`)(props), 0.5)(props.theme),
    },
    _spinner: {
      size: 'sm',
    },
  };
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;
  const borderColor = mode(`muted.200`, `muted.500`)(props);
  return {
    borderWidth: '1',
    borderColor:
      c === 'muted'
        ? borderColor
        : props.isDisabled
        ? disabledTextColor(props)
        : mode(`${c}.300`, `${c}.300`)(props),
    ...variantGhost(props),
  };
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;
  let bg = `${c}.500`;
  if (props.isDisabled) {
    bg = mode(`muted.300`, `muted.500`)(props);
  }

  const styleObject = {
    _web: {
      outlineWidth: '0',
    },
    bg,
    _hover: {
      bg: `${c}.600`,
    },
    _pressed: {
      bg: `${c}.700`,
    },
    _focus: {
      bg: `${c}.600`,
    },
    _loading: {
      bg: mode(`warmGray.50`, `${c}.300`)(props),
      opacity: '50',
    },
    _disabled: { bg: mode(`trueGray.300`, `trueGray.600`)(props) },
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
  let bg = `${c}.100`;
  bg = mode(bg, `${c}.200`)(props);
  let color;
  if (props.isDisabled) {
    bg = mode(`muted.300`, `muted.500`)(props);
  } else {
    color = mode(`${c}.500`, `${c}.600`)(props);
  }
  const styleObject = {
    _text: {
      color: color,
    },
    _web: {
      outlineWidth: '0',
    },
    bg,
    _hover: {
      _text: { color: mode(`${c}.600`, `${c}.700`)(props) },
      bg: mode(`${c}.200`, `${c}.300`)(props),
    },
    _pressed: {
      _text: { color: mode(`${c}.700`, `${c}.800`)(props) },
      bg: mode(`${c}.300`, `${c}.400`)(props),
    },
  };

  return styleObject;
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props;

  return {
    ...variantGhost(props),
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
          : mode(`${c}.500`, `${c}.300`)(props),
    },
    _hover: {
      _text: {
        color: mode(`${c}.600`, `${c}.400`)(props),
        textDecorationLine: 'underline',
      },
    },
    _focusVisible: {
      _text: {
        color: mode(`${c}.600`, `${c}.400`)(props),
        textDecorationLine: 'underline',
      },
    },
    _pressed: {
      _text: { color: mode(`${c}.700`, `${c}.500`)(props) },
    },
  };
}

function variantUnstyled() {
  return {};
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
    px: '4',
    py: '2',
    _text: {
      fontSize: 'md',
    },
  },
  md: {
    px: '3',
    py: '2',
    _text: {
      fontSize: 'sm',
    },
  },
  sm: {
    px: '2',
    py: '2',
    _text: {
      fontSize: 'xs',
    },
  },
  xs: {
    px: '2',
    py: '2',
    _text: {
      fontSize: '2xs',
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
