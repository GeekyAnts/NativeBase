import { Dict, mode } from './../tools';

const baseStyle = {
  borderRadius: 'lg',
  fontWeight: 'semibold',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};
function variantGhost(props: Dict) {
  const { colorScheme: c } = props;
  if (c === 'gray') {
    return {
      color: mode(`gray.600`, `whiteAlpha.900`)(props),
    };
  }

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: 'transparent',
  };
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: '1px solid',
    borderColor:
      c === 'gray' ? borderColor : mode(`${c}.600`, `${c}.200`)(props),
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
    color: 'black',
  },
  cyan: {
    bg: 'cyan.400',
    color: 'black',
  },
};

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;
  if (c === 'gray')
    return {
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
    };
  const { bg = `${c}.700`, color = 'white' } = accessibleColorMap[c] || {};
  return {
    bg: mode(bg, `${c}.700`)(props),
    color: mode(color, `gray.800`)(props),
  };
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: 'auto',
    // lineHeight: 'normal',
    color: mode(`${c}.500`, `${c}.200`)(props),
    textDecorationLine: 'underline',
  };
}

function variantUnstyled() {
  return {
    m: 0,
    p: 0,
  };
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
    minH: 12,
    minW: 12,
    fontSize: 'lg',
    px: 6,
    py: 4,
  },
  md: {
    minH: 10,
    minW: 10,
    fontSize: 'md',
    px: 5,
    py: 3,
  },
  sm: {
    minH: 8,
    minW: 8,
    fontSize: 'sm',
    px: 4,
    py: 2,
  },
  xs: {
    minH: 6,
    minW: 6,
    fontSize: 'xs',
    px: 2,
  },
};

const defaultProps = {
  variant: 'solid',
  size: 'md',
  colorScheme: 'gray',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
