import { mode, getColor, getColorScheme, transparentize } from '../tools';

function getBg(props: Record<string, any>) {
  let { theme, status, variant } = props;

  status = getColorScheme(props, status);
  const lightBg =
    variant === 'solid'
      ? getColor(theme, `${status}.400`, status)
      : getColor(theme, `${status}.100`, status);
  const darkBg =
    variant === 'solid'
      ? transparentize(`${status}.300`, 0.8)(theme)
      : transparentize(`${status}.300`, 0.2)(theme);
  return mode(lightBg, darkBg)(props);
}

const variantSubtle = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = getColorScheme(props, status);
  return {
    bg: getBg(props),
    iconColor: mode(`${status}.500`, `${status}.200`)(props),
    textColor: getColor(theme, `${status}.900`, status),
  };
};

const variantOutline = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = getColorScheme(props, status);
  return {
    borderWidth: 1,
    borderColor: mode(`${status}.600`, `${status}.200`)(props),
    iconColor: mode(`${status}.500`, `${status}.200`)(props),
    textColor: getColor(theme, `${status}.900`, status),
  };
};
const variantOutlineLight = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = getColorScheme(props, status);
  return {
    borderWidth: 1,
    borderColor: transparentize(`${status}.600`, 0.2)(theme),
    iconColor: mode(`${status}.500`, `${status}.200`)(props),
    textColor: getColor(theme, `${status}.900`, status),
  };
};

const variantSolid = (props: Record<string, any>) => {
  let { status } = props;
  status = getColorScheme(props, status);
  return {
    borderWidth: 6,
    borderColor: 'transparent',
    bg: getBg(props),
    iconColor: mode(`white`, `${status}.700`)(props),
    textColor: mode('white', 'gray')(props),
  };
};
const variantLeftAccent = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = getColorScheme(props, status);
  return {
    borderWidth: 4,
    bg: getBg(props),
    iconColor: mode(`${status}.700`, `${status}.200`)(props),
    textColor: mode('gray', 'white')(props),
    borderColor: 'transparent',
    borderLeftColor: theme.colors[status][300],
  };
};
const variantTopAccent = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = getColorScheme(props, status);
  return {
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: theme.colors[status][300],
    bg: getBg(props),
    iconColor: mode(`${status}.700`, `${status}.200`)(props),
    textColor: mode('gray', 'white')(props),
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
  defaultProps: {
    status: 'default',
    variant: 'subtle',
    p: 4,
    borderRadius: 'lg',
  },
  variants,
};

// AlertTitle

export const AlertTitle = {
  defaultProps: {
    fontSize: 'md',
    fontWeight: 'semibold',
  },
};

// AlertDescription
export const AlertDescription = {
  defaultProps: {
    fontSize: 'sm',
    fontWeight: 'medium',
  },
};
