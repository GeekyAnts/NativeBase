import { Dict, mode, transparentize } from './../tools';

const baseStyle = (props: any) => ({
  borderRadius: 'md',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  _web: {
    cursor: props.isDisabled
      ? 'not-allowed'
      : props.isLoading
      ? 'progress'
      : 'pointer',
  },
  _text: {
    fontWeight: 500,
    letterSpacing: '4xl',
  },
});

function variantGhost(props: Dict) {
  const { colorScheme: c } = props;
  if (c === 'muted') {
    return {
      _text: {
        color: mode(`muted.500`, `white`)(props),
      },
    };
  }

  return {
    _text: {
      color: mode(`${c}.500`, `${c}.200`)(props),
    },
    bg: 'transparent',
    _web: {
      outlineWidth: 0,
    },
    _hover: {
      backgroundColor: transparentize(
        mode(`${c}.200`, `${c}.500`)(props),
        0.5
      )(props.theme),
    },
    _focus: {
      backgroundColor: transparentize(
        mode(`${c}.200`, `${c}.500`)(props),
        0.5
      )(props.theme),
    },
    _pressed: {
      backgroundColor: transparentize(
        mode(`${c}.200`, `${c}.500`)(props),
        0.6
      )(props.theme),
    },
  };
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;
  const borderColor = mode(`muted.200`, `muted.500`)(props);
  return {
    border: '1px solid',
    borderColor:
      c === 'muted' ? borderColor : mode(`${c}.500`, `${c}.200`)(props),
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
  let { bg = `${c}.500` } = accessibleColorMap[c] || {};
  bg = mode(bg, `${c}.400`)(props);
  return {
    _web: {
      outlineWidth: 0,
    },
    bg,
    shadow: 3,
    _hover: {
      backgroundColor: mode(`${c}.600`, `${c}.500`)(props),
    },
    _focus: {
      backgroundColor: mode(`${c}.600`, `${c}.500`)(props),
    },
    _pressed: {
      backgroundColor: mode(`${c}.700`, `${c}.600`)(props),
    },
  };
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props;

  return {
    ...variantGhost(props),
    _text: {
      textDecorationLine: 'underline',
      color:
        c === 'muted'
          ? mode(`muted.800`, `${c}.200`)(props)
          : mode(`${c}.500`, `${c}.200`)(props),
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
  link: variantLink,
  unstyled: variantUnstyled,
};

const sizes = {
  lg: {
    px: 6,
    py: 3,
    _text: {
      fontSize: 'lg',
    },
  },
  md: {
    px: 4,
    py: 2,
    _text: {
      fontSize: 'sm',
      lineHeight: 5,
    },
  },
  sm: {
    px: 4,
    py: 2,
    _text: {
      fontSize: 'sm',
    },
  },
  xs: {
    px: 2,
    py: 1,
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

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
