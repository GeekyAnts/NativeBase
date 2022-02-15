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
    w: 'full',
    bg: 'blue.500',
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
    _hover: {
      bg: 'red.500',
    },
    _pressed: {
      bg: 'blue.500',
    },
    activeTabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: '2',
      borderColor: 'transparent',
      py: '2',
      px: '4',
    },
    inactiveTabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: '2',
      borderColor: 'transparent',
      py: '2',
      px: '4',
      _text: {
        color: mode('gray.500', 'gray.400')(props),
      },
    },
  };
}

function variantUnderlined(props: Record<string, any>) {
  return {
    activeTabStyle: {
      borderColor: mode('primary.600', 'primary.600')(props),
    },
    inactiveTabStyle: {},
  };
}

function variantFilled(props: Record<string, any>) {
  return {
    activeTabStyle: {
      bg: mode('primary.600', 'primary.600')(props),
      rounded: 'full',
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
