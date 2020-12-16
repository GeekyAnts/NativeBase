import { Platform } from 'react-native';
import { mode } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { colors } = props.theme;
  return {
    w: '100%',
    p: Platform.OS === 'android' ? 2 : 3, // Android's input have default padding.
    color: mode('black', 'white')(props),
    borderRadius: 'sm',
    placeholderTextColor: mode(
      colors.blackAlpha[600],
      colors.whiteAlpha[600]
    )(props),
    _isDisabledProps: {
      color: mode('blgray.300', 'muted.100')(props),
      bg: mode('gray.100', 'transparent')(props),
      borderColor: mode('gray.300', 'muted.100')(props),
    },
  };
};

function roundedStyle(props: Record<string, any>) {
  return {
    borderRadius: '50',
    borderWidth: 1,
    borderColor: mode('gray.400', 'gray.500')(props),
  };
}
function defaultStyle(props: Record<string, any>) {
  return {
    borderWidth: 1,
    borderColor: mode('gray.400', 'gray.500')(props),
  };
}
function filledStyle(props: Record<string, any>) {
  return {
    bg: props.bg || mode('gray.200', 'gray.600')(props),
  };
}
function unstyledStyle() {
  return {
    borderWidth: 0,
  };
}
function underlinedStyle(props: Record<string, any>) {
  return {
    borderRadius: 0,
    borderWidth: 0,
    borderColor: mode('gray.400', 'gray.500')(props),
    borderBottomWidth: 1,
  };
}

const variants = {
  outline: defaultStyle,
  underlined: underlinedStyle,
  rounded: roundedStyle,
  filled: filledStyle,
  unstyled: unstyledStyle,
  default: defaultStyle,
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
  variant: 'default',
  borderRadius: 'sm',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
