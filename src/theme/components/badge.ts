import { mode, getColorScheme } from '../tools';

const baseStyle = {
  px: 1,
  py: 1,
  textTransform: 'uppercase',
  fontSize: 'xs',
  borderRadius: 'lg',
  fontWeight: 'bold',
};

function variantSolid(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.500`, `${colorScheme}.100`)(props),
    color: mode(`${colorScheme}.100`, `${colorScheme}.500`)(props),
    borderWidth: 1,
    borderColor: 'transparent',
  };
}

function variantSubtle(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.100`, `${colorScheme}.500`)(props),
    color: mode(`${colorScheme}.700`, `${colorScheme}.100`)(props),
    borderWidth: 1,
    borderColor: 'transparent',
  };
}

function variantOutline(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    borderColor: mode(`${colorScheme}.500`, `${colorScheme}.100`)(props),
    color: mode(`${colorScheme}.500`, `${colorScheme}.100`)(props),
    borderWidth: 1,
  };
}

const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline,
};

const defaultProps = {
  variant: 'subtle',
  colorScheme: 'gray',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
