import { mode } from '../tools';

// Tabs Component
export const Tabs = {
  baseStyle: () => ({
    w: '100%',
  }),
};

// Tabs List Component
export const TabList = {
  baseStyle: () => ({
    w: '100%',
    space: '4',
    my: '4',
  }),
};

// Tabs Contents Component
export const TabContent = {
  baseStyle: () => ({
    w: '100%',
  }),
};

// Tabs Body Component
export const TabBody = {
  baseStyle: () => ({
    w: '100%',
    p: '4',
  }),
};

// Tab Component
function baseStyle(props: Record<string, any>) {
  return {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: '2',
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
    activeTabStyle: {
      borderColor: mode('primary.600', 'primary.400')(props),
      _text: {
        color: mode('text.900', 'text.500')(props),
      },
    },
    inactiveTabStyle: {
      _text: {
        color: mode('text.500', 'text.400')(props),
      },
    },
  };
}

function variantFilled(props: Record<string, any>) {
  return {
    rounded: 'full',
    activeTabStyle: {
      bg: 'primary.600',
      _text: {
        color: mode('white', 'white')(props),
      },
    },
    inactiveTabStyle: {},
  };
}

const variants = {
  underlined: variantUnderlined,
  filled: variantFilled,
};

const defaultProps = {
  variant: 'underlined',
  // colorScheme: 'primary',
};

export const Tab = {
  baseStyle,
  variants,
  defaultProps,
};
