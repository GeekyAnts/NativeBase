import { Dict, mode, transparentize } from './../tools';

const baseStyle = {
  borderRadius: 'md',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  _text: {
    fontWeight: 500,
  },
};
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
    _hover: {
      backgroundColor: transparentize(`${c}.100`, 0.5)(props.theme),
    },
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
  const { bg = `${c}.500` } = accessibleColorMap[c] || {};
  return {
    bg: mode(bg, `${c}.400`)(props),
    shadow: 3,
    _text: {
      color: mode('white', 'black')(props),
    },
    _hover: {
      backgroundColor: `${c}.600`,
    },
    _pressed: {
      backgroundColor: `${c}.700`,
    },
  };
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props;

  return {
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
      fontSize: 'md',
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
