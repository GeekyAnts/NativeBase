import { mode, getColorScheme } from '../tools';

const baseStyle = {
  px: 2,
  py: '2px',
  alignItems: 'center',
  _text: { fontSize: 'xs', fontWeight: 'medium' },
};

function variantSolid(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 2,
  };
}

function variantSubtle(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.200`, `${colorScheme}.600`)(props),
    _text: { color: mode(`${colorScheme}.600`, `${colorScheme}.100`)(props) },
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'transparent',
  };
}

function variantOutline(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    borderColor: mode(`${colorScheme}.500`, `${colorScheme}.400`)(props),
    _text: { color: mode(`${colorScheme}.500`, `${colorScheme}.400`)(props) },
    borderRadius: 2,
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
  colorScheme: 'coolGray',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
