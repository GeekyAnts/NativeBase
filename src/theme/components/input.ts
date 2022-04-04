import { Dict, mode } from '../tools';
import { Platform } from 'react-native';

function getSelectionColor(props: Record<string, any>) {
  if (Platform.OS === 'ios') {
    return mode('coolGray.800', 'warmGray.50')(props);
  } else if (Platform.OS === 'android') {
    return mode('coolGray.800', 'warmGray.50')(props);
  }
}

const baseStyle = (props: Record<string, any>) => {
  // const { primary } = props.theme.colors;
  // Todo: Resolve boxShadow Color or Provide some alternatiove prop for user to change focusRing color
  // // Todo: Update to support similar focusRing on iOS , Android and Web
  // const focusRing =
  //   Platform.OS === 'web'
  //     ? {
  //         boxShadow:
  //           props.variant !== 'underlined'
  //             ? `${primary[400]} 0px 0px 0px 1px`
  //             : `${primary[400]} 0px 1px 0px 0px`,
  //         zIndex: 1,
  //       }
  //     : {
  //         // boxShadow: `${useToken('colors', ['primary.400'])} 0px 0px 0px 1px`,
  //       };

  return {
    selectionColor: getSelectionColor(props),
    fontFamily: 'body',
    p: '2',
    borderRadius: 'sm',
    overflow: 'hidden',
    color: mode('coolGray.800', 'warmGray.50')(props),
    placeholderTextColor: 'muted.400',
    borderColor: mode('muted.200', 'gray.500')(props),
    _disabled: {
      opacity: '80',
      bg: mode('muted.100', 'muted.700')(props),
    },
    _invalid: {
      borderColor: mode('danger.600', 'danger.300')(props),
    },
    _focus: {
      borderColor: mode('primary.400', 'primary.500')(props),
    },
    _web: {
      outlineWidth: '0',
      overflow: 'auto',
      lineHeight: 'lg', // Todo: Move to _web inside size so that sm and xs don't have this much height
    },
  };
};

function roundedStyle(props: Dict) {
  return {
    borderRadius: '25',
    borderWidth: '1',
    _hover: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  };
}
function outlineStyle(props: Dict) {
  return {
    borderWidth: '1',
    _hover: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  };
}
function filledStyle(props: Dict) {
  return {
    bg: props.bg || mode('muted.200', 'muted.600')(props),
    borderWidth: '1',
    borderColor: 'transparent',
    _hover: {
      bg: mode('muted.300', 'muted.700')(props),
    },
  };
}
function unstyledStyle() {
  return {
    borderWidth: '0',
  };
}
function underlinedStyle() {
  return {
    borderRadius: '0',
    borderTopWidth: '0',
    borderLeftWidth: '0',
    borderRightWidth: '0',
    borderBottomWidth: '1',
  };
}

const variants = {
  outline: outlineStyle,
  underlined: underlinedStyle,
  rounded: roundedStyle,
  filled: filledStyle,
  unstyled: unstyledStyle,
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
