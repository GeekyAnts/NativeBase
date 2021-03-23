import { transparentize, getColorFormColorScheme } from '../tools';

const baseStyle = {
  activeTabStyle: {
    marginBottom: '-2px',
  },
  inactiveTabStyle: {
    marginBottom: '-2px',
  },
};

const sizes = {
  sm: {
    activeTabStyle: {
      fontSize: 'sm',
      p: 1,
    },
    inactiveTabStyle: {
      fontSize: 'sm',
      p: 1,
    },
  },
  md: {
    activeTabStyle: {
      fontSize: 'md',
      p: 2,
    },
    inactiveTabStyle: {
      fontSize: 'md',
      p: 2,
    },
  },
  lg: {
    activeTabStyle: {
      fontSize: 'lg',
      p: 3,
    },
    inactiveTabStyle: {
      fontSize: 'lg',
      p: 3,
    },
  },
};

function variantLine(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  return {
    activeTabStyle: {
      borderColor: activeColor,
      borderBottomWidth: 2,
    },
    inactiveTabStyle: {
      borderColor: 'transparent',
      borderBottomWidth: 2,
    },
    tabBarStyle: {
      borderBottomWidth: 2,
      borderColor: 'muted.200',
    },
  };
}

function variantEnclosed(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  return {
    activeTabStyle: {
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderColor: activeColor,
    },
    inactiveTabStyle: {
      borderColor: 'muted.200',
      borderBottomWidth: 2,
    },
    tabBarStyle: {},
  };
}

function variantEnclosedColor(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  return {
    activeTabStyle: {
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderColor: 'muted.200',
      color: activeColor,
    },
    inactiveTabStyle: {
      bg: transparentize('muted.200', 0.1)(props.theme),
      borderColor: 'muted.200',
      borderBottomWidth: 2,
    },
    tabBarStyle: {},
  };
}

function varientSoftRounded(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  return {
    activeTabStyle: {
      borderRadius: 'full',
      bg: transparentize(activeColor, 0.7)(props.theme),
      color: 'white',
    },
    inactiveTabStyle: {},
    tabBarStyle: {},
  };
}

function varientSolidRounded(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  return {
    activeTabStyle: {
      borderRadius: 'full',
      bg: activeColor,
      color: 'white',
    },
    inactiveTabStyle: {},
    tabBarStyle: {},
  };
}

function varientSolidBox(props: Record<string, any>) {
  const activeColor = getColorFormColorScheme(props);
  return {
    activeTabStyle: {
      bg: activeColor,
      color: 'white',
    },
    inactiveTabStyle: {},
    tabBarStyle: {},
  };
}

const variants = {
  'line': variantLine,
  'enclosed': variantEnclosed,
  'enclosed-colored': variantEnclosedColor,
  'soft-rounded': varientSoftRounded,
  'solid-rounded': varientSolidRounded,
  'solid-box': varientSolidBox,
};

const defaultProps = {
  size: 'md',
  variant: 'line',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
