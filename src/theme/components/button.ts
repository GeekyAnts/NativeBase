import { Dict, getColorScheme, mode, transparentize } from './../tools';
import { Platform } from 'react-native';
import { getColor } from '../tools/colors';
const disabledTextColor = (props: any) => mode(`muted.500`, `muted.300`)(props);

const baseStyle = (props: any) => {
  const { primary } = props.theme.colors;
  const focusRing =
    Platform.OS === 'web'
      ? { boxShadow: `${primary[400]} 0px 0px 0px 2px`, zIndex: 1 }
      : {};

  return {
    borderRadius: 'lg',
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
      fontWeight: 600,
    },
    _focusVisible: {
      style: props.variant !== 'unstyled' ? { ...focusRing } : {},
    },
    _stack: {
      space: 2,
      alignItems: 'center',
    },
    _loading: {
      opacity: 0.5,
    },
    _disabled: {
      opacity: 0.5,
    },
    spinnerProps: {
      size: 'sm',
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
        : mode(`${c}.600`, `${c}.300`)(props),
    },
    bg: 'transparent',
    _web: {
      outlineWidth: 0,
    },
    _hover: {
      _text: { color: mode(`${c}.700`, `${c}.200`)(props) },
      borderColor: mode(`${c}.700`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.200`, `${c}.700`)(props), 0.5)(props.theme),
    },
    _focusVisible: {
      _text: { color: mode(`${c}.700`, `${c}.200`)(props) },
      borderColor: mode(`${c}.700`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.200`, `${c}.700`)(props), 0.5)(props.theme),
    },
    _pressed: {
      _text: { color: mode(`${c}.800`, `${c}.100`)(props) },
      borderColor: mode(`${c}.700`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.300`, `${c}.600`)(props), 0.5)(props.theme),
    },
    spinnerProps: {
      size: 'sm',
    },
  };
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;
  const borderColor = mode(`muted.200`, `muted.500`)(props);
  return {
    borderWidth: 1,
    borderColor:
      c === 'muted'
        ? borderColor
        : props.isDisabled
        ? disabledTextColor(props)
        : mode(`${c}.600`, `${c}.300`)(props),
    ...variantGhost(props),
  };
}

type AccessibleColor = {
  bg?: string;
  color?: string;
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.400',
  },
  cyan: {
    bg: 'cyan.400',
  },
};

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;
  let { bg = `${c}.600` } = accessibleColorMap[c] || {};
  bg = mode(bg, `${c}.300`)(props);
  // let _disabled;
  if (props.isDisabled) {
    bg = mode(`muted.300`, `muted.500`)(props);
  }
  // if (props.isLoading) {
  //   _disabled = {
  //     bg: bg,
  //   };
  // } else {
  //   _disabled = {
  //     bg: mode(`trueGray.300`, `trueGray.600`)(props),
  //   };
  // }

  const styleObject = {
    _web: {
      outlineWidth: 0,
    },
    bg,
    _hover: {
      bg: mode(`${c}.700`, `${c}.200`)(props),
    },
    _pressed: {
      bg: mode(`${c}.800`, `${c}.100`)(props),
    },
    // TODO: Confirm before merging
    _focus: {
      bg: mode(`${c}.700`, `${c}.200`)(props),
    },
    _loading: {
      bg: mode(bg, `${c}.300`)(props),
      opacity: 0.5,
    },
    _disabled: { bg: mode(`trueGray.300`, `trueGray.600`)(props) },
  };

  return styleObject;
}

function getBg(props: Record<string, any>) {
  let { theme, colorScheme, status, variant } = props;

  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  const lightBg =
    variant === 'solid'
      ? getColor(theme, `${colorScheme}.400`, colorScheme)
      : getColor(theme, `${colorScheme}.100`, colorScheme);

  const darkBg =
    variant === 'solid'
      ? getColor(theme, `${colorScheme}.700`, colorScheme)
      : getColor(theme, `${colorScheme}.400`, colorScheme);
  return mode(lightBg, darkBg)(props);
}

function variantSubtle(props: Dict) {
  const { colorScheme: c } = props;
  let { bg = `${c}.500` } = accessibleColorMap[c] || {};
  let color;
  bg = getBg(props);
  if (props.isDisabled) {
    bg = mode(`muted.300`, `muted.500`)(props);
  } else {
    color = mode(`${c}.500`, `${c}.200`)(props);
  }
  const styleObject = {
    _text: {
      color: color,
    },
    _web: {
      outlineWidth: 0,
    },
    bg,
    _hover: {
      bg: mode(`${c}.200`, `${c}.500`)(props),
    },
    _pressed: {
      bg: mode(`${c}.300`, `${c}.600`)(props),
    },
  };

  return styleObject;
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props;

  return {
    ...variantGhost(props),
    _text: {
      // textDecorationLine: 'underline',
      color:
        c === 'muted'
          ? mode(`muted.800`, `${c}.200`)(props)
          : props.isDisabled
          ? disabledTextColor(props)
          : mode(`${c}.600`, `${c}.300`)(props),
    },
    _hover: {
      _text: {
        color: mode(`${c}.700`, `${c}.200`)(props),
        textDecorationLine: 'underline',
      },
    },
    _focusVisible: {
      _text: {
        color: mode(`${c}.700`, `${c}.200`)(props),
        textDecorationLine: 'underline',
      },
    },
    _pressed: {
      _text: { color: mode(`${c}.800`, `${c}.100`)(props) },
    },
    _ios: {
      _text: {
        textDecorationLine: 'underline',
      },
    },
    _android: {
      _text: {
        textDecorationLine: 'underline',
      },
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
    px: 6,
    py: 3,
    rounded: 'lg',
    _text: {
      fontSize: 'lg',
    },
  },
  md: {
    px: 5,
    py: 2.5,
    rounded: 'md',
    _text: {
      fontSize: 'md',
    },
  },
  sm: {
    px: 4,
    py: 2,
    rounded: 'sm',
    _text: {
      fontSize: 'sm',
    },
  },
  xs: {
    px: 2,
    py: 1,
    rounded: 'xs',
    _text: {
      fontSize: 'xs',
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
