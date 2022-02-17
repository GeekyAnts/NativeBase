import { mode } from '../tools';

// Tabs Component
export const Tabs = {
  baseStyle: () => ({
    w: '100%',
    h: '100%',
    p: '2',
  }),
};

// Tabs List Component
export const TabList = {
  baseStyle: () => ({
    space: '4',
    p: '2',
  }),
};

// Tabs Contents Component
export const TabContent = {
  baseStyle: () => ({
    p: '2',
  }),
};

// Tabs Body Component
export const TabBody = {
  baseStyle: () => ({
    py: '2',
    px: '4',
  }),
};

// Tab Component
function baseStyle(props: Record<string, any>) {
  return {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'transparent',
    py: '2',
    px: '4',
    _hover: {
      borderBottomWidth: '2',
      borderColor: mode('muted.400', 'muted.600')(props),
    },
    _pressed: {
      bg: mode('primary.200', 'primary.800')(props),
    },
    _disabled: {
      opacity: '50',
    },
    _focus: {
      bg: mode('primary.100', 'primary.700')(props),
    },
    _web: {
      cursor: props.isDisabled
        ? 'default'
        : props.isLoading
        ? 'default'
        : 'pointer',
    },
  };
}

function variantUnderlined(props: Record<string, any>) {
  return {
    _text: {
      color: mode('text.500', 'text.400')(props),
    },
    activeTabStyle: {
      borderColor: mode('primary.600', 'primary.400')(props),
      _text: {
        color: mode('text.900', 'text.500')(props),
      },
    },
  };
}

function variantSolid(props: Record<string, any>) {
  return {
    rounded: 'full',
    _hover: {
      borderBottomWidth: '0',
      bg: mode('muted.200', 'muted.700')(props),
    },
    activeTabStyle: {
      bg: 'primary.600',
      _text: {
        color: mode('white', 'white')(props),
      },
    },
  };
}

const variants = {
  underlined: variantUnderlined,
  solid: variantSolid,
};

const defaultProps = {
  variant: 'underlined',
};

export const Tab = {
  baseStyle,
  variants,
  defaultProps,
};
