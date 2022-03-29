import { getColor, getColorScheme, transparentize } from '../tools';

function getBg(props: Record<string, any>) {
  let { theme, colorScheme, status, variant } = props;

  colorScheme = getColorScheme(props, !status ? colorScheme : status);

  const lightBg =
    variant === 'solid'
      ? getColor(theme, `${colorScheme}.700`, colorScheme)
      : getColor(theme, `${colorScheme}.200`, colorScheme);

  const darkBg =
    variant === 'solid'
      ? getColor(theme, `${colorScheme}.600`, colorScheme)
      : getColor(theme, `${colorScheme}.200`, colorScheme);

  return { lightBg, darkBg };
}

const variantSubtle = (props: Record<string, any>) => {
  let { colorScheme, status } = props;
  const { lightBg, darkBg } = getBg(props);

  colorScheme = getColorScheme(props, !status ? colorScheme : status);

  return {
    _light: {
      bg: lightBg,
      _icon: { color: `${colorScheme}.700` },
    },
    _dark: {
      bg: darkBg,
      _icon: { color: `${colorScheme}.600` },
    },
  };
};

const variantOutline = (props: Record<string, any>) => {
  let { colorScheme, status } = props;

  colorScheme = getColorScheme(props, !status ? colorScheme : status);

  return {
    borderWidth: 1,
    _light: {
      _icon: { color: `${colorScheme}.700` },
      borderColor: `${colorScheme}.700`,
    },
    _dark: {
      _icon: { color: `${colorScheme}.600` },
      borderColor: `${colorScheme}.600`,
    },
  };
};

const variantOutlineLight = (props: Record<string, any>) => {
  let { colorScheme, status, theme } = props;

  colorScheme = getColorScheme(props, !status ? colorScheme : status);

  return {
    borderWidth: 1,
    _light: {
      _icon: { color: `${colorScheme}.700` },
      borderColor: transparentize(`${colorScheme}.700`, 0.4)(theme),
    },
    _dark: {
      _icon: { color: `${colorScheme}.600` },
      borderColor: transparentize(`${colorScheme}.600`, 0.4)(theme),
    },
  };
};

const variantSolid = (props: Record<string, any>) => {
  const { lightBg, darkBg } = getBg(props);
  return {
    _light: {
      bg: lightBg,
    },
    _dark: {
      bg: darkBg,
    },
    _icon: { color: `muted.50` },
  };
};

const variantLeftAccent = (props: Record<string, any>) => {
  let { colorScheme, status } = props;
  const { lightBg, darkBg } = getBg(props);

  colorScheme = getColorScheme(props, !status ? colorScheme : status);

  return {
    borderLeftWidth: 4,
    _light: {
      bg: lightBg,
      _icon: { color: `${colorScheme}.700` },
      borderLeftColor: `${colorScheme}.700`,
    },
    _dark: {
      bg: darkBg,
      _icon: { color: `${colorScheme}.600` },
      borderLeftColor: `${colorScheme}.600`,
    },
  };
};

const variantTopAccent = (props: Record<string, any>) => {
  let { colorScheme, status } = props;
  const { lightBg, darkBg } = getBg(props);

  colorScheme = getColorScheme(props, !status ? colorScheme : status);

  return {
    borderTopWidth: 4,
    _light: {
      bg: lightBg,
      _icon: { color: `${colorScheme}.700` },
      borderTopColor: `${colorScheme}.700`,
    },
    _dark: {
      bg: darkBg,
      _icon: { color: `${colorScheme}.600` },
      borderTopColor: `${colorScheme}.600`,
    },
  };
};

const variants = {
  'subtle': variantSubtle,
  'solid': variantSolid,
  'left-accent': variantLeftAccent,
  'top-accent': variantTopAccent,
  'outline': variantOutline,
  'outline-light': variantOutlineLight,
};

export const Alert = {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    p: 3,
    space: 3,
    borderRadius: 'sm',
  },
  variants,
  defaultProps: {
    colorScheme: 'info',
    variant: 'subtle',
  },
};

// AlertIcon

export const AlertIcon = {
  baseStyle: {
    size: 4,
  },
};
