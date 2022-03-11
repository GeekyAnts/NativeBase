// import { mode, getColorScheme } from '../tools';

const baseStyle = {
  px: '2',
  py: '4',
  alignItems: 'center',
  _text: { fontSize: 'xs', fontWeight: 'medium' },
};
/**
 * TODO:- Figma has mentioned something related to warning variant and Pill Type
 *        Need More Clarification
 */
function variantSolid(props: Record<string, any>) {
  // const colorScheme = getColorScheme(props);
  const { colorScheme: C } = props;
  return {
    // bg: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
    // _text: { color: mode(`coolGray.100`, `coolGray.800`)(props) },
    _light: { bg: `${C}.600`, _text: { color: `${C}.50` } },
    _dark: { bg: `${C}.600`, _text: { color: `${C}.50` } },
    borderWidth: '1',
    borderColor: 'transparent',
    borderRadius: '2',
  };
}

function variantSubtle(props: Record<string, any>) {
  // const colorScheme = getColorScheme(props);
  const { colorScheme: C } = props;
  return {
    // bg: mode(`${colorScheme}.200`, `${colorScheme}.700`)(props),
    // _text: { color: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props) },
    _light: { bg: `${C}.100`, _text: { color: `${C}.900` } },
    _dark: { bg: `${C}.300`, _text: { color: `${C}.900` } },
    borderWidth: '1',
    borderRadius: '2',
    borderColor: 'transparent',
  };
}

function variantOutline(props: Record<string, any>) {
  // const colorScheme = getColorScheme(props);
  const { colorScheme: C } = props;
  return {
    // borderColor: mode(`${colorScheme}.500`, `${colorScheme}.400`)(props),
    // _text: { color: mode(`${colorScheme}.500`, `${colorScheme}.400`)(props) },

    _light: { bg: `${C}.500`, _text: { color: `${C}.600` } },
    _dark: { bg: `${C}.500`, _text: { color: `${C}.300` } },
    borderRadius: '2',
    borderWidth: '1',
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
