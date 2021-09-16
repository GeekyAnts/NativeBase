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
      _text: { color: mode(`${c}.600`, `${c}.200`)(props) },
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.200`, `${c}.700`)(props), 0.5)(props.theme),
    },
    _focusVisible: {
      _text: { color: mode(`${c}.700`, `${c}.200`)(props) },
      borderColor: mode(`${c}.700`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.200`, `${c}.700`)(props), 0.5)(props.theme),
    },
    _pressed: {
      _text: { color: mode(`${c}.800`, `${c}.100`)(props) },
      borderColor: mode(`${c}.600`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.300`, `${c}.600`)(props), 0.5)(props.theme),
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
        : mode(`${c}.300`, `${c}.600`)(props),
    ...variantGhost(props),
  };
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;
  let bg = `${c}.500`;
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
      outlineWidth: '0',
    },
    bg,
    _hover: {
      bg: mode(`${c}.600`, `${c}.200`)(props),
    },
    _pressed: {
      bg: mode(`${c}.700`, `${c}.100`)(props),
    },
    // TODO: Confirm before merging
    _focus: {
      bg: mode(`${c}.700`, `${c}.200`)(props),
    },
    _loading: {
      bg: mode(bg, `${c}.300`)(props),
      opacity: '50',
    },
    _disabled: { bg: mode(`trueGray.300`, `trueGray.600`)(props) },
  };

  return styleObject;
}

function getBg(props: Record<string, any>) {
  const { theme, status, variant } = props;
  let { colorScheme } = props;

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
  let bg = `${c}.500`;
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
      outlineWidth: '0',
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
          : mode(`${c}.500`, `${c}.300`)(props),
    },
    _hover: {
      _text: {
        color: mode(`${c}.600`, `${c}.200`)(props),
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
      _text: { color: mode(`${c}.700`, `${c}.100`)(props) },
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
