import { mode } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    p: 3,
    borderRadius: 'md',
    color: mode('black', 'white')(props),
    placeholderTextColor: mode('muted.600', 'muted.300')(props),
    background: 'transparent',
    borderColor: mode('muted.300', 'muted.600')(props),
    _disabled: {
      opacity: 0.8,
      bg: mode('muted.100', 'muted.700')(props),
    },
    _hover: {
      borderColor: 'primary.500',
    },
    _invalid: {
      borderColor: mode('error.600', 'error.200')(props),
    },
    _focus: {
      borderColor: mode('primary.600', 'primary.400')(props),
    },
    _android: {
      p: 2,
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
