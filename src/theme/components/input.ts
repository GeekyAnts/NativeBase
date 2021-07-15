import { mode } from '../tools';
import { Platform } from 'react-native';

const baseStyle = (props: Record<string, any>) => {
  const { primary } = props.theme.colors;
  // Todo: Resolve boxShadow Color or Provide some alternatiove prop for user to change focusRing color
  // Todo: Update to support similar focusRing on iOS , Android and Web
  const focusRing =
    Platform.OS === 'web'
      ? {
          boxShadow:
            props.variant !== 'underlined'
              ? `${primary[400]} 0px 0px 0px 1px`
              : `${primary[400]} 0px 1px 0px 0px`,
          zIndex: 1,
        }
      : {
          // boxShadow: `${useToken('colors', ['primary.400'])} 0px 0px 0px 1px`,
        };

  return {
    fontFamily: 'body',
    px: 4,
    py: 2,
    borderRadius: 'lg',
    color: mode('black', 'white')(props),
    placeholderTextColor: mode('muted.400', 'muted.500')(props),
    background: 'transparent',
    borderColor: mode('muted.200', 'muted.600')(props),
    _disabled: {
      opacity: 0.8,
      bg: mode('muted.100', 'muted.700')(props),
    },
    _hover: {
      borderColor: mode('muted.300', 'muted.500')(props),
    },
    _invalid: {
      borderColor: mode('error.600', 'error.200')(props),
    },
    _focus: {
      style: { ...focusRing },
      borderColor: 'primary.400',
    },
    _android: {
      px: 4,
      py: 3,
      _focus: {
        borderColor: 'primary.400',
      },
    },
    _ios: {
      px: 4,
      py: 3,
      _focus: {
        borderColor: 'primary.400',
      },
    },
    _web: {
      outlineWidth: 0,
      lineHeight: 6, // Todo: Move to _web inside size so that sm and xs don't have this much height
    },
  };
};

function roundedStyle() {
  return {
    borderRadius: 'pill',
    borderWidth: 1,
  };
}
function outlineStyle() {
  return {
    borderWidth: 1,
  };
}
function filledStyle(props: Record<string, any>) {
  return {
    bg: props.bg || mode('muted.200', 'muted.600')(props),
    borderWidth: 1,
    borderColor: 'transparent',
    _hover: {
      bg: mode('muted.300', 'muted.500')(props),
    },
  };
}
function unstyledStyle() {
  return {
    borderWidth: 0,
  };
}
function underlinedStyle() {
  return {
    borderRadius: 0,
    borderBottomWidth: 1,
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
  '2xl': { fontSize: '2xl' },
  'xl': { fontSize: 'xl' },
  'lg': { fontSize: 'lg' },
  'md': { fontSize: 'md' },
  'sm': { fontSize: 'sm' },
  'xs': { fontSize: 'xs' },
};

const defaultProps = {
  size: 'md',
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
