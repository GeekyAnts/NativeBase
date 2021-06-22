import { mode, getColor, getColorScheme, transparentize } from '../tools';

function getBg(props: Record<string, any>) {
  let { theme, colorScheme, status, variant } = props;

  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  const lightBg =
    variant === 'solid'
      ? getColor(theme, `${colorScheme}.400`, colorScheme)
      : getColor(theme, `${colorScheme}.100`, colorScheme);

  const darkBg =
    variant === 'solid'
      ? getColor(theme, `${colorScheme}.700`, colorScheme)
      : getColor(theme, `${colorScheme}.400`, colorScheme);
  return mode(lightBg, darkBg)(props);
}

const variantSubtle = (props: Record<string, any>) => {
  let { colorScheme, status } = props;
  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  return {
    bg: getBg(props),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
  };
};

const variantOutline = (props: Record<string, any>) => {
  let { colorScheme, status, theme } = props;
  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  return {
    borderWidth: 1,
    borderColor: mode(`${colorScheme}.600`, `${colorScheme}.500`)(props),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.500`)(props),
    textColor: getColor(theme, `${colorScheme}.700`, colorScheme),
  };
};
const variantOutlineLight = (props: Record<string, any>) => {
  let { colorScheme, status, theme } = props;
  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  return {
    borderWidth: 1,
    borderColor: transparentize(`${colorScheme}.600`, 0.2)(theme),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
    textColor: getColor(theme, `${colorScheme}.900`, colorScheme),
  };
};

const variantSolid = (props: Record<string, any>) => {
  let { colorScheme, status } = props;
  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  return {
    borderWidth: 6,
    borderColor: 'transparent',
    bg: getBg(props),
    iconColor: mode(`white`, `gray.900`)(props),
    textColor: mode('white', `${colorScheme}.200`)(props),
  };
};
const variantLeftAccent = (props: Record<string, any>) => {
  let { colorScheme, status } = props;
  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  return {
    borderWidth: 4,
    bg: getBg(props),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
    textColor: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
    borderColor: 'transparent',
    borderLeftColor: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
  };
};
const variantTopAccent = (props: Record<string, any>) => {
  let { colorScheme, status } = props;
  colorScheme = getColorScheme(
    props,
    colorScheme !== 'primary' ? colorScheme : status
  );
  return {
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
    bg: getBg(props),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
    textColor: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
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
    borderRadius: 'md',
    _actionProps: {
      alignSelf: 'center',
      ml: 'auto',
    },
    _text: {
      fontSize: 'sm',
      lineHeight: 5,
      color: 'gray.700',
    },
  },
  variants,
  defaultProps: {
    colorScheme: 'primary',
    variant: 'subtle',
  },
};

// AlertTitle

export const AlertTitle = {
  baseStyle: {
    _text: {
      fontSize: 'md',
      lineHeight: 5,
      fontWeight: 'bold',
    },
  },
};

// AlertIcon

export const AlertIcon = {
  baseStyle: {
    size: 6,
  },
};

// AlertDescription
export const AlertDescription = {
  baseStyle: {
    _text: {
      fontSize: 'sm',
    },
    flexShrink: 1,
  },
};
