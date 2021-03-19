import type { Dict } from './../tools';

const baseStyle = {
  borderRadius: 'lg',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

// function variantGhost(props: Dict) {
//   const { colorScheme: c } = props;
//   if (c === 'gray') {
//     return {
//       _text: {
//         color: mode(`gray.500`, `white`)(props),
//       },
//     };
//   }

//   return {
//     _text: {
//       color: mode(`${c}.500`, `${c}.200`)(props),
//     },
//     bg: 'transparent',
//   };
// }

// type AccessibleColor = {
//   bg?: string;
//   color?: string;
// };

/** Accessible color overrides for less accessible colors. */
// const accessibleColorMap: { [key: string]: AccessibleColor } = {
//   yellow: {
//     bg: 'yellow.400',
//   },
//   cyan: {
//     bg: 'cyan.400',
//   },
// };

// function variantSolid(props: Dict) {
//   const { colorScheme: c } = props;
//   let test = mode(`${c}.light`, `${c}.dark`);
//   console.log(test(props));

//   return {
//     bg: 'transparent',
//     color: 'black',
//   };
//   // if (c === 'gray')
//   //   return {
//   //     bg: mode(`gray.100`, `gray.800`)(props),
//   //   };
//   // const { bg = `${c}.500` } = accessibleColorMap[c] || {};
//   // return {
//   //   bg: mode(bg, `${c}.400`)(props),
//   // };
// }

// function variantLink() {
//   return {
//     padding: 0,
//     height: 'auto',
//     _text: {
//       textDecorationLine: 'underline',
//     },
//   };
// }

// function variantUnstyled() {
//   return {
//     m: 0,
//     p: 0,
//   };
// }

function variantContained(props: Dict) {
  const { colorScheme: c } = props;

  return {
    bg: c ? c : 'default',
    _text: { color: `white` },
  };
}

function variantDefault(props: Dict) {
  const { colorScheme: c } = props;

  return {
    bg: 'transparent',
    _text: { color: c ? c : 'default' },
  };
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;

  return {
    border: '1px solid',
    borderColor: c ? c : 'default',
    bg: 'transparent',
    _text: { color: c ? c : 'default' },
  };
}

const variants = {
  contained: variantContained,
  default: variantDefault,
  outline: variantOutline,
};

const sizes = {
  lg: {
    minH: 12,
    minW: 12,
    _text: {
      fontSize: 'lg',
    },
    px: 6,
    py: 4,
  },
  md: {
    minH: 10,
    minW: 10,
    _text: {
      fontSize: 'md',
    },
    px: 5,
    py: 3,
  },
  sm: {
    minH: 8,
    minW: 8,
    _text: {
      fontSize: 'sm',
    },
    px: 4,
    py: 2,
  },
  xs: {
    minH: 6,
    minW: 6,
    _text: {
      fontSize: 'xs',
    },
    px: 2,
  },
};

const defaultProps = {
  variant: 'default',
  size: 'md',
  colorScheme: 'default',
  _text: {
    fontWeight: 'semibold',
  },
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
