import { mode, getColorScheme } from '../tools';

const baseStyle = {
  px: 1,
  _text: { fontSize: 'xs', fontWeight: 'bold' },
};

function variantSolid(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
    borderWidth: 1,
    borderColor: 'transparent',
  };
}

function variantSubtle(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.300`, `${colorScheme}.600`)(props),
    _text: { color: mode(`${colorScheme}.900`, `${colorScheme}.100`)(props) },
    borderWidth: 1,
    borderColor: 'transparent',
  };
}

function variantOutline(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    borderColor: mode(`${colorScheme}.500`, `${colorScheme}.400`)(props),
    _text: { color: mode(`${colorScheme}.500`, `${colorScheme}.400`)(props) },
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
  colorScheme: 'muted',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
