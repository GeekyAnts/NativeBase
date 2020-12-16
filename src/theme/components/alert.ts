import { mode, getColor, getColorScheme, transparentize } from '../tools';

function getBg(props: Record<string, any>) {
  let { theme, status } = props;

  status = getColorScheme(props, status);
  const lightBg = getColor(theme, `${status}.100`, status);
  // const darkBg = getColor(theme, `${status}.800`, status);
  const darkBg = transparentize(`${status}.300`, 0.2)(theme);

  return mode(lightBg, darkBg)(props);
}

const variantSubtle = (props: Record<string, any>) => {
  let { status } = props;
  status = getColorScheme(props, status);
  let a = {
    border: 6,
    borderColor: 'transparent',
    bg: getBg(props),
    iconColor: mode(`${status}.700`, `${status}.200`)(props),
    textColor: mode('gray', 'white')(props),
  };
  return a;
};
const variantSolid = (props: Record<string, any>) => {
  let { status } = props;
  status = getColorScheme(props, status);
  return {
    border: 6,
    borderColor: 'transparent',
    bg: getBg(props),
    iconColor: mode(`${status}.700`, `${status}.200`)(props),
    textColor: mode('gray', 'white')(props),
  };
};
const variantLeftAccent = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = getColorScheme(props, status);
  return {
    border: 6,
    bg: getBg(props),
    iconColor: mode(`${status}.700`, `${status}.200`)(props),
    textColor: mode('gray', 'white')(props),
    borderColor: 'transparent',
    borderLeftColor: theme.colors[status][100],
  };
};
const variantTopAccent = (props: Record<string, any>) => {
  let { status, theme } = props;
  status = getColorScheme(props, status);
  return {
    border: 6,
    borderColor: 'transparent',
    borderTopColor: theme.colors[status][100],
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
};

const defaultAlertProps = {
  status: 'default',
  variant: 'subtle',
  p: 3,
  borderRadius: 'md',
};

export const Alert = {
  defaultProps: defaultAlertProps,
  variants,
};

// AlertTitle
const defaultAlertTitleProps = {
  fontSize: 'lg',
  fontWeight: 'bold',
};

export const AlertTitle = {
  defaultProps: defaultAlertTitleProps,
};

// AlertDescription
const defaultAlertDescriptionProps = {
  fontSize: 'lg',
};

export const AlertDescription = {
  defaultProps: defaultAlertDescriptionProps,
};
