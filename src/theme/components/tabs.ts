import { getColorFormColorScheme, getColorScheme, mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  return {
    activeTabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      mb: '-2px',
      flexDirection: 'row',
      _text: { fontSize: 'sm', fontWeight: 'bold' },
    },
    inactiveTabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      mb: '-2px',
      flexDirection: 'row',
      _text: {
        color: mode('gray.500', 'gray.400')(props),
        fontSize: 'sm',
        fontWeight: 'bold',
      },
    },
    activeIconProps: {
      color: activeColor,
      name: 'home',
      mx: 2,
    },
    inactiveIconProps: {
      name: 'home',
      mx: 2,
    },
  };
}

const sizes = {
  sm: {
    activeTabStyle: {
      _text: { fontSize: 'sm' },
      py: 2,
      px: 3,
    },
    inactiveTabStyle: {
      _text: { fontSize: 'sm' },
      py: 2,
      px: 3,
    },
  },
  md: {
    activeTabStyle: {
      _text: { fontSize: 'md' },
      py: 3,
      px: 4,
    },
    inactiveTabStyle: {
      _text: { fontSize: 'md' },
      py: 3,
      px: 4,
    },
  },
  lg: {
    activeTabStyle: {
      _text: { fontSize: 'lg' },
      py: 4,
      px: 5,
    },
    inactiveTabStyle: {
      _text: { fontSize: 'lg' },
      py: 4,
      px: 5,
    },
  },
};

function variantOutline(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  let { colorScheme, status } = props;
  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  return {
    activeTabStyle: {
      borderColor: activeColor,
      _text: {
        color: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
      },
      _hover: {
        bg: mode(`${colorScheme}.50`, `${colorScheme}.800`)(props),
      },
      borderBottomWidth: 2,
    },
    inactiveTabStyle: {
      borderColor: 'transparent',
      borderBottomWidth: 2,
      _hover: {
        bg: mode(`${colorScheme}.50`, `${colorScheme}.800`)(props),
      },
    },
    tabBarStyle: {
      borderBottomWidth: 2,
      borderColor: mode('muted.200', 'muted.500')(props),
    },
  };
}

function variantFilled(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  let { colorScheme, status } = props;
  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  return {
    activeTabStyle: {
      borderColor: activeColor,
      _text: { color: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props) },
      _hover: {
        bg: mode(`${colorScheme}.50`, `${colorScheme}.800`)(props),
      },
      borderBottomWidth: 2,
      bg: mode(`${colorScheme}.100`, `${colorScheme}.700`)(props),
    },
    inactiveTabStyle: {
      borderColor: 'transparent',
      borderBottomWidth: 2,
      _hover: {
        bg: mode(`${colorScheme}.50`, `${colorScheme}.800`)(props),
      },
    },
    tabBarStyle: {
      borderBottomWidth: 2,
      borderColor: mode('muted.200', 'muted.500')(props),
    },
  };
}

// function variantEnclosed(props: Record<string, any>) {
//   const activeColor = getColorFormColorScheme(props);
//   return {
//     activeTabStyle: {
//       borderTopWidth: 2,
//       borderLeftWidth: 2,
//       borderRightWidth: 2,
//       borderColor: activeColor,
//     },
//     inactiveTabStyle: {
//       borderColor: 'muted.200',
//       borderBottomWidth: 2,
//     },
//     tabBarStyle: {},
//   };
// }

function variantFilledOutline(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  let { colorScheme, status } = props;
  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  return {
    activeTabStyle: {
      borderColor: activeColor,
      _text: { color: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props) },
      _hover: {
        bg: mode(`${colorScheme}.50`, `${colorScheme}.800`)(props),
      },
      borderBottomWidth: 2,
    },
    inactiveTabStyle: {
      borderColor: 'transparent',
      borderBottomWidth: 2,
      _hover: {
        bg: mode(`${colorScheme}.50`, `${colorScheme}.800`)(props),
      },
    },
    tabBarStyle: {
      borderBottomWidth: 2,
      borderColor: mode('muted.200', 'muted.500')(props),
      bg: mode(`${colorScheme}.100`, `${colorScheme}.700`)(props),
    },
  };
}

// function varientSoftRounded(props: Record<string, any>) {
//   const activeColor = getColorFormColorScheme(props);
//   return {
//     activeTabStyle: {
//       borderRadius: 'full',
//       bg: transparentize(activeColor, 0.7)(props.theme),
//       color: 'white',
//     },
//     inactiveTabStyle: {},
//     tabBarStyle: {},
//   };
// }

// function varientSolidRounded(props: Record<string, any>) {
//   const activeColor = getColorFormColorScheme(props);
//   return {
//     activeTabStyle: {
//       borderRadius: 'full',
//       bg: activeColor,
//       color: 'white',
//     },
//     inactiveTabStyle: {},
//     tabBarStyle: {},
//   };
// }

// function varientSolidBox(props: Record<string, any>) {
//   const activeColor = getColorFormColorScheme(props);
//   return {
//     activeTabStyle: {
//       bg: activeColor,
//       color: 'white',
//     },
//     inactiveTabStyle: {},
//     tabBarStyle: {},
//   };
// }

const variants = {
  'outline': variantOutline,
  'filled': variantFilled,
  'filled-outline': variantFilledOutline,
  // 'soft-rounded': varientSoftRounded,
  // 'solid-rounded': varientSolidRounded,
  // 'solid-box': varientSolidBox,
};

const defaultProps = {
  size: 'md',
  variant: 'outline',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
