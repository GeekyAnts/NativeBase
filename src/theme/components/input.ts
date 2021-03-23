import { Platform } from 'react-native';
import { mode } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { isInvalid } = props;
  const { colors } = props.theme;
  return {
    w: '100%',
    p: Platform.OS === 'android' ? 2 : 3, // Android's input have default padding.
    color: mode('black', 'white')(props),
    placeholderTextColor: mode(colors.gray[600], colors.black)(props),
    _isDisabledProps: {
      opacity: 0.8,
      bg: mode('gray.100', 'gray.700')(props),
    },
    borderColor: isInvalid
      ? mode('danger.600', 'danger.200')(props)
      : mode('gray.300', 'gray.600')(props),
    hoverBorderColor: 'primary.500',
    focusBorderColor: mode('primary.600', 'primary.400')(props),
    errorBorderColor: mode('danger.600', 'danger.200')(props),
  };
};

function roundedStyle() {
  return {
    borderRadius: '50',
    borderWidth: 1,
  };
}
function defaultStyle() {
  return {
    borderWidth: 1,
  };
}
function filledStyle(props: Record<string, any>) {
  const { isInvalid } = props;
  return {
    bg: props.bg || mode('gray.200', 'gray.600')(props),
    borderWidth: 1,
    borderColor: isInvalid
      ? mode('danger.600', 'danger.200')(props)
      : 'transparent',
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
    borderWidth: 0,
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
  borderRadius: 'md',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
