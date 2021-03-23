import { mode, getColorScheme } from '../tools';

const baseStyle = {
  px: 1,
  py: 1,
  _text: { fontSize: 'xs', textTransform: 'uppercase', fontWeight: 'bold' },
  borderRadius: 'lg',
};

function variantSolid(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.500`, `${colorScheme}.100`)(props),
    borderWidth: 1,
    borderColor: 'transparent',
  };
}

function variantSubtle(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.100`, `${colorScheme}.500`)(props),
    _text: { color: mode(`${colorScheme}.900`, `${colorScheme}.100`)(props) },
    borderWidth: 1,
    borderColor: 'transparent',
  };
}

function variantOutline(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    borderColor: mode(`${colorScheme}.500`, `${colorScheme}.100`)(props),
    _text: { color: mode(`${colorScheme}.500`, `${colorScheme}.100`)(props) },
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
  colorScheme: 'primary',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
